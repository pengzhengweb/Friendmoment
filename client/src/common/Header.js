import React from 'react'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import {Icon} from 'antd'
import "./Header.css"

const Header = ({isLeft=false,title,btn_icon,onClick,history}) => {
  
  return (
    
      <header className="header">
          {isLeft&&<div className="header-button is-left" >
                      <Icon type="left" />
                      <button onClick={() => history.push('/moments')}>返回</button>
                  </div>}
      
      <h1 className="header-title">{title}</h1>
      {btn_icon&&<div className="header-button is-right">
        <div className="header-button is-left" >
          <button onClick={onClick}>{btn_icon}</button>
        </div>
      </div>}
      </header>
    
  )
}
 
Header.propTypes = {
  title: PropTypes.string,
  btn_icon: PropTypes.string,
  onClick: PropTypes.func
};

export default withRouter(Header);


