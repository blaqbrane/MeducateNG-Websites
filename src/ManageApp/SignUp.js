import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const SingUp = ({OnAdd, allData}) => {

  const[firstName,setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[email, setEmail] = useState('')
  const[gender, setGender] = useState('Male')
  const[birthDate, setBirthDate] = useState('')
  const[password, setPassword] = useState('')
  const handleSubmit= (e) => {
    e.preventDefault()
    OnAdd({firstName,lastName,gender,birthDate,password})
    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");
    setBirthDate("");
    setPassword("");

  }
  return (
    <>
        <Navbar/>
        <div className='mx-auto px-6 relative '>
        <form onSubmit={handleSubmit} className='top-[30%] left-[13%] rounded space-y-5 p-8 absolute bg-green-100 md:p-16 md:top-[50] md:left-[30%] sm:left[12%]'>
            <div className='flex flex-col'>
                <label className=''>FirstName</label>
                <input className='border border-gray-400 w-full' type='text' placeholder='FirstName' required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
                <label>LastName</label>
                <input type='text' placeholder='LastName' required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
                <label>Email</label>
                <input type='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label>Date of Birth</label>
                <input type='date' value={birthDate} placeholder="Date of Birth" required onChange={(e) => setBirthDate(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
                <label>Password</label>
                <input type='password' required placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit' className='rounded-md text-white bg-green-600 px-10'>SIGN UP</button>
            <div>
                <p>Have an account already <Link to='/signin' className='text-[green]'>SIGN IN</Link></p>
            </div>
        </form>
        {/* <div className='absolute mt-[400px]'>
        {allData.map((item) => {
          return(
            <div key={item.id}>
               <h2>Your name is {item.firstName}</h2>
                <p>You are a {item.gender}</p>
            </div>
          )
        })}
        </div> */}
    </div>
    </>
    
  )
}

export default SingUp