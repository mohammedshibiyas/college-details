import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './register.css'


const AdminReg = () => {
    const navigate=useNavigate()
    const [val,setval]=useState({
        name:"",
        username:"",
        password:""
    }  
    )
    const getData=(e)=>{
        e.preventDefault();
        // console.log(val);
        setval((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
  
      }

      const RegisterData=async(e)=>{
        e.preventDefault();
        console.log("hai",val);
        const res=await axios.post("http://localhost:3006/api/adduser",{...val})
        console.log(res);
        if(res.status!==201){
          alert("data not added")
        }
        else{
          alert("Data added")
          navigate("/login")
        }
      



      }



    
  return (
    <div>
      <div className="loginpage">
        <h3 id='reg'>Register</h3>
      <div className="user">
       <input type="text" name='name' placeholder='Name' onChange={getData} />
       </div>
      <div className="user">
       <input type="text" name='username' placeholder='Username'  onChange={getData}/>
       </div>
       <div className="user">
       <input type="text"  name='password' placeholder='password'  onChange={getData} />
       </div>
      
      <Link to="/login" className='login'><button id='login-btn' onClick={RegisterData}>Register</button></Link>
      <div><Link to="/login">Sign in</Link></div>
      </div>
    </div>
  )
}

export default AdminReg
