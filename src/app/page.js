import React from 'react'
import Slider from '@/components/slider'
import About from '@/components/About'

const page = () => {
  return (
    <div className=''>
     <div className=' border-b dark:border-b-gray-700 '>
      <Slider />
      </div>
      <div className='my-6'>
      <About />
      </div>
    </div>
  )
}

export default page