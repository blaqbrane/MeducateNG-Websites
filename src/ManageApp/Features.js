import React from 'react'
import logo from '../Assets/illustration-grow-together.svg';
const Features = () => {
  return (
    <div className='px-6 mt-14 mx-auto'>
        <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col text-left md:w-1/2'>
                {/* <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-200 font-bold max-w-md md:text-3xl ">
                 ILLUSTRATIVE RESEARCH METHODOLOGY
                </h2> */}
                <h2 className='text-3xl'>
                    ILLUSTRATIVE RESEARCH METHODOLOGY
                </h2>
                <p className="text-[gray] max-w-sm mt-4">
                Come experience the very Pinnacle of luxury Carribbean all inclusive
                vacations for couples at BEACHES Resorts. Our luxury beach resortd.
                set along the most topical settings and exquisite beaches in Saint
                Lucia, Jaimaica, Antigua. The Bahamas, Grenada, Barbados and Curacao,
                 Carribbean destination weddings and honeymoon packages
               </p>
            </div>
            <div className='flex flex-col text-left mt-10 md:w-1/2 md:mt-0'>
                <img src={logo} alt='/' className='md:only: w-[80%]'/>
            </div>
        </div>
    </div>
  )
}

export default Features