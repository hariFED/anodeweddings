import Slider from "react-slick";
import 'animate.css/animate.min.css';


import Frame1 from '../assets/Frame1.jpg'
import Frame2 from '../assets/Frame2.jpg'
import Frame3 from '../assets/Frame3.jpg'
import Frame4 from '../assets/Frame4.jpg'
import Frame5 from '../assets/Frame5.jpg'
import Frame6 from '../assets/Frame6.jpg'

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,


    };
    return (

        <div>


            <Slider {...settings} className="h-[100vh] text-center  overflow-hidden " >
                <div >
                    <img src={Frame1} alt="" className="animate__animated animate__fadeIn object-cover object-center h-[100vh] w-[100vw]" />
                </div>
                <div >
                    <img src={Frame2} alt="" className=" animate__animated animate__fadeIn object-cover object-center  h-[100vh] w-[100vw]" />
                </div>
                <div >
                    <img src={Frame3} alt="" className=" animate__animated animate__fadeIn object-cover  object-center h-[100vh] w-[100vw]" />
                </div>
                <div >
                    <img src={Frame4} alt="" className=" animate__animated animate__fadeIn object-cover  object-center h-[100vh] w-[100vw]" />
                </div>
                <div >
                    <img src={Frame5} alt="" className=" animate__animated animate__fadeIn object-cover  object-center h-[100vh] w-[100vw]" />
                </div>
                <div >
                    <img src={Frame6} alt="" className=" animate__animated animate__fadeIn object-cover  object-center h-[100vh] w-[100vw]" />
                </div>

            </Slider>
        </div>
    )
}

export default Carousel