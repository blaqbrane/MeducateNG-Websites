
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,} from "react-icons/fa"
const Footer = () =>{
    return(
        <div className=" px-4 py-8 mx-auto h-full" id="footer">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold text-center py-4">BEACHES.</h1>
                <div className="flex justify-between w-full md:max-w-[240px]">
                    <FaFacebook className="icons" size={20}/>
                    <FaInstagram className="icons" size={20}/>
                    <FaTwitter className="icons" size={20}/>
                    <FaPinterest className="icons" size={20}/>
                    <FaYoutube className="icons" size={20}/>
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
                        <li className="mt-4">Travel</li>
                        <li className="mt-4">Destination</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer