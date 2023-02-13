import React from 'react'
import Navbar from './Navbar'
import { Descriptions } from './Data'
const Description = () => {
  return (
    <div className='relative h-screen'>
        <Navbar/>
        <div className='absolute w-full'>
            <div className='h-full top-0 left-0 px-10 flex flex-col justify-center text-center '>
                {Descriptions.map((item) => 
                <div key={item.id}>
                    <h1 className='text-2xl mt-6 mb-3 text-orange-500 font-bold text-center'>{item.title}</h1>
                    <p className='px-2 md:max-w-md md:px-4 md:text-center md:mx-auto'>{item.text}</p>
                </div>
                )}
               
            </div>
        </div>
        
        
    </div>
  )
}

export default Description