import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo1.png'
import Footer from '../components/Footer'
const ServicesWedding = () => {
    return (
        <>

            <div className='flex flex-col gap-10 p-8 font-poppins md:items-end md:flex-row'>
                <div className='relative flex flex-col items-center justify-center h-full md:w-1/2 md:fixed md:left-0 md:flex-row '>
                    <div className='flex flex-col items-center justify-start gap-10 mt-28 md:w-2/3 md:mt-0'>
                        <p className='text-4xl font-extrabold tracking-widest text-center md:text-7xl font-poppins'>
                            WEDDING</p>
                        <p className='text-xs italic leading-6 text-justify md:text-lg md:leading-10'> So, let go of the expectations and embrace the extraordinary. At An Ode Wedding, we invite you to write your love story, frame by genuine frame, chapter by heartfelt chapter. Allow us to capture the whispers of your soul, the laughter that echoes through the room, the tears that speak of unspoken joy. In the end, you'll have a collection of memories that capture the essence of you, your love, and your happily ever after. </p>
                    </div>
                    <div className='fixed z-30 p-2 text-4xl bg-white md:absolute md:top-0 md:right-20 top-10 right-10'>
                        <Link to="/"><FaHome /> </Link>
                    </div>
                    <div className='absolute top-0 left-0 md:-top-9 md:left-10'>
                        <img src={Logo} alt='' className='w-2/3' />

                    </div>

                </div>

                <div className='grid items-end w-full gap-5 pt-2 md:ml-auto md:grid-cols-2 md:w-1/2 md:flex-row'>
                    <Link to='/services/weddings/salamonandbharathi'>
                        <div className='relative flex items-center justify-center cursor-pointer bg-center  bg-[url(./assets/SalamonBharathi/FirstStatic.jpg)] h-[30rem] bg-cover  '>


                            <p className='  text-3xl font-extrabold text-center text-[#f1f1f1] '>SALAMON
                                <br />&
                                <br /> BHARATHI</p>


                        </div> </Link>
                    <Link to='/services/weddings/kathirshalini'>
                        <div className='relative cursor-pointer bg-center bg-[url(./assets/KathirShalini/KathirShalini23.jpg)] h-[30rem] bg-cover'>


                        </div>
                    </Link>
                    <Link to='/services/weddings/alifya'>
                        <div className='relative cursor-pointer bg-center bg-[url(./assets/Alfiya/Alfiya56.jpg)] h-[30rem] bg-cover'>


                        </div>
                    </Link>

                    {/*  */}



                </div>
            </div>
            <Footer />




        </>
    )
}

export default ServicesWedding