import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/*---------------------Left Side-------------------------*/}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br /> With Trusted Doctors </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img src={assets.group_profiles} alt=''  className='w-20'/>
                <p>Browse our trusted doctors and book your appointment <br  className='hidden sm:block'/>
                 healthcare has never been this simple !</p>
            </div>
            <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105  transition-transform duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#111] hover:to-[#222] 
    hover:shadow-lg hover:shadow-black/60 hover:text-white '>Book Appointment <img src ={assets.arrow_icon}  className='w-3'/> </a>
        </div>
        {/*---------------------Right Side-------------------------*/}
        <div className='md:w-1/2 relative'>
            <img  src={assets.header_profile} className='w-full md:absolute bottom-40 left-2  h-auto rounded-lg '/>
        </div>


    </div>
  )
}

export default Header;