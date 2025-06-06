import React, { useState } from 'react'
import './Login.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import pass_icon from '../../assets/password.png'


function Login() {

    const[action,setAction] = useState("Sign Up")

    return (
    <>
    <div className='container'>
    <div className="header">
    <h1>{action}</h1>
    </div>
    <div className="inputs">
      {action==="Login" ? <div></div> : <div className="input">
        <img src={user_icon} alt="" />
      <input type="text" placeholder='Name' />
      </div>}
      <div className="input">
      <img src={email_icon} alt="" />
      <input type="email" placeholder='Email' />
      </div>
      <div className="input">
      <img src={pass_icon} alt="" />
      <input type="password" placeholder='Password' />
      </div>
    </div>
    <div className="submit">
      <button className={action=== "Login" ? "submit gray" : "submit"} 
      onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
      <button className={action=== "Sign Up" ? "submit gray" : "submit"}
        onClick={()=>{setAction("Login")}}>Login</button>
    </div>
    </div>
    </>
  )
}
export default Login
