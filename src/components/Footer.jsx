import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='p-5 mt-10 bg-[#f1f1f1]'>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-between mt-2 md:flex-row '>

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

export default Footer