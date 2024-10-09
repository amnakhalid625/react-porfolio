/* eslint-disable no-unused-vars */
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AppLayout from './components/AppLayout'
import { footer } from 'framer-motion/client'
import Footer from './components/Footer'

const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/about',
          element:<About />
        },
        {
          path:'/services',
          element:<Services/>
        },
        {
          path:'/projects',
          element:<Projects />
        },
        {
          path:'/contact',
          element:<Contact />
        },
        {
          path:'/footer' ,
          element:<Footer />
        }
    
      ]
    },
    
  ])
  return (
  <RouterProvider router={router} />
  )
}

export default App;














