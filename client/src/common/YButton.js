import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import "./YButton.css"

const YButton = ({type,disabled,onClick,children}) => {
  
  return (
    <button
      className={classnames("y-button",{'is-disabled':disabled})}
      type={type}
      disadled={disabled}
      onClick={onClick}
    >
     {children}
    </button>
  )
}
 
YButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default YButton;


