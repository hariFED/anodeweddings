import Image1 from '../assets/SalamonBharathi/Third1.jpg';
import Image2 from '../assets/SalamonBharathi/Third2.jpg';
import Image3 from '../assets/SalamonBharathi/ThirdFour.jpg';
import Image4 from '../assets/SalamonBharathi/ThirdFive.jpg';
import Image5 from '../assets/SalamonBharathi/FifthStatic.jpg';
import Image6 from '../assets/SalamonBharathi/Fifth2.jpg';
import Image7 from '../assets/SalamonBharathi/Fifth1.jpg';
import Image8 from '../assets/SalamonBharathi/Fifth.jpg';
import Image9 from '../assets/SalamonBharathi/Second.jpg';
import Image10 from '../assets/SalamonBharathi/Fourth.jpg';
import Image11 from '../assets/SalamonBharathi/Seventh.jpg';
import Image12 from '../assets/SalamonBharathi/Eight.jpg';
import Image13 from '../assets/SalamonBharathi/Nine.jpg';
import Image14 from '../assets/SalamonBharathi/ten.jpg';
import Image16 from '../assets/SalamonBharathi/Twevel.jpg';
import Image17 from '../assets/SalamonBharathi/Thirtten.jpg';
import Image18 from '../assets/SalamonBharathi/Eleven.jpg'
import Image19 from '../assets/SalamonBharathi/SecontStatic.jpg'
import Image20 from '../assets/SalamonBharathi/ThirdStatic.jpg'
import Image21 from '../assets/SalamonBharathi/SixthStatic.jpg'
import dummy from '../assets/SalamonBharathi/dummy.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const images = [
    Image1, Image2, Image3, Image4,
    Image5, Image6, Image7, Image8,
    Image9, Image10, Image11, Image12,
    Image13, Image14, Image16, Image17, Image18, Image19, Image20, Image21
];
const extraImg = [Image1, Image2, Image3, Image4,
    Image5, Image6]


const Wedding = () => {

    const [showLightbox, setShowLightbox] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setShowLightbox(true);
    };

    const closeLightbox = () => {
        setShowLightbox(false);
    };

    const goToNextImage = () => {
        setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setSelectedImageIndex((selectedImageIndex + images.length - 1) % images.length);
    };

    return (
        <div className="font-poppins scroll-smooth">
            <div className='bg-[url(./assets/SalamonBharathi/FirstStatic.jpg)] bg-center  h-screen bg-cover flex justify-center items-center '>

                <h1 className=" font-bold font-poppins tracking-wider text-white md:text-[3em] text-[1.5em]"> SALAMON & BHARATHI </h1>

            </div>
            <div className="flex flex-col items-center justify-center gap-5 my-20 mx-14">
                <p className="text-sm font-medium tracking-wide text-center uppercase font-poppins">winter wedding</p>
                <h1 className="text-2xl italic font-medium text-center md:text-4xl">A haven of their own</h1>
                <div className="flex flex-col items-start gap-5 mt-5 font-light md:w-1/3 md:mt-10">
                    <p>Nestled in the mountains of Taupo, Danelle and Dirk seemed at home.</p>
                    <p>Some people are fond of beaches, others a city. They found their sanctuary in the forested mountains.</p>
                    <p><p className="italic font-extralight">We wanted it to feel like a big family dinner; all cozy and romantic. And to us everyone there was all like family, so it came together perfectly.</p> – Danelle and Dirk</p>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-10 md:grid-cols-3 md:w-1/2 md:mx-auto">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`photo-${index}`}
                        className="object-cover w-full cursor-pointer h-60"
                        onClick={() => openLightbox(index)}

                    />
                ))}
            </div>

            {/* Lightbox */}
            {showLightbox && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
                    <img
                        src={images[selectedImageIndex]}
                        alt={`photo-${selectedImageIndex}`}
                        className="max-h-full"
                    />

                    <button
                        onClick={goToPreviousImage}
                        className="absolute p-2 bg-transparent text-[#f1f1f1] rounded-full text- md:left-5 left-2"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                        onClick={goToNextImage}
                        className="absolute p-2 text-[#f1f1f1] bg-transparent rounded-full md:right-5 right-2"
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button
                        onClick={closeLightbox}
                        className="absolute w-5 h-5 text-black bg-transparent bg-[#f1f1f1] rounded-full md:h-10 md:w-10 top-5 right-7"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            )}

            <div className='mt-24 '>
                <div className='flex items-center justify-center text-4xl italic font-normal'>
                    Testimonials
                </div>

                <div className='flex items-center justify-center mt-10 rounded-full'>
                    <img src={dummy} alt='dummy' className='w-24 h-24 rounded-full' />
                </div>

                <div className='w-1/3 mx-auto mt-10 text-center font-extralight'>
                    &ldquo;An Ode Weddings exceeded all our expectations! Their attention to detail, creativity, and professionalism made our wedding day truly unforgettable. Each photograph is a masterpiece, perfectly capturing the love and joy we felt. Thank you for preserving our precious memories in such a beautiful way.&ldquo;
                </div>

            </div>

            <div className='p-5 mt-24 bg-[#f1f1f1]'>
                <div className='grid grid-rows-1 mx-16 md:grid-cols-6'>
                    {extraImg.map((image, index) => (
                        <img src={image} key={index} alt={`photo${index}`} />
                    ))}
                </div>
                <div className='flex justify-between mt-24 '>

                    <div className='flex flex-col gap-2 text-sm font-extralight'>
                        <a href='#' className='underline underline-offset-4'> Terms and conditions</a>
                        <a href='#' className='underline underline-offset-4'>Privacy Policies</a>
                    </div>

                    <div className='flex flex-col gap-2 cursor-pointer '>
                        <div className='text-sm underline font-extralight underline-offset-2'>
                            Contact Us
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <a><FontAwesomeIcon icon={faInstagram} /></a>
                            <a><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </div>
                    </div>
                    <div className='italic cursor-pointer font-extralight '>
                        @anodeweddings
                    </div>
                </div>
            </div>





        </div>

    )
}

export default Wedding
