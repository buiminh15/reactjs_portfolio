import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


function NavbarResponsivePage() {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default NavbarResponsivePage