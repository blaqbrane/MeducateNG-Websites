import React from 'react'

const Cards = ({img,location}) => {
  return (
    <div className='relative w-full h-full' id="cards">
        <img className="w-full h-full object-cover" src={img} alt="/" />

        <p className='bottom-4 left-4 absolute font-bold text-white'>
            {location}
        </p>
    </div>
  )
}

export default Cards