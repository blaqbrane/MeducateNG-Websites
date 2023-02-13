import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,} from "react-icons/fa"
import logo from '../Assets/MeducateNg .JPG'
export {default as Footer} from './Footer'
const Footer = () => {
  return (
    <div className='bg-orange-500 text-white mt-10 mx-auto max-w-[1240px] px-5 py-5 md:px-20 md:py-10'>
           <div className="flex flex-col md:flex-row justify-between items-center">
                <div className='flex items-center'>
                  <img src={logo} alt='/' className='w-[40px] h-[40px] rounded-md'/>
                  <h1 className="text-3xl font-bold text-center py-3">MeducateNg.</h1>
                </div>
                <div className="flex justify-between w-full md:max-w-[240px]">
                    <a href='www.google.com' alt='/' target='_blank'><FaFacebook className="icons" size={20}/></a>
                    <FaInstagram className="icons transition ease-in-out 500 scale-105" size={20}/>
                    <FaTwitter className="icons" size={20}/>
                    {/* <FaPinterest className="icons" size={20}/>
                    <FaYoutube className="icons" size={20}/> */}
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <ul className="md:flex gap-3 ">
                        <li className="mt-4"> About</li>
                        <li className="mt-4">Partnerships</li>
                        <li className="mt-4">Careers</li>
                        <li className="mt-4">Newsroom</li>
                        <li className="mt-4">Advertising</li>
                    </ul>
                </div>
                <div>
                    <ul className="text-right md:flex gap-3">
                        <a href="#about"><li className="mt-4 cursor-pointer">Home</li></a>
                        <li className="mt-4">Book</li>
                        <li className="mt-4">View</li>
                        <li className="mt-4">Projects</li>
                        <li className="mt-4">Community</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Footer