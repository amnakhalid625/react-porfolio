/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import HomeImage from '../assets/myImage.jpeg'
import { NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <div className='bg-gray-900 text-gray-300 text-center py-32'>

      <img src={HomeImage} alt=""  className='mx-auto mb-8 w-52 h-52 rounded-full object-contain transform transition-transform duration-300
       hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'am {' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400'>Amna Khalid</span>
        , Frontend Developer
      </h1>
      <p className='mt-4 text-lg text-gray-400'>
        I specialized in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-10'>
        <button className=' font-bold bg-gradient-to-t from-orange-300 to-red-400 text-gray-300 hidden  md:inline transform transition-transform
         duration-300 hover:scale-105 px-4 py-2 rounded-sm'> <NavLink to='/contact'>Contact Me</NavLink></button>
        <button className='bg-gradient-to-t from-pink-700 to-yellow-100 text-gray-300 hidden  md:inline transform transition-transform
         duration-300 hover:scale-105 px-4 py-2 rounded-sm'> <NavLink to= '/'>Resume</NavLink></button>
      </div>
    </div>
  )
}
