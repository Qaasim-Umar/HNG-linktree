import React from 'react'
import logo from "./logo.png";
import './Header.css'

const Header = () => {
  return (
     <div className="app">
      <img src={logo} className="logo" alt='my-img' />
      <p><b>Qaasim Umar</b></p>
    </div>
  )
}

export default Header