import React from 'react'

const Custombutton = ({btnType, title, handleClick, styles}) => {
  return (
    <button 
        type = {btnType}
        className={`${styles}`}
        onClick ={handleClick}
    >
        {title}
    </button>
  )
}

export default Custombutton