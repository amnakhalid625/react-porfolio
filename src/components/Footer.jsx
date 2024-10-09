/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-400 py-8 mt-10'>
      <div className='container mx-auto text-center space-y-4'>
    
        <div className='flex justify-center space-x-6'>
          {/* LinkedIn */}
          <a href='https://www.linkedin.com/in/amna-khalid-612001273/' target='_blank' rel='noopener noreferrer'>
            <BsLinkedin className='text-3xl transition-transform transform hover:scale-110 hover:text-orange-300' />
          </a>
          {/* GitHub */}
          <a href='https://github.com/amnakhalid625' target='_blank' rel='noopener noreferrer'>
            <FaGithubSquare className='text-3xl transition-transform transform hover:scale-110 hover:text-orange-300' />
          </a>
      
        </div>

        {/* Footer Text */}
        <p className='text-sm'>
          © 2024 Amna Khalid | Frontend Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
