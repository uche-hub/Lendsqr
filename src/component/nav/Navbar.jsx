import React from 'react'
import { Dropdown, LogoIcon, NavLogo, Notification } from '../icons/index.js';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
          <div className="navLogo">
            <NavLogo/>
          </div>
      </div>
      <div className="topRight">
          <div className="link">
              <p>Docs</p>
          </div>
          <div className="notification">
              <Notification />
          </div>
          <div className="navImgContainer">
              <img className="navImg" src={require ('../../images/image 4.png')} alt="" srcset="" />
          </div>
          <div className="navName">
              <p>Adedeji</p>
          </div>
          <div className="dropdown">
              <Dropdown />
          </div>
      </div>
    </div>
  )
}

export default Navbar;