import React from 'react'
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    name: 'Basic',
    title: '1BTC',
    info1: '3 Days',
    info2: 'Views',
    info3: 'Featured',
    info4: 'Private Quarters',
  },
  {
    id: 2,
    name: 'Suite',
    title: '1BTC',
    info1: '3 Days',
    info2: 'Views',
    info3: 'Featured',
    info4: 'Private Quarters',
  },
  {
    id: 3,
    name: 'Executive',
    title: '1BTC',
    info1: '3 Days',
    info2: 'Views',
    info3: 'Featured',
    info4: 'Private Quarters',
  },
]

function PricingCard({item}) {
  return (
    <div className='border border-white flex flex-col justify-center items-center py-10 gap-6 hover:bg-[#141414]'>
      <h3 className='font-bold text-xl'>- {item.name} -</h3>
      <span className='divide-x-4 divide-emerald-50'></span>
      <h1 className='text-6xl font-bold'>{item.title}</h1>
      <h3 className=' text-xl'>- {item.info1} -</h3>
      <h3 className=' text-xl'>- {item.info2} -</h3>
      <h3 className=' text-xl'>- {item.info3} -</h3>
      <h3 className=' text-xl'>- {item.info4} -</h3>
      <Link to='galaxy/contact' className='border border-white text-center uppercase py-4 w-3/4 cursor-pointer hover:bg-[#252525]'>
        book
      </Link>
    </div>
  )
}

function PricingCards() {
  return (
    <div className='bg-black h-full w-full text-white'>
      <div className='grid grid-cols-1 gap-10 px-16 py-10 lg:grid-cols-3 lg:max-w-[1140px] lg:mx-auto'>
        {
          data.map(item => (
            <PricingCard key={`pricing-card-id-${item.id}`} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default PricingCards