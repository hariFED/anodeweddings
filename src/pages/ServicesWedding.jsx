import { Link } from 'react-router-dom'
import KathirShaliniCover from '../assets/KathirShalini/KathirShalini45.jpg'
import SalamonCover from '../assets/SalamonBharathi/FirstStatic.jpg'
const ServicesWedding = () => {
    return (
        <>

            <div className='flex items-end gap-10 p-8 '>
                <div className='fixed flex flex-col items-center justify-center h-full -rotate-90 md:flex-row '>
                    <div className='flex flex-col items-center justify-center '>
                        <p className='font-extrabold tracking-widest text-7xl font-poppins'>
                            WEDDING</p>
                        <p className=''> For more works click on the fa-instagram</p>
                    </div>

                </div>

                <div className='grid items-end h-screen gap-5 pt-2 md:ml-auto md:grid-cols-2 md:w-[70%] md:flex-row '>
                    <Link to='/services/weddings/salamonandbharathi'>
                        <div className='relative flex items-center justify-center cursor-pointer  bg-[url(./assets/SalamonBharathi/FirstStatic.jpg)] h-[30rem] bg-cover '>


                            <p className='  text-3xl font-extrabold text-center text-[#f1f1f1] '>SALAMON
                                <br />&
                                <br /> BHARATHI</p>


                        </div> </Link>
                    <Link to='/services/weddings/kathirshalini'>
                        <div className='relative cursor-pointer bg-[url(./assets/KathirShalini/KathirShalini23.jpg)] h-[30rem] bg-cover'>


                        </div>
                    </Link>
                    <Link to='/services/weddings/alifya'>
                        <div className='relative cursor-pointer bg-[url(./assets/Alfiya/Alfiya56.jpg)] h-[30rem] bg-cover'>


                        </div>
                    </Link>

                    {/*  */}



                </div>
            </div>




        </>
    )
}

export default ServicesWedding