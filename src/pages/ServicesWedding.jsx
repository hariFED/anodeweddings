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

                <div className='grid items-center gap-5 mx-auto md:grid-cols-2 md:w-1/2 md:flex-row'>
                    <div className='cursor-pointer '>
                        <Link to='/services/weddings/salamonandbharathi'>
                            <img src={SalamonCover} alt='Cover-photo' />
                        </Link>
                    </div>
                    <div className=''>
                        <Link to='/services/weddings/kathirshalini'>
                            <img src={KathirShaliniCover} alt="Cover-photo" />
                        </Link>
                    </div>



                </div>
            </div>




        </>
    )
}

export default ServicesWedding