import React from 'react'
import Datas from "../Components/Data"
import Cards from './Cards'
const Container = () => {
  return (
    <div className=' md:grid grid-cols-3 gap-4 py-16 px-4'>
        {Datas.map((data) => {
            return(
                <div key={data.id} className="py-1">
                    <Cards img={data.img} location={data.location}/>
                </div>
            )
        })}
    </div>
  )
}

export default Container