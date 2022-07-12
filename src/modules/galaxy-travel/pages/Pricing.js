import React from 'react'
import { HeroImage, PricingCards } from '../components'

function Pricing() {
  return (
    <div className='min-h-screen w-full  '>
      <HeroImage>
        <h2 className='text-4xl uppercase font-bold'>pricing.</h2>
        <p className='text-xl font-semibold'>Choose your trip</p>
      </HeroImage>
      <PricingCards />
    </div>
  )
}

export default Pricing