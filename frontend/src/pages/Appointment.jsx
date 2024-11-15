import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets_frontend/assets.js";

const Appointment = () => {
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  // Storing the Booking Slot Data 
  const [docSlot,setdocSlot]=useState([]);
  const [slotIndex,setSlotIndex]=useState(0);
  const [slotTime,setSlotTime]=useState('');
  const daysOfWeek=['MON','TUE','WED','THU','FRI','SAT','SUN'];

  const { doctors, currencySymbol} = useContext(AppContext); // we have all the doctors data
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId); // If the docId matches the params Id the data is stored in this variable.
    setDocInfo(docInfo);
    
  };
  // Todo- Understand This : The function to create the Time Slots 
  const getAvailableSlos=async () =>{
    
    setdocSlot([]);
     
     let today=new Date();
     
     for(let i=0;i<7;i++){
         
        let currentDate=new Date(today);
        currentDate.setDate(today.getDate()+i);
        
        let endTime= new Date();
        endTime.setDate(today.getDate()+i);
        endTime.setHours(21,0,0,0);
        
        if(today.getDate()===currentDate.getDate()){
            currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 :10);
            currentDate.setMinutes(currentDate.getMinutes()>30 ? 30 :0);

        }
        else{
            // we are in the future date 
            currentDate.setHours(10);
            currentDate.setMinutes(0);
        }
        let timeSlots=[];
        while(currentDate<endTime){
            // create the slot in every 30 mins 
            let formattedTime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
            timeSlots.push({
                datetime:new Date(currentDate),
                time:formattedTime
            })
            currentDate.setMinutes(currentDate.getMinutes()+30);
        }
        setdocSlot(prev=>([...prev,timeSlots]))
     }
  }
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(()=>{
    getAvailableSlos();
  },[docInfo]);
  useEffect(()=>{
    console.log(docSlot);
  },[docSlot]);
  return (
    <div>
      {/*--------------------Doctors DEtails----------------- */}
      <div>
        <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg shadow-lg">
          {docInfo && docInfo.image ? (
            <div className="bg-green-100 rounded-lg">
              <img
                className="bg-primary w-full sm:max-w-75 rounded-lg"
                src={docInfo.image || "path_to_default_image.jpg"}
                alt="Doctor"
              />

              {/* Add more fields as needed */}
            </div>
          ) : (
            <p>Loading...</p> // or handle the null case
          )}

          {docInfo ? (
            <div className="flex-1 border border-gray-500 rounded-lg p-8 py-7 shadow-lg bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
              <p className="flex items-center gap-2 text-2xl font-medium text-gray-900 ">
                {docInfo.name} <img className='w-8'src={assets.verified_icon} />
              </p>
              <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                <p>
                  {docInfo.degree} - {docInfo.speciality}
                </p>
                <button className="py-0.5 px-2 border text-xs rounded-full bg-green-50">{docInfo.experience}</button>
              </div>

              <div>
                <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                  About <img src={assets.info_icon} />
                </p>
                <p className="text-sm text-gray-500 max-w-[720px] mt-1">{docInfo.about}</p>
              </div>
              <p className="text-gray-500 font-medium mt-4">
                Appointment Fee : <span className="text-gray-600">{currencySymbol} {docInfo.fees}</span>
              </p>
              {/* Add more fields as needed */}
            </div>
          ) : (
            <p>Loading...</p> // or handle the null case
          )}
        </div>
      </div>



      {/* ----------------------------Booking Slots ----------------------*/}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex  gap-3 items-center w-full overflow-x-scroll mt-4">
            {/*--- It contains div for each 7 upcoming days which contains info about the day and the date info  */}
            {docSlot.length && docSlot.map((item,index)=>(
                
                <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-green-100' : 'border border-gray-200'}`} key={index}>
                    
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
            ))}
          </div>
          <div className="flex items-center gap-3 overflow-x-scroll mt-4 w-full">
            {docSlot.length && docSlot[slotIndex].map((item,index)=>(
                <p  onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime ? 'bg-green-100 text-black':'text-gray-400 border border-gray-200'}`} key={index}>
                    {item.time.toLowerCase()}
                </p>
            ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer shadow-md shadow-black/50 transition-all duration-300 ease-in-out 
    hover:text-white hover:-translate-y-1 
    hover:bg-gradient-to-br hover:from-[#111] hover:to-[#222] 
    hover:shadow-lg hover:shadow-black/60">Book an Appointment</button>
      </div>
      
    </div>
  );
};

export default Appointment;
