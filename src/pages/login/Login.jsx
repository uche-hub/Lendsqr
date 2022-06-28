import React from 'react'
import { LogoIcon, LogoText } from '../../component/icons/index.js'
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="left-side">
        <div className="login-logos">
          <LogoIcon />
          <div  className="logoText">
            <LogoText />
          </div>
        </div>
        <img className='loginImg' src={require ('../../images/login.jpg')} alt="login image" srcset="" />
      </div>
      <div className="right-side">
        <div className="loginForm">
          <div className="heading">
            <h1 className='headingText'>Welcome!</h1>
            <p className='headingSub'>Enter details to login.</p>
          </div>

          <div className="form">
            <form>
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />

              <p className='forgotPassword'>Forgot Password?</p>

              <button className='loginBtn'>LOG IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login