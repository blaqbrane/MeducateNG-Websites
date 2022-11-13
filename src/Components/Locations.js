import React from 'react'
import borabora from "../Static/borabora.jpg"
import borabora2 from "../Static/borabora2.jpg"
import keywest from "../Static/keywest.jpg"
import maldives from "../Static/maldives.jpg"
import maldives2 from "../Static/maldives2.jpg"


const Locations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-14 px-4 text-center' id="location">
        <h1 className='text-xl font-bold uppercase'>All-Inclusive Resorts</h1>
        <p className='py-3 text-xl'> On the Caribbean's Best Beaches</p>
        <div className=' grid grid-rows-none gap-2 md:grid-cols-5 p-2 '>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={borabora} alt=""/>
            <img className='w-full h-full object-cover' src={borabora2} alt=""/>
            <img className='w-full h-full object-cover' src={keywest} alt=""/>
            <img className='w-full h-full object-cover' src={maldives} alt=""/>
            <img className='w-full h-full object-cover' src={maldives2} alt=""/>
        </div>

    </div>
  )
}

export default Locations