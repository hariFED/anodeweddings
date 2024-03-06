import { Link } from "react-router-dom"

const Navbar = () => {


    return (
        <>
            <div className="relative">
                <nav className="absolute inset-x-0 top-0 z-50 m-4 font-semibold tracking-wider text-gray-400 sm:my-20 sm:mx-52">
                    <ul className="flex flex-wrap justify-between py-5">

                        <li className="relative group">
                            <Link to='/services/weddings'>  <p className="py-2 mb-2 duration-100 ease-in border-black cursor-pointer hover:border-b-2 hover:text-black">PORTFOLIO</p> </Link>
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


                        </li>

                        <li className="py-2 mb-2 duration-100 ease-in border-black cursor-pointer hover:border-b-2 hover:text-black">BLOG</li>

                        <li className="py-2 mb-2 duration-100 ease-in border-black cursor-pointer hover:border-b-2 hover:text-black ">
                            <Link to='/'>LOGO</Link></li>

                        <li className="relative duration-100 group">
                            <p className="py-2 mb-2 duration-100 ease-in border-black cursor-pointer hover:border-b-2 hover:text-black">INFO</p>
                            <div className="absolute  w-52 left-[-200%] bg-[#EDEDED]  cursor-pointer  hidden group-hover:block  group-hover:bg-black group-hover:duration-300 ">
                                <ul className="text-base ">
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200 ">THE PHOTOGRAPHERS
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
            </div>

        </>
    )
}

export default Navbar