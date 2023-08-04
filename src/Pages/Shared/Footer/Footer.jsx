import Tilt from 'react-parallax-tilt';
import { PiCopyrightDuotone } from 'react-icons/pi';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='relative w-full'>
            <div className="  filter blur-3xl absolute opacity-20 top-0 left-0 h-full w-full   bgGradient"></div>
            <div className=" w-11/12 mx-auto mt-28">
                <div className='md:w-11/12 w-10/12 mx-auto '>
                    <Tilt
                        tiltAngleXInitial={50}
                        className="parallax-effect-img"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        transitionSpeed={1500}
                        gyroscope={true}
                    >
                        <div className='p-10 mx-auto rounded-lg inputbg'>
                            <div className="flex justify-center text-center items-center ">
                                <div className="space-y-5">
                                    <h2 className="text-5xl font-bold py-4 text-gradient">Not Just Another Design Agency.</h2>
                                    <p>Behold the power of innovation and skyrocket <br /> your business with a true out of the obx web development Agency</p>
                                    <Link to='/contact' className="btn  rounded-full px-10 gradient-bg">Lets Talk</Link>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div className="border-t-[1px] mt-16  ">
                    <div className='py-5 flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <PiCopyrightDuotone></PiCopyrightDuotone>
                            <p>Dev-Next-Gen 2023</p>
                        </div>
                        <div className='flex space-x-5 items-center'>
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaLinkedinIn></FaLinkedinIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;