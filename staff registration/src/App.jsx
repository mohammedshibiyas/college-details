import { useState } from 'react'

import './App.css'
import Home from './components/body/home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/body/login/Login'
import AdminReg from './components/register/Admin-reg'
import Adminhome from './components/body/admin/Adminhome'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/register' Component={AdminReg}/>
        <Route path='/login' Component={Login}/>
        <Route path='/adminhome' Component={Adminhome}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
