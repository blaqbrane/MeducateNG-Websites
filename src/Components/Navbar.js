import { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar =()=>{
    const[isopen, setIsopen] = useState(false);
    const[active, setActive] = useState("")

    const handleClick =()=>{
        setIsopen(prevopen => !prevopen)
    }
    
    return(
        <nav className=" w-full h-20  px-4 flex justify-between text-center absolute z-10 text-white">
            <div>
                <h1 className='text-3xl font-bold py-2'>BEACHES.</h1>
            </div>
            
            <ul className="hidden md:flex gap-4">
                <li className="p-4">Home</li>
                <li className="p-4">Destination</li>
                <li className="p-4">Travel</li>
                <li className="p-4">View</li>
                <li className="p-4">Book</li>
            </ul>

            <div className="hidden md:flex justify-between gap-4 p-4">
                <BsPerson size={20}/>
                <BiSearch size={20}/>
            </div>
            <div onClick={handleClick} className="block cursor-pointer md:hidden py-4">   
                {isopen ? <AiOutlineClose size={24}/> :<AiOutlineMenu size={24}/>}
            </div>
            <ul className={isopen ?"fixed z-10  bg-white text-black flex flex-col h-full w-[50%] top-0 left-0 ease-in-out duration-500 md:hidden " : "fixed left-[-100%]"}>
                <a href='#about' onClick={() => setActive("#about")} className={active === "#about" ? "bg-red-600 text-white":""}><li onClick={handleClick} className="p-4 border-b">Home</li></a>
                <a href='#slider'  onClick={() => setActive("#slider")} className={active ==="#slider" ? "bg-red-600 text-white":""}><li onClick={handleClick} className="p-4 border-b">Destination</li></a>
                <a href='#location'  onClick={() => setActive("#location")} className={active ==="#location" ? "bg-red-600 text-white":""}><li onClick={handleClick} className="p-4 border-b">Travel</li></a>
                <a href='#cards'  onClick={() => setActive("#cards")} className={active ==="#cards" ? "bg-red-600 text-white":""}><li onClick={handleClick} className="p-4 border-b">View</li></a>
                <a href='#boarding'  onClick={() => setActive("#boarding")} className={active ==="#boarding" ? "bg-red-600 text-white":""}><li onClick={handleClick} className="p-4 ">Book</li></a>
            </ul>
        </nav>
    )
}
export default Navbar;