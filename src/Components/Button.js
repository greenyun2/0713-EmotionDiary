import React from 'react'
import './Button.css'

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default"
  return (
    <div>
      <button 
      className={["Button", `Button_${btnType}`].join(" ")} 
      onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button;