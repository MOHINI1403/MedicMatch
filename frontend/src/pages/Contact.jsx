import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-16 rounded-md">
      <div className="container mx-auto px-6 lg:px-12 rounded-md">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Half - Info Cards */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Contact Information
            </h2>
            {/* Phone Card */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition duration-300">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-phone-icon-download-in-svg-png-gif-file-formats--call-logo-app-for-ios-store-apps-apple-watch-pack-user-interface-icons-1100768.png?f=webp&w=256"
                alt="Phone Icon"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Phone Number
                </h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9840/9840614.png"
                alt="Phone Icon"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Email
                </h3>
                <p className="text-gray-600">medicmatch.hospital.com</p>
              </div>
            </div>


            {/* Address Card */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition duration-300">
              <img
                src="https://cdn-icons-png.freepik.com/512/10351/10351546.png"
                alt="Phone Icon"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Address
                </h3>
                <p className="text-gray-600">221B Baker Street'Banglore</p>
              </div>
            </div>


            {/* Working Hours Card */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition duration-300">
              <img
                src="https://cdn-icons-png.freepik.com/256/7854/7854777.png?semt=ais_hybrid"
                alt="Phone Icon"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Working Hours
                </h3>
                <p className="text-gray-600">Office Timmings: 9AM-5PM</p>
              </div>
            </div>

          </div>

          {/* Right Half - Contact Form */}
          <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Have a question or want to work together? Fill out the form below,
              and we'll get back to you shortly.
            </p>

            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-black hover:text-white text-white font-bold py-2 px-6 rounded-lg transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
