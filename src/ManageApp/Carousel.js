import React, { useEffect, useState } from 'react'
import {Data} from "./Data"
import {BsArrowRightSquareFill} from "react-icons/bs"
import {BsArrowLeftSquareFill} from "react-icons/bs"
const Carousel = () => {
    const[currentIndex, setCurrentIndex] = useState(0)
    const handleNext =()=>{
        const num = Data.length
        setCurrentIndex( currentIndex === num-1 ? 0 : currentIndex + 1)
    }
    const handlePrev =()=>{
        const num = Data.length
        setCurrentIndex( currentIndex === 0 ? num-1 : currentIndex - 1)

    }
    //the id here start from 0 and not 1,so that it can match the currentindex
    const dots = Data.map((data) => {
        return(
            <button key={data.id} className={data.id === currentIndex ? 'bg-black':'' } onClick={() => setCurrentIndex(data.id)}>
               
            </button>
        )
    })
    const numm = Data.length
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex === numm - 1 ? 0 : currentIndex + 1)
        }, 5000)
        return () => clearInterval(intervalId)
    })
  return (
    <div className='mx-auto max-w-[1240px] relative'>
        <div className='relative max-w-[1240px] mx-auto py-16 px-4 flex justify-center items-center' id="slider">
        {Data.map((data) => {
            return(
                <div key={data.id} className={data.id === currentIndex ? 'w-full h-full md:w-1/2 md:h-1/2' : "hidden"}>
                       <img className="w-[600px] h-[400px] object-cover rounded-md md:w-[600px] md:h-[400px]" src={data.img} alt=""/>
                </div>
            )
        })}
        <div className='absolute px-8 flex flex-row w-full justify-between md:max-w-[460px] mx-auto'>
            <BsArrowLeftSquareFill onClick={handlePrev} size={20} style={{color:"white"}}/>
            <BsArrowRightSquareFill onClick={handleNext} size={20} style={{color:"white"}}/>
        </div>
        </div>
        <div className='max-w-[1240px] absolute left-[50%] top-[95%]'>
            {dots}
        </div>
    </div>
   
  )
}

export default Carousel;