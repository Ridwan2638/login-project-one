import React from 'react'
import image from 'react'
import myImage from '../assets/clip-message-sent.png';


const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="first-section">
          <div className="content">
            <h3 className='logo'>Digital</h3>
            <h2 className='heading'>Artificial Intelligence Driving <br />
            Results For The Travel Industry</h2>
            <p className="welcome">Welcome  back! Please login to your account.</p>
            <form>
              <input type="text" placeholder='Email Address'/>
              <input type="password" placeholder='Password'/>

              <div className="space">
                <label className='remember-me'>
                  <input type="checkbox" name='Remember me' />Remember me
                  
                </label>
                <a href="#">Forgot Password? </a>
              </div>
              <div className="btn">
                <button className='colorfull'>Login</button>
                <button className='second'>Sign Up</button>
              </div>
            </form>
            <div className="others">
              <p>Or login with</p>
              <a href="www.facebook.com/login">Facebook</a>
              <a href="www.linkedin.com/login">LinkedIn</a>
              <a href="www.google.com/login">Google</a>
            </div>
          </div>
        </div>
        <div className="second-section">
          <nav>
            <p className='decor'>Home</p>
            <p>About us</p>
            <p>Blog</p>
            <p>Pricing</p>
          </nav>

          <img src={myImage} alt="Ride on" />
          
        </div>
      </div>
    </div>
  )
}

export default Login