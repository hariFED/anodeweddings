import { Link } from 'react-router-dom'
import KathirShaliniCover from '../assets/KathirShalini/KathirShalini45.jpg'
import SalamonCover from '../assets/SalamonBharathi/FirstStatic.jpg'
const ServicesWedding = () => {
    return (
        <>

            <div className=''>
                <div className='flex flex-col items-center justify-center md:flex-row'>
                    <div className='flex items-center justify-center h-[35rem]'>
                        <p className='text-6xl font-extrabold tracking-wider font-poppins'> WEDDING</p>
                    </div>




                </div>

                <div className='grid items-center gap-5 mx-auto md:grid-cols-2 md:w-1/2 md:flex-row '>
                    <Link to='/services/weddings/salamonandbharathi'>
                        <div className='relative flex items-center justify-center cursor-pointer  bg-[url(./assets/SalamonBharathi/FirstStatic.jpg)] h-72 bg-cover '>


                            <p className='  text-3xl font-extrabold text-center text-[#f1f1f1] '>SALAMON
                                <br />&
                                <br /> BHARATHI</p>


                        </div> </Link>
                    <Link to='/services/weddings/kathirshalini'>
                        <div className='relative cursor-pointer bg-[url(./assets/KathirShalini/KathirShalini23.jpg)] h-72 bg-cover'>


                        </div>
                    </Link>


                </div>
            </div>




        </>
    )
}

export default ServicesWedding