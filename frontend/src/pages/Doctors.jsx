import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]); // We will add the doctors in this array.

  const applyFilters = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilters();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist !</p>
      <div className=" flex flex-cols sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-gray-600 text-sm">
          <p onClick={()=>speciality==='General physician'?navigate('/doctors'):navigate('/doctors/General%20physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General physician" ? "bg-green-100 text-black":""}`}>General Physician</p>
          <p onClick={()=>speciality==='Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gynecologist" ? "bg-green-100 text-black":""}`}>Gynecologist</p>
          <p onClick={()=>speciality==='Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Dermatologist" ? "bg-green-100 text-black":""}`}>Dermatologist</p>
          <p onClick={()=>speciality==='Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pediatricians" ? "bg-green-100 text-black":""}`}>Pediatricians</p>
          <p onClick={()=>speciality==='Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Neurologist" ? "bg-green-100 text-black":""}`}>Neurologist</p>
          <p onClick={()=>speciality==='Gastrologist'?navigate('/doctors'):navigate('/doctors/Gastrologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gastrologist" ? "bg-green-100 text-black":""}`}>Gastrologist</p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
        {filterDoc.map((item, index) => {
          return (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img src={item.image} className="bg-green-50" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-700">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
