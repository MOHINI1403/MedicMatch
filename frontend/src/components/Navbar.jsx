import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets.js';
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    const [showMenu,setShowMenu]=useState(false);
    const [token,setToken]=useState(true);
  return (
    <div className='navbar-container flex items-center justify-between text-sm py-1 px-4 mb-5 border-b border-b-gray-400 shadow-custom-strong'>
      <img onClick={()=>navigate('/')} className='w-44 h-20 object-contain cursor-pointer' src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex items-center gap-5 font-medium text-base'>
        <li className='nav-item py-2'>
          <NavLink to="/" className='nav-link'>Home
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
        </li>
        <li className='nav-item py-2'>
          <NavLink to="/doctors" className='nav-link'>All Doctors
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>          
        </li>
        <li className='nav-item py-2'>
          <NavLink to="/about" className='nav-link'>About
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>  
        </li>
        <li className='nav-item py-2'>
          <NavLink to="/contact" className='nav-link'>Contact
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img src={assets.profile_pic} alt="" className='w-8 rounded-full'/>
                <img src={assets.dropdown_icon} className='w-2.5 ' />
                <div className='absolute top-2 right-0 text-base pt-14 font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')}className='hover:text-primary cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('my-appointments')}className='hover:text-primary cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-primary cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')}className='cta-button text-base hidden md:block'>Create Account</button>
        }
      </div>
    </div>
  )
}

export default Navbar;