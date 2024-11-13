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
                <img src={docInfo.image} />
            </div>
            <div>
                {/*----------------Doc Info-------------------- */}
                <p>{docInfo.name} <img src={assets.verified_icon} /></p>
                <div>
                    <p>{docInfo.degree} - {docInfo.speciality}</p>
                    <button>{docInfo.experience}</button>
                </div>
                {/*--------------Doctor About------------------ */}
                <div>
                    <p>About <img src={assets.info_icon} /></p>
                    <p>{docInfo.about}</p>
                </div>

            </div>
        
        </div>

    </div>
  )
}

export default Appointment;