import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ docId, speciality }) => {
    const { doctors } = useContext(AppContext);
    const [relatedDoctors, setRelatedDoctors] = useState([]);
    const navigate = useNavigate();

    // Function to filter the related doctors
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelatedDoctors(doctorsData);
        }
    }, [doctors, speciality, docId]);

    return (
        relatedDoctors.length > 0 ? (
            <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
                <h1 className='text-3xl font-medium'>Related Doctors</h1>
                <p className='sm:w-1/3 text-center text-sm'>Browse other {speciality} who may help you </p>
                <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                    {
                        relatedDoctors.slice(0, 5).map((item, index) => (
                            <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                                <img src={item.image} className='bg-green-50 ' alt="Doctor" />
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
            </div>
        ) : (
            <p>Loading...</p>
        )
    );
}

export default RelatedDoctors;
