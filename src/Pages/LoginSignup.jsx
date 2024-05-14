import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='Loginsignup'>
      <div className='main-container'>
        <h1>Sign Up</h1>
        <input type='text' placeholder='Your Name'/>
        <input type='text' placeholder='Email Address'/>
        <input type='text' placeholder='Password'/>
        <button>Continue</button>
        <p>Already have an account?<span>Login here</span></p>
        <div className='checkbox'>
        <input type='checkbox' />
        <label for="checkboxbtn">By Continuing, I agree to the terms of use and Privacy Policy</label>
        </div>
        </div>
    </div>
  )
}

export default LoginSignup