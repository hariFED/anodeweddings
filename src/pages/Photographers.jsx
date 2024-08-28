import React from 'react'
import Pic from "../assets/photographer1.jpg"
import Navbar from '../components/Navbar'
import { FaInstagram } from 'react-icons/fa'
import Footer from '../components/Footer'

const Photographers = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto font-poppins'>

                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='pt-20 mb-10 text-4xl font-bold mt-36'>Who are we?</h1>
                    <div className='flex flex-col items-start justify-between gap-10 md:gap-0 md:flex-row '>
                        <div className='flex flex-col items-center order-1 gap-5 md:order-1'>
                            <img src={Pic} alt="Picture" className='w-3/4 mx-auto' />
                            <p className='text-lg'>Vannanilavan R</p>
                            <div className='text-2xl'><FaInstagram /></div>
                        </div>
                        <div className='flex flex-col order-3 w-2/3 gap-10 mx-auto leading-8 text-justify md:order-2'>
                            <p>  <span className='text-4xl font-medium '>B</span>orn from the shared dream of two passionate storytellers, An Ode Wedding is not just a photography studio, it's a haven for love narratives waiting to be unveiled. We are Vannanilavan and Ram, and our hearts beat in unison with the rhythm of genuine emotions and authentic connections.
                                We weren't born in studios, we bloomed on the streets. Vannanilavan and Ram, the hearts behind An Ode Wedding, were drawn to raw emotions and real stories pulsating in every corner. We were first drawn to the raw emotions and authentic stories pulsating in every corner. Then, love called and hence An Ode Wedding bloomed.
                                Now, we bring that street smarts and confidence to capture the unscripted symphony of your wedding day.</p>

                            <p> United by a love for stories and the magic of love itself, we embark on each wedding journey with the same insatiable curiosity and unwavering dedication. We don't chase trends or orchestrate moments; instead, we become invisible observers, quietly witnessing the symphony of laughter, tears, and unspoken promises that unfold on your special day.</p>
                            <p> Our vision is to romanticize your life and unfold your true emotion.
                                Our mission is simple: to paint your love story in the vibrant hues of your emotions, capturing the essence of who you are, not who you're expected to be. We believe that true beauty lies in the unfiltered moments, the stolen glances, and the way your hands find comfort in each other's grasp.</p>
                            <p> Why do we obsess over capturing these candid details? Because they are the whispers of your soul, the unspoken language of love that transcends words. We want you to look back on your wedding photographs and not just see smiles and poses, but relive the very heartbeat of your emotions, the joy that danced in your eyes, and the love that painted your world in golden light.

                                We are ready to partner with kindred spirits who share the belief in the magic of real love. Are you?
                                We are storytellers by heart, and your love story is our masterpiece. So, let us capture the whispers of your forever, the laughter that echoes through the room, and the tears that speak of unspoken joy. In the end, you'll have more than just photographs; you'll have a timeless treasure chest overflowing with memories that sing the unique melody of your love.
                            </p>


                        </div>
                        <div className='flex flex-col items-center order-2 gap-5 md:order-3'>
                            <img src={Pic} alt="Picture" className='w-3/4 mx-auto' />
                            <p className='text-lg'>Shri Ram R</p>
                            <div className='text-2xl'><FaInstagram /></div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Photographers