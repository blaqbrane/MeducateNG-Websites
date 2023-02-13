import React from 'react'
import video from '../Assets/IMG_8615.MOV'
const Hero = () => {
  return (
    <div >
        <div className='relative h-screen w-full'>
            <video src={video} alt='' muted loop autoPlay className='w-full h-full object-cover' />

            <div className="w-full h-full top-0 left-0 absolute bg-gray-900/40 "></div>
            <div className='top-0 left-0 w-full h-full p-4 flex flex-col justify-center text-center absolute text-white font-bold'>
                {/* <h1 className='text-5xl'>Join Us</h1> */}
                <p className='text-3xl'>Teach one, Save all</p>
            </div> 
        </div>
        
    </div>
  )
}

export default Hero