

const Navbar = () => {


    return (
        <>
            <div className="relative">
                <nav className="absolute inset-x-0 top-0 z-50 m-4 font-semibold text-gray-400 font sm:my-20 sm:mx-52 ">
                    <ul className="flex flex-wrap justify-between ">

                        <li className="relative group">
                            <p className="duration-300 cursor-pointer hover:text-black">SERVICES</p>
                            <div className="absolute w-52  bg-[#EDEDED] rounded-lg cursor-pointer  hidden group-hover:block ">
                                <ul className="top-0 mt-2 ">
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200">WEDDING</li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200" >FAMILY</li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200" >NEW BORN</li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200 hover:rounded-b-lg" >COUPLE</li>
                                </ul>
                            </div>

                        </li>
                        <li className="duration-100 cursor-pointer hover:text-black ">BLOG</li>
                        <li className="duration-100 cursor-pointer hover:text-black">LOGO</li>
                        <li className="relative group">
                            <p className="duration-100 cursor-pointer hover:text-black">INFO</p>
                            <div className="absolute w-52  bg-[#EDEDED] rounded-lg cursor-pointer  hidden group-hover:block  ">
                                <ul className="top-0 ">
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200">THE PHOTOGRAPHERS
                                    </li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200" >GOOD WORDS
                                    </li>
                                    <li className="block py-3 text-center border-b-[1.5px] border-transparent hover:border-gray-400 hover:bg-white duration-200" >ALBUM</li>

                                </ul>
                            </div>

                        </li>
                        <li className="duration-100 cursor-pointer hover:border-b-2 hover:border-black hover:text-black">CONTACT</li>

                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navbar