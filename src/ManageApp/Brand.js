import React from 'react'
import logo from '../Assets/illustration-flowing-conversation.svg'

const Brand = () => {
  return (
    <div className='mx-auto px-6 mt-10'>
        <div className='flex flex-col items-center md:flex-row-reverse'>
            <div className="flex flex-col md:w-1/2">
                <h2 className='text-xl font-bold text-left max-w-md text-orange-500 mb-4'>OUR ACTIVITIES</h2>
                <div className='h-[3px] w-10 bg-[gray] rounded mb-4'/>
                <p className='max-w-sm text-left  mb-6'>
                    Please select an activity to learn more about what we are doing
                </p>
                <a href='/' className='bg-orange-500 px-2 py-3 mb-2 text-white'>INNOVATION IDENTIFICATION CALL</a>
                <a href='/' className='bg-orange-500 px-2 py-3 mb-2 text-white'>CASE STUDY RESEARCH</a>
                <a href='/' className='bg-orange-500 px-2 py-3 text-white'>FOSTERING PARTNERSHIPS</a>
            </div>
            <div className="flex flex-col w-full mt-6 md:w-1/2 md:mt-0">
                <img src={logo} alt="/" className='w-[80%]'/>
            </div>

        </div>
    </div>
  )
}

export default Brand