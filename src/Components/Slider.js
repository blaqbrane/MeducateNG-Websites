import React, { useState } from 'react'
import Datas from "./Data"
import {BsArrowRightSquareFill} from "react-icons/bs"
import {BsArrowLeftSquareFill} from "react-icons/bs"
const Slider = () => {
    const[isopen, setIsopen] = useState(0)
    const handleNext =()=>{
        const num = Datas.length
        setIsopen( isopen === num-1 ? 0 : isopen + 1)
    }
    const handlePrev =()=>{
        const num = Datas.length
        setIsopen( isopen === 0 ? num-1 : isopen - 1)
    }
  return (
    <div className='relative max-w-[1240px] mx-auto py-16 px-4 flex justify-center items-center' id="slider">
        {Datas.map((data) => {
            return(
                <div key={data.id} className={data.id === isopen ? 'w-full h-full' : "hidden"}>
                       <img className="w-full rounded-md" src={data.img} alt=""/>
                </div>
            )
        })}
        <div className='absolute top-0 px-8 left-0 flex flex-row mt-[40%] w-full justify-between'>
            <BsArrowLeftSquareFill onClick={handlePrev} size={20} style={{color:"white"}}/>
            <BsArrowRightSquareFill onClick={handleNext} size={20} style={{color:"white"}}/>
        </div>
    </div>
  )
}

export default Slider