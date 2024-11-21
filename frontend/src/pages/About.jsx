import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import FAQSection from "../components/FAQSection.jsx";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-800 font-medium">US</span>
        </p>
      </div>
      {/*----------------------Introduction Section-------------------------- */}
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img src={assets.header_profile} className="w-full md:max-w-[360px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700">
          <p>
            Welcome to{" "}
            <span className="text-gray-800 font-medium">MedicMatch</span> your
            trusted partner for convenient and efficient healthcare management.
            At MedicMatch, we recognize the challenges individuals face in
            scheduling doctor appointments and managing their healthcare needs.
            Our platform is designed to simplify these processes, ensuring a
            seamless experience for all.
          </p>

          <p>
            At MedicMatch, we are committed to delivering the best healthcare
            experience for patients nationwide. Our user-friendly platform makes
            it easy for patients to connect with trusted healthcare providers,
            schedule appointments with ease, and access top-quality medical
            services. Whether you're seeking expert advice or a consultation,
            MedicMatch is your go-to destination for seamless healthcare
            solutions. We continuously strive to enhance our platform by
            integrating the latest advancements to improve user experience and
            provide superior services.
          </p>

          <h4 className="text-gray-900">Our Vision</h4>

          <p>
            At MedicMatch, our vision is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it. By combining technology with
            trusted medical expertise, we are dedicated to providing a
            convenient, efficient, and personalized healthcare journey for all
          </p>
          <br />
        </div>
      </div>
      {/*----------------------Usage Section---------------------------- */}
      <div class="container mx-auto my-16 px-4 text-center rounded-lg ">
        <h2 class="text-3xl font-semibold text-gray-800 mb-8">Online Appointment Booking Platform</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50 p-6">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div class="mb-4">
              <img
                src={assets.about_img_2}
                alt="Search Doctors"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h3 class="text-xl font-medium text-gray-700 mb-4">
              Search Doctor by Speciality
            </h3>
            <p class="text-gray-600">
              With MedicMatch, scheduling is simplified through a well-organized
              platform that eliminates the need for endless back-and-forth
              communication, ensuring streamlined interactions.Find the doctors by their speciality.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="mb-4">
              <img
                src={assets.about_img_1}
                alt="Powerful & Personal"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h3 class="text-xl font-medium text-gray-700 mb-4">Know your Doctor</h3>
            <p class="text-gray-600">
            Request appointments based on slots, date,consultation location. 
            Know your Doctor to book confirmed doctor Appointment effortlessly with clinic details of practice location to engage with patients effortlessly.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="mb-4">
              <img
                src={assets.about_img_3}
                alt="Personalisation"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h3 class="text-xl font-medium text-gray-700 mb-4">
              Make Payment for the Confirmed Appointment
            </h3>
            <p class="text-gray-600">
            Avoid endless back and forth communication; empowering with simple online portal payment to avoid long queues and hassle free experience.

            </p>
          </div>
        </div>
      </div>
      {/*--------------------Why Choose Us Section-----------------------*/}
      <div class="container mx-auto my-16 px-4 text-center">
        <h2 class="text-3xl font-semibold text-gray-800 ">Why Choose Us</h2>
        <p className="text-sm font-medium text-gray-500 mb-8">Online Appointment, Phone-in Appointment, Walk-in Appointment </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-6">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="mb-4">
              <img
                src="https://cdn4.iconfinder.com/data/icons/job-vacancy-color-filled/2000/04-08-20_Job_vacancy_color12-512.png"
                alt="Simplifies Scheduling"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h3 class="text-xl font-medium text-gray-700 mb-4">
              Simplifies Scheduling
            </h3>
            <p class="text-gray-600">
              With MedicMatch, scheduling is simplified through a well-organized
              platform that eliminates the need for endless back-and-forth
              communication, ensuring streamlined interactions. Effortlessly
              manage multiple locations and staff by customizing calendar
              visibility, and block off dates when you’ re unavailable.
              MedicMatch’s powerful interface allows you to handle phone-in,
              walk-in, and online requests seamlessly, offering an efficient
              solution for managing your clinic and appointments.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/13730/13730911.png"
                alt="Powerful & Personal"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h3 class="text-xl font-medium text-gray-700 mb-4">Convience</h3>
            <p class="text-gray-600">
              With MedicMatch, booking an appointment is more convenient than
              ever. Simply select the specialist and doctor you want, choose
              your preferred time slot and date, and book your appointment
              seamlessly. You can even make online payments for a hassle-free
              experience. Say goodbye to long queues and waiting times, and
              enjoy a smooth, efficient process, ensuring your healthcare needs
              are met on time and with ease.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="mb-4">
              <img
                src="https://cdn2.iconfinder.com/data/icons/coronavirus-protective-measures-highlight/128/button-Call-doctor-online_consultation-medical_advice-512.png"
                alt="Personalisation"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h3 class="text-xl font-medium text-gray-700 mb-4">
              Queue Management
            </h3>
            <p class="text-gray-600">
              MedicMatch not only ensures a streamlined appointment booking
              experience but also offers personalized features to enhance your
              healthcare journey. Keep track of all your past appointments in
              one place and access a tailored recommendation system that
              suggests specialists and treatment options based on your history.
              Our platform adapts to your needs, making it easier to stay on top
              of your healthcare while receiving the best care for you, all with
              just a few clicks.
            </p>
          </div>
        </div>
      </div>
      {/*-------------------Frequently Asked Question Section------------- */}
      <FAQSection />

    </div>
  );
};

export default About;
