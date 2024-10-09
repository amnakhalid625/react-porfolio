/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      
    </>
  )
}

export default AppLayout
