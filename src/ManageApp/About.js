import React from 'react'
import Cards from './Cards'
const About = () => {
  return (
    <div className='mx-auto px-10 mt-16'>
        <h1 className='text-xl text-orange-500 font-bold mb-4 '>ABOUT US</h1>
        <div className='h-[3px] w-10 bg-[gray] rounded mb-4'/>
        <div className='md:grid grid-cols-2'>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div> 
    </div>
  )
}

export default About