// @login & register
const express = require('express');
const router = express.Router();
const passport = require('passport');

const Profile = require('../../models/Profile');

// @route  GET api/profiles/test
// @desc   返回的请求的json数据
// @access public
router.get('/test', (req, res) => {
  res.json({ msg: 'profiles works' });
});

// @route  POST api/profiles/add
// @desc   创建朋友圈信息接口
// @access private
router.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const profilesFields = {};
    if (req.body.img) profilesFields.img = req.body.img;
    if (req.body.name) profilesFields.name = req.body.name;
    if (req.body.text) profilesFields.text = req.body.text;

    // 多张图片
    if (req.body.imgs) {
      profilesFields.imgs = req.body.imgs.split('|');
    }

    // 存储数据
    new Profile(profilesFields).save().then(profile => {
      res.json(profile);
    });
  }
);

// @route  GET api/profiles/latest
// @desc   下拉刷新的接口
// @access private
router.get(
  '/latest',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.find()
      .sort({ date: -1 })
      .then(profiles => {
        if (!profiles) {
          res.status(404).json('没有任何消息');
        } else {
          let newProfiles = [];
          for (let i = 0; i < 3; i++) {
            if (profiles[i] != null) {
              newProfiles.push(profiles[i]);
            }
          }
          res.json(newProfiles);
        }
      });
  }
);

// @route  GET api/profiles/:page/:size
// @desc   上拉加载的接口
// @access private
// 10条 下拉刷新(请求)3条 上拉加载(请求)3条
router.get(
  '/:page/:size',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.find()
      .sort({ date: -1 })
      .then(profiles => {
        if (!profiles) {
          res.status(404).json('没有任何信息');
        } else {
          let size = req.params.size;
          let page = req.params.page;
          let index = size * (page - 1);
          let newProfiles = [];
          for (let i = index; i < size * page; i++) {
            if (profiles[i] != null) {
              newProfiles.unshift(profiles[i]);
            }
          }
          res.json(newProfiles);
        }
      });
  }
);

module.exports = router;
