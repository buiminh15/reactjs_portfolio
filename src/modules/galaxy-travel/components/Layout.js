import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className='w-full min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout