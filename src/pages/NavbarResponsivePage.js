import React from 'react'
import { Hero, Navbar } from '../components/NavbarResponsive'

function NavbarResponsivePage() {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default NavbarResponsivePage