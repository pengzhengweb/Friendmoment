import React, { Component } from 'react'
import Header from '../common/Header'
import YButton from '../common/YButton'
import "./Me.css"

export default class Me extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  handleLogout(){
    console.log("handleLogout");
  }
  render() {
    const {user} = this.props;
    return (
      <div className="mine">
        <Header title="我"/>
        <div className="containerr">
          <div className="cell-wrapper">
            {user&&<div className="cell-title">
                    <img src={user.avatar} alt=""/>
                    <span>{user.name}</span>
                  </div>}
          </div>
          <div className="btn_wrapper">
            <YButton onClick={() => this.handleLogout()}>退出登录</YButton>
          </div>
        </div>
      </div>
    )
  }
}
