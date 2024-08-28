import { Link } from "react-router-dom"
import Logo from "../assets/logo1.png"
import { useState } from "react"
import { FaTimesCircle, FaBars } from "react-icons/fa"


const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false)

    function handleClick() {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <div className="relative">
                <nav className="absolute inset-x-0 top-0 z-50 hidden m-4 font-semibold tracking-wider text-gray-400 md:block sm:my-12 sm:mx-52">
                    <ul className="flex flex-wrap items-center justify-between">

                        <li className="relative group">
                            <Link to='/services/weddings'>  <p className="py-2 mb-2 duration-100 ease-in border-black cursor-pointer hover:border-b-2 hover:text-black">PORTFOLIO</p> </Link>



                        </li>

                        <Link to="/blog"> <li className="py-2 mb-2 duration-100 ease-in border-black cursor-pointer hover:border-b-2 hover:text-black">BLOG</li></Link>

                        <li className="">
                            <Link to='/'>
                                <img src={Logo} alt="Logo" className="" />
                            </Link>
                        </li>

                        <li className="relative duration-100 group">
                            <p className="py-2 mb-2 duration-100 ease-in border-black cursor-pointer hover:border-b-2 hover:text-black">INFO</p>
                            <div className="absolute  w-52 left-[-200%] bg-[#EDEDED]  cursor-pointer  hidden group-hover:block  group-hover:bg-black group-hover:duration-300 ">
                                <ul className="text-base ">
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200 ">
                                        <Link to="/photographers">THE PHOTOGRAPHERS</Link>
                                    </li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200" >GOOD WORDS
                                    </li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200 " >ALBUM</li>

                                </ul>
                            </div>
                        </li>

                        <li className="py-2 mb-2 duration-100 ease-in border-black cursor-pointer hover:border-b-2 hover:text-black ">CONTACT</li>

                    </ul>
                </nav>
                <nav className="absolute z-50 block w-full md:z-0 md:hidden">
                    <ul className="flex items-center justify-between">

                        <li className="m-5">
                            <Link to='/'>
                                <img src={Logo} alt="Logo" className="" />
                            </Link>
                        </li>
                        <li>
                            <div onClick={handleClick} className="mr-10 text-2xl">
                                <FaBars />
                            </div>
                        </li>

                    </ul>
                    <div className={`absolute block ${isVisible ? "block" : "hidden"} top-0 w-screen h-screen text-center text-white bg-black`}>
                        <div className="flex flex-col items-center h-full text-2xl font-medium justify-evenly active:underline active:underline-offset-4">
                            <Link to='/services/weddings'>
                                <div className="">PORTFOLIO</div>
                            </Link>
                            <div className="">BLOG</div>
                            <Link to="/photographers"> <div className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200 ">
                                THE PHOTOGRAPHERS
                            </div>
                            </Link>
                            <div className="block  text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200" >GOOD WORDS
                            </div>
                            <div className="block  text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200 " >ALBUM
                            </div>
                        </div>
                        <div className="absolute text-4xl text-white top-10 right-10" onClick={handleClick} >
                            <FaTimesCircle />

                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar







{/* <div className="absolute w-52 left-[-90%]  bg-[#EDEDED]  cursor-pointer  hidden group-hover:block group-hover:bg-black group-hover:duration-300  ">
                                {/* <ul className="top-0 ">
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200 ">
                                        <Link to='/services/weddings'>WEDDING</Link>
                                    </li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200" >FAMILY</li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200" >NEW BORN</li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200 " >COUPLE</li>
                                </ul> 
                            </div> */}