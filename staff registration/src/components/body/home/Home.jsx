import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
        <h3 id='type'>Account Types</h3>
     
     <div className="admin">
     <Link to='/register'> <button>ADMIN</button></Link>
     </div>
     <div className="admin">
     <Link> <button>STAFF</button></Link>
     </div>
     {/* <div className="admin">
     <Link> <button>STUDENT</button></Link>
     </div> */}
    </div>
  )
} 

export default Home
