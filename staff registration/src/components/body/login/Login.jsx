import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate=useNavigate();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const loginAdmin=async(e)=>{
    e.preventDefault();

    try {
        const res=await axios.post('http://localhost:3006/api/login',{
          username:username,
          password:password
        });
        const data=res.data
        console.log(data);

        if(res.status!==404){
            const token=data.token;
            localStorage.setItem("token",JSON.stringify(token))
            navigate("/adminhome", { state: { username } })
        }
        else{
          alert(data.msg)
        }
    } catch (error) {
      alert("login failed")
    }
    


  
  }
  return (
    <div>
      <div className="loginpage">
        <h3>Login</h3>
      <div className="logincard">
      <div className="user">
       <input type="text" placeholder='Username' value={username}  onChange={(e)=>setUsername(e.target.value)}/>
       </div>
       <div className="user">
       <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

       </div>
      <Link className='login'><button id='login-btn' onClick={loginAdmin}>LOGIN</button></Link>
      </div>
      </div>
    </div>
  )
}

export default Login
