import React from 'react'
import logo from '../Logo/logo_iw.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex content-center justify-between h-16 w-full text-white bg-[#763dc3]'>
       <img className='h-12 w-12 m-2' src={logo} alt="logo"/>
      <div className='text-[1.8rem] font-light h-12 w-[52%] mt-2'>INTERNWARE</div> 
      <div className='flex content-center justify-between w-[40%] pr-6 text-[1.4rem] mt-3'>
        <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Departments">Departments</Link>
      <Link to="/Register">Register</Link>
      </div>
       </div>
  )
}

export default Navbar
