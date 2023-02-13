import React, { useEffect, useState } from 'react'
import SignUp from './SignUp'
const FormData = () => {
    const[allData, setAllData] = useState([])
    const OnAdd = (data) => {
        const new_id = Math.floor(Math.random() * 10000) + 1
        const NewData = {new_id, ...data}
        setAllData([...allData, NewData])
    }
    useEffect(() =>{
        console.log(allData)
    })
  return (
    <div>
        <SignUp OnAdd={OnAdd} allData={allData}/>
      
    </div>
  )
}

export default FormData