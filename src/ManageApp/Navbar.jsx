import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import Logo from '../Assets/MeducateNg .JPG'
import { Link } from "react-router-dom";

const Navbar = () => {
    const[isopen, setIsopen] = useState(false)
    const[activeHome, setActiveHome] = useState(false)
    const[activeContact, setActiveContact] = useState(false)
    const[activeAbout, setActiveAbout] = useState(false)
    return(
        <div className="h-20 px-3 py-4 family">
            <div className="fixed top-0 left-0 z-10 h-20 bg-white w-full flex justify-between items-center px-2">
                <div className="flex items-center">
                    <img className="w-[65px] h-[65px]" src={Logo} alt=''/>
                   <h1 className='text-3xl text-[green]'> MeducateNg</h1>
                </div>
                <div className="hidden font-bold text-xl cursor-pointer text-[gray] md:flex space-x-6">
                    <Link to="/" className="hover:text-[green]">Home</Link>
                    <Link to="/description" className="hover:text-[green]">About</Link>
                    <a href="/" className="hover:text-[green]">Contact</a>
                    <a href="/" className="hover:text-[green]">Community</a>
                </div>
                {/* <div className="hidden md:flex">
                    <button className="rounded-lg text-white bg-[green] animate-pulse hover:text-[green] border-2 border-[green] hover:bg-[white] "><Link to="/formdata">Get Started</Link></button>
                </div> */}
                <div className="block cursor-pointer md:hidden" onClick={() => setIsopen(!isopen)}>
                    {isopen ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
                <div className={isopen ? 'fixed z-10 top-0 left-0 bg-[white] w-[70%] h-full ease-in-out duration-500 md:hidden': 'fixed left-[-100%]'}>
                    <div className="border-b w-[98%]">
                        <div className="flex justify-between items-center px-3 py-4">
                            <p><Link to='/'>Home</Link></p>
                        </div>   
                    </div>
                    <div className="border-b w-[98%]">
                        <div className="flex justify-between items-center px-3 py-4">
                            <p>About</p>
                            <p className="cursor-pointer" onClick={() => setActiveContact(!activeContact)}>{activeContact ? <RiArrowDownSLine size={20}/> : <RiArrowRightSLine size={20}/>}</p>
                        </div>
                        <ul className={activeContact ? 'flex text-xs flex-col px-10 leading-10' : 'hidden'}>
                            <Link className="border-b" to='/description'>What is MeducateNg</Link>
                            <a href="/">Get in touch</a>
                        </ul>
                    </div>
                    <div className="border-b w-[98%]">
                        <div className="flex justify-between items-center px-3 py-4">
                            <p>Resources</p>
                            <p className="cursor-pointer" onClick={() => setActiveAbout(!activeAbout)}>{activeAbout ? <RiArrowDownSLine size={20}/> : <RiArrowRightSLine size={20}/>}</p>
                        </div>
                        <ul className={activeAbout ? 'flex flex-col text-xs px-10 leading-10' : 'hidden'}>
                            <a className="border-b" href='/'>State Profile</a>
                            <a className="border-b" href='/'>Publications</a>
                            <a className="border-b" href='/'>Library</a>
                            <a className="border-b" href='/'>MasterClass</a>
                            <a href="/">Convention</a>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
export default Navbar;