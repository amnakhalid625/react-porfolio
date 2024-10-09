/* eslint-disable no-unused-vars */
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-gray-900 text-gray-300 px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='font-bold  hidden text-2xl md:inline'>Amna</div>
        <div className='space-x-7'>
            <NavLink to="/"  className='hover:text-gray-400'>Home</NavLink>
            <NavLink to="/about" className='hover:text-gray-400'>About Me</NavLink>
            <NavLink to="/services" className='hover:text-gray-400'>Services</NavLink>
            <NavLink to="/projects" className='hover:text-gray-400'>Projects</NavLink>
            <NavLink to="/contact" className='hover:text-gray-400'>Contact</NavLink>
        </div>
        <button className='bg-gradient-to-t from-orange-300 to-red-400 text-gray-300 font-bold hidden  md:inline
         transform transition-transform
         duration-300 hover:scale-105 px-4 py-2 rounded-sm'><NavLink to='/contact'>Connect Me</NavLink></button>
      </div>
    </nav>
  )
}
