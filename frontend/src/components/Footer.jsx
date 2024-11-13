import React from 'react'
import { assets } from '../assets/assets_frontend/assets.js';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* -------------------Left Section---------------------- */}
            <div>
                <img  className='mb-3 w-44' src={assets.logo}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Get a home visit by our experienced & dedicated General Physicians
who are available 24X7. MedicMatch brings you the reliability of a 'family doctor'
along with a wide range of at-home medical services.</p>
            </div>
            {/* -------------------Center Section---------------------- */}
            <div >
                <p className='text-xl font-medium mb-3'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            {/* -------------------Right Section---------------------- */}
            <div>
                <p className='text-xl font-medium mb-3'>Get in Touch 🤙</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 92688 80303</li>
                    <li>support@kynohealth.com</li>
                </ul>   
            </div>
        </div>
        <div>

            {/*--------------------CopyWright Text--------- */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright@MedicMatch--All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;