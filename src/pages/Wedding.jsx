import Image1 from '../assets/SalamonBharathi/Third1.jpg';
import Image2 from '../assets/SalamonBharathi/Third2.jpg';
import Image3 from '../assets/SalamonBharathi/ThirdFour.jpg';
import Image4 from '../assets/SalamonBharathi/ThirdFive.jpg';
import Image5 from '../assets/SalamonBharathi/FifthStatic.jpg';
import Image6 from '../assets/SalamonBharathi/Fifth2.jpg';
import Image7 from '../assets/SalamonBharathi/Fifth1.jpg';
import Image8 from '../assets/SalamonBharathi/sixth.jpg';



const Wedding = () => {

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
            <div className="flex flex-col flex-wrap w-full md:h-fit h-max md:flex-row">
                <div className=" md:h-1/2 h-[220px]  md:w-1/2" >
                    <img src={Image1} alt="photo" />
                </div>
                <div className=" md:h-1/2 h-[220px] bg-contain bg-no-repeat md:bg-cover md:w-1/2">
                    <img src={Image2} alt="photo" />
                </div>
            </div>
            <div className="bg-[url(./assets/SalamonBharathi/SecontStatic.jpg)] md:bg-cover bg-contain top-0 bg-no-repeat md:bg-center md:h-screen  md:bg-fixed">

            </div>
            <div className="flex flex-col flex-wrap w-full md:h-fit h-max md:flex-row">
                <div className=" md:h-1/2 h-[220px]  md:w-1/2" >
                    <img src={Image3} alt="photo" />
                </div>
                <div className=" md:h-1/2 h-[220px] bg-contain bg-no-repeat md:bg-cover md:w-1/2">
                    <img src={Image4} alt="photo" />
                </div>
            </div>
            <div className="bg-[url(./assets/SalamonBharathi/ThirdStatic.jpg)] md:bg-contain bg-contain top-0 bg-no-repeat md:bg-center md:h-screen h-[750px] md:bg-fixed flex justify-center items-center">
                <div className='hidden w-1/3 text-2xl text-center md:block'> &ldquo; The World is new when your with me &ldquo; <br />
                    -Salamon</div>
                <div className='hidden w-1/3 md:block'></div>
                <div className='hidden w-1/3 text-2xl text-center md:block'>&ldquo; Every time I see the world in your eyes I see myself &ldquo;<br />-Bharathi</div>
            </div>
            <div className="h-max " >
                <img src={Image5} alt="photo" />
            </div>
            <div className="flex flex-col flex-wrap w-full md:h-fit h-max md:flex-row">
                <div className=" md:h-1/2 md:w-1/2" >
                    <img src={Image6} alt="photo" />
                </div>
                <div className=" md:h-1/2 h-[220px] bg-contain bg-no-repeat md:bg-cover md:w-1/2">
                    <img src={Image7} alt="photo" />
                </div>
            </div>
            <div className="bg-[url(./assets/SalamonBharathi/SixthStatic.jpg)] md:bg-cover bg-contain top-0 bg-no-repeat md:bg-center md:h-screen  md:bg-fixed"></div>
            <div className="flex flex-col flex-wrap w-full md:h-fit h-max md:flex-row ">
                <div className="mt-10 md:h-1/2 md:w-1/2" >
                    <img src={Image6} alt="photo" className='m-10' />
                    <img src={Image7} alt="photo" className='m-10'/>
                </div>
                <div className='flex flex-col items-center justify-center w-1/2 h-screen mt-2'>
                    <div className='flex justify-center w-full'>
                        <img src={Image8} alt='phto' className='h-screen' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Wedding