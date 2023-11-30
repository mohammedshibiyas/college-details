
    import React from 'react';
import { useLocation } from 'react-router-dom';
import './adminhome.css'



const Adminhome = () => {
  const location = useLocation();
  const username = location.state && location.state.username;


  return (
    <div>
    <div className='admin-home-user'><h3>Hello <i class="bi bi-person-fill"></i><span>{username}</span></h3></div>
    </div>
  )
}

export default Adminhome
  