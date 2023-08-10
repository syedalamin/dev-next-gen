import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaBehance,   } from 'react-icons/fa'
import { MdKeyboardArrowDown} from 'react-icons/md'
import { GoMail } from 'react-icons/go'
import PageChangeTop from '../../../components/PageChangeTop/PageChangeTop';
import FavTitle from '../../../components/FavTitle/FavTitle';

const Contact = () => {
    const form = useRef();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const sendEmail = () => {

        emailjs.sendForm('service_5hi4z68', 'template_y6bow1w', form.current, 'R2GcVUQTGg5wv7OaZ')
            .then(() => {

            }, () => {

            });
    };

    return (
        <div className='relative'>
            <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-20 "></div>
            <div className="rounded-full filter blur-3xl absolute top-10 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-20"></div>
            <FavTitle FavTitle="Contact"></FavTitle>
            <PageChangeTop></PageChangeTop>
            <div className='w-11/12 mx-auto pt-10 md:pt-0 '>
                <div className="hero min-h-screen ">
                    <div className="hero-content grid md:grid-cols-2 gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-gradient-title">Get in touch</h1>
                            <p className="py-6">We would like to know more about your problems. Stuck with anything? Just send us an email and we’ll get back to you ASAP.</p>
                            <div className='grid grid-cols-2 py-5 '>
                                <div className='space-y-4'>
                                    <button className=" inputbg rounded-full p-4 ">
                                        <GoMail></GoMail>
                                    </button>
                                    <h2 className='text-3xl font-bold'>For Query</h2>
                                    <p>info@devnextgen.net</p>
                                </div>
                                <div className='space-y-4'>
                                    <button className=" inputbg rounded-full p-4 ">
                                        <FaPhoneAlt></FaPhoneAlt>
                                    </button>
                                    <h2 className='text-3xl font-bold'>Call us</h2>
                                    <p>+8801786281565</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 py-5 '>
                                <div className='space-y-4'>
                                    <button className=" inputbg rounded-full p-4 ">
                                        <GoMail></GoMail>
                                    </button>
                                    <h2 className='text-3xl font-bold'>For Query</h2>
                                    <p>gmail.com</p>
                                </div>
                                <div className='space-y-4'>
                                    <button className=" inputbg rounded-full p-4 ">
                                        <FaPhoneAlt></FaPhoneAlt>
                                    </button>
                                    <h2 className='text-3xl font-bold'>Call us</h2>
                                    <p>013********</p>
                                </div>
                            </div>
                            <div className='mt-10 space-x-5'>
                                <Link>
                                    <button className="  inputbg rounded-full p-4 hover:scale-125 duration-300">
                                        <FaFacebookF></FaFacebookF>
                                    </button>
                                </Link>
                                <Link>
                                    <button className="  inputbg rounded-full p-4 hover:scale-125 duration-300">
                                        <FaLinkedinIn></FaLinkedinIn>
                                    </button>
                                </Link>
                                <Link>
                                    <button className="  inputbg rounded-full p-4 hover:scale-125 duration-300">
                                        <FaTwitter></FaTwitter>
                                    </button>
                                </Link>
                                <Link>
                                    <button className="  inputbg rounded-full p-4 hover:scale-125 duration-300">
                                        <FaBehance></FaBehance>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="card w-10/12 mx-auto shadow-2xl inputbg ">
                            <div className="card-body">
                                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                                    <div className='space-y-3'>
                                        <div className="form-control w-full  ">
                                            <label className="label">
                                                <span className="label-text text-white">Your Name</span>
                                            </label>
                                            <input type="text" placeholder="Type here"  {...register('name', { required: true })} className="input input-bordered w-full  inputbg" />
                                            {errors.name && <span className='text-red-600'>This field is required</span>}
                                        </div>
                                        <div className="form-control w-full  ">
                                            <label className="label">
                                                <span className="label-text text-white">Your Email Address</span>
                                            </label>
                                            <input type="email" placeholder="Type here"  {...register('email', { required: true })} className="input input-bordered w-full  inputbg" />
                                            {errors.email && <span className='text-red-600'>This field is required</span>}
                                        </div>

                                        <div className="form-control w-full  ">
                                            <label className="label">
                                                <span className="label-text text-white">Subject</span>
                                            </label>
                                            <div className='relative'>
                                                <select {...register("subject", { required: true })} className="select select-bordered w-full inputbg ">
                                                    <option className="bg-slate-600 disabled selected ">Select Now</option>
                                                    <option className="bg-slate-600 ">Web_Development</option>
                                                    <option className="bg-slate-600 ">App_Development</option>
                                                    <option className="bg-slate-600 ">Digital_Marketing</option>
                                                </select>
                                                <span className="absolute inset-y-0  right-0 flex items-center pr-3 text-gray-400 cursor-pointer"><MdKeyboardArrowDown></MdKeyboardArrowDown></span>
                                            </div>
                                            {errors.subject && <span className='text-red-600'>This field is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Your Message</span>
                                            </label>
                                            <textarea className="textarea textarea-bordered h-24 w-full  inputbg" {...register('message', { required: true })} placeholder="Bio"></textarea>
                                            {errors.message && <span className='text-red-600'>This field is required</span>}
                                        </div>
                                        <input className='w-full gradient-bg rounded-lg btn' type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;