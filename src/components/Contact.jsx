/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-10" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
       
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        

    
        <div className="flex justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <form className="space-y-6">
     
              <div>
                <label htmlFor="name" className="block mb-2 text-lg">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-400"
                  placeholder="Enter Your Name" 
                />
              </div>

        
              <div>
                <label htmlFor="email" className="block mb-2 text-lg">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-400"
                  placeholder="Enter Your Email" 
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2 text-lg">Message</label>
                <textarea 
                  id="message"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-400"
                  rows="5"
                  placeholder="Enter Your Message" 
                />
              </div>

              {/* Send Button */}
              <button 
                className="bg-gradient-to-t from-orange-300 to-red-400 text-white transform transition-transform duration-300 hover:scale-110 hover:shadow-lg px-6 py-3 rounded-full w-full text-lg">
              <NavLink to='/'>Send Message</NavLink>  
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
