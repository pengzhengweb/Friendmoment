import React, { Component } from 'react'
import "./Home.css"
import TabBar from './TabBar'
import Me from './Me'
import Chats from './Chats'
import Discover from './Discover'
import Moment from './Moment'

export default class Index extends Component {
  render() {
    const pathObj = {
      "/me":<Me/>,
      "/chats":<Chats/>,
      "/discover":<Discover/>,
      "/moment":<Moment/>
    };
    let content = pathObj[window.location.pathname];
    debugger
    return (
      <div className="homeWrapper">
        {/* {content} */}
        <TabBar/>
      </div>
    )
  }
}
