'use client';

import About from '@/Components/About'
import Contact from '@/Components/Contact'
import Experiences from '@/Components/Experiences'
import Footer from '@/Components/Footer'
import Herosection from '@/Components/Herosection'
import Navbar from '@/Components/Navbar'
import Work from '@/Components/Work'
import ActiveSectionContextProvider from '@/context/active-section-context';
import { useEffect } from 'react'
import React from 'react'

const page = () => {
  // useEffect( () => {

  //   (

  //     async () => {

  //         const LocomotiveScroll = (await import('locomotive-scroll')).default

  //         const locomotiveScroll = new LocomotiveScroll();

  //     }

  //   )()

  // }, [])
  return (
    <div>
      <Herosection/>
      <About/>
      <Work/>
      <Experiences/>
      <ActiveSectionContextProvider>
      <Contact />
    </ActiveSectionContextProvider>
      <Footer/>
      
    </div>
  )
}

export default page

