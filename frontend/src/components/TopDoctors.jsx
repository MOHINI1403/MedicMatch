import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx';

const TopDoctors = () => {
    const navigate=useNavigate();
    const {doctors}=useContext(AppContext);
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book </h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                doctors.slice(0,10).map((item,index)=>(
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img src={item.image}  className='bg-green-50'/>
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-700'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <button onClick={()=>{navigate('/doctors'),scrollTo(0,0)}}className='bg-green-50 text-gray-600 px-12 py-3 mt-10 rounded-full'>See More</button>

    </div>
  )
}

export default TopDoctors;
