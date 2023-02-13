import React, { useState } from 'react'
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri'
import avatar from '../Assets/avatar3.jpg'
const Cards = () => {
    const[isAbout, setIsAbout] = useState(false);
  return (
    <div>
        <div className='mb-10'>
            <div className='flex flex-col md:flex-row items-center'>
                <div className=''>
                    <img className='rounded-full w-[150px] h-[150px] object-cover md:w-[60px] md:h-[60px] ' src={avatar} alt="" />
                </div>
                <div className='flex flex-col ml-4'>
                    <h3 className='text-sm font-bold'>DR.UGURU WILLIAMS ORJI <span className='text-[gray]'><i>Team Lead</i></span> </h3>
                    <div className={isAbout ? "hidden" : "flex items-center"}>
                     <p className='text-xs font-bold'>READ MORE</p>
                     <RiArrowDownSLine onClick={() => setIsAbout(!isAbout)} size={20}/>
                    </div>
                    <p className={isAbout ? "max-w-sm text-[gray]" : "hidden"}>
                        A good model wit 6years of experience in public health, help thousands of youth find there purpose while trying to find his purpose that's sarcastic i know
                    </p>
                    {isAbout && <RiArrowRightSLine size={20} onClick={() => setIsAbout(!isAbout)}/>}
                     
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cards