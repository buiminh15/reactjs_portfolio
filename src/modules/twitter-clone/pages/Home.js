import React from 'react'
import { MainTweeting, Sidebar, Trends } from '../components'

function Home() {
  return (
    <div className='w-full min-h-screen'>
      <div className="flex h-full">
        <Sidebar />
        <MainTweeting />
        <Trends />
      </div>
    </div>
  )
}

export default Home