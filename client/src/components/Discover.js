import React, { Component } from 'react'
import Header from '../common/Header'
import Cell from './Cell'
import "./Discover.css"

export default class Discover extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
 
  render() {
    //const {user} = this.props;
    return (
      <div className="find">
        <Header title="发现"/>
        <div className="content">
           <Cell src="pyq.jpg" title="朋友圈" path="/moments" />
        </div>
      </div>
    )
  }
}
