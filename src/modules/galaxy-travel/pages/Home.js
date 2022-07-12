import React, { useEffect } from 'react'
import Video from '../components/Video'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Video />
    </div>
  )
}

export default Home