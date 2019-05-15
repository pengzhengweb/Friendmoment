const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    img:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    test:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    date: {
        type: Date,
        default: Date.now
      }

})

module.exports = Profile = mongoose.model('profiles',ProfileSchema);