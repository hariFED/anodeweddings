import Image11 from '../assets/SalamonBharathi/Eleven.jpg'
import Image12 from '../assets/SalamonBharathi/Fifth2.jpg'

const ServicesWedding = () => {
    return (
        <>

            <div className='h-screen'>
                <div className='flex flex-col items-center justify-center md:flex-row'>
                    <div className='flex items-center justify-center h-[35rem]'>
                       <p className='text-6xl font-extrabold tracking-wider font-poppins'> WEDDING</p>
                    </div>




                </div>
                <div className='flex flex-col items-center justify-center md:flex-row'>
                    <div className='md:w-1/2 '>
                        <p>Hoodjfkjoeijfoe</p>
                    </div>
                    <div className='md:w-1/2'>
                        <img src={Image12} alt="photo" />
                    </div>



                </div>
                <div className='flex flex-col items-center justify-center md:flex-row'>
                    <div className=''>
                        <img src={Image11} alt='photo' />
                    </div>
                    <div className=''>
                        <img src={Image12} alt="photo" />
                    </div>



                </div>
            </div>




        </>
    )
}

export default ServicesWedding