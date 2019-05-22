import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'
import {Icon} from 'antd'
import "./Cell.css"

export class Cell extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const {path,src,title} = this.props;
    const srcTrue = require('../assets/' + src);
    return (
      <div>
       <Link to={path}>
         <div className="cellWrapper">
          <div className="cellTitle">
            <img src={srcTrue} alt=""/>
            <span>{title}</span>
          </div>
          <div className="cell-allow-right">
            <Icon type="right" />
          </div>
         </div>
       </Link>
      </div>
    )
  }
}

Cell.propTypes = {
  path: PropTypes.string,
  src: PropTypes.string,
  title:PropTypes.string
};

export default Cell
