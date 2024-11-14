import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import { assets } from '../assets/assets_frontend/assets.js';

const Appointment = () => {
    const {docId}=useParams();
    const [docInfo,setDocInfo]=useState(null);
    const {doctors}=useContext(AppContext); // we have all the doctors data 
    const fetchDocInfo=async ()=>{
        const docInfo=doctors.find(doc=>doc._id===docId) // If the docId matches the params Id the data is stored in this variable.
        setDocInfo(docInfo);
        console.log(docInfo);
    }
    useEffect(()=>{
        fetchDocInfo();
    },[doctors,docId]);
  return (
    <div>

        {/*--------------------Doctors DEtails----------------- */}
        <div>
            <div>

            {docInfo&&docInfo.image ? (
                <div>
                    <img src={docInfo.image || 'path_to_default_image.jpg'} alt="Doctor" />
                    
                    {/* Add more fields as needed */}
                </div>
            ) : (
                <p>Loading...</p> // or handle the null case
            )}
                
            </div>

            {docInfo ? (
                <div>
                    
                    <p>{docInfo.name} <img src={assets.verified_icon} /></p>
                    <div>

                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button>{docInfo.experience}</button>
                    </div>

                    <div>
                        <p>About <img src={assets.info_icon} /></p>
                        <p>{docInfo.about}</p>
                    </div>
                    {/* Add more fields as needed */}
                </div>
            ) : (
                <p>Loading...</p> // or handle the null case
            )}

            
        
        </div>

    </div>
  )
}

export default Appointment;