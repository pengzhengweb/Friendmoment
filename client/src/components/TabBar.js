import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd'
import "./TabBar.css"

export default class TabBar extends Component {
  render() {
    return (
      <div className="TabBarWrapper">

        <div className="tab-item">
          <NavLink to="/chats" activeClassName="selected">
            <Icon type="wechat" />
            <div className="tab-item-label">微信</div>
          </NavLink>
        </div>

        <div className="tab-item">
          <NavLink to="/contacts" activeClassName="selected">
            <Icon type="unordered-list" className="tab-item-icon"/>
            <div className="tab-item-label">通讯录</div>
          </NavLink>
        </div>
        <div className="tab-item">
          <NavLink to="/discover" activeClassName="selected">
            <Icon type="compass" className="tab-item-icon"/>
            <div className="tab-item-label">发现</div>
          </NavLink>
        </div>
        <div className="tab-item">
          <NavLink to="/me" activeClassName="selected">
            <Icon type="user" className="tab-item-icon"/>
            <div className="tab-item-label">我</div>
          </NavLink>
        </div>
      </div>
    )
  }
}
