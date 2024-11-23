import React, { useState } from "react";

const Login = () => {
  const [state,setState]=useState('Sign Up');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

  const onSubmitHandler=async (event) =>{
    event.preventDefault();
  }

  return (
    
    <div className=" min-h-screen flex justify-center items-center py-16 rounded-md">
      <div className="container mx-auto px-6 lg:px-12 rounded-md">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Half - Info Cards */}
          <div className="lg:w-1/2 space-y-6 mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Welcome {state === 'Sign Up' ? 'Back' : ''}
            </h2>
            <img className="" src='https://img.lovepik.com/photo/45010/2345.jpg_wh860.jpg' />

          </div>

          {/* Right Half - Contact Form */}
          <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              {state === 'Sign Up' ? 'Create Account' : 'Login'}
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Please {state==='Sign Up' ? 'Sign Up' : 'Log In'} to book Appointment
            </p>

            <form className="space-y-6">
              {/* Name Field */}
              {
                state==='Sign Up' 
                && <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e)=>setName(e.target.name)} value={name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              
              }
            
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e)=>setEmail(e.target.email)} value={email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              {/* Password Field  */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e)=>setPassword(e.target.password)} value={password}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Password"
                />
              </div>
              {/* Set-Password Field  */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e)=>setConfirmPassword(e.target.confirmPassword)} value={confirmPassword}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Confirm the Password "
                />
              </div>


              

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-black hover:text-white text-white font-bold py-2 px-6 rounded-lg transition-all duration-200"
                >
                  {state==='Sign Up' ? 'Create Account' : 'Login'} 
                </button>
                {
                  state==='Sign Up'
                  ? <p className="mt-2">Already have an account ? <span onClick={()=>setState('Login')} className="text-primary underline cursor-pointer">Login Here</span></p>
                  : <p className="mt-2">Create a new account ? <span onClick={()=>setState('Sign Up')}  className="text-primary underline cursor-pointer">Click Here</span></p>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
