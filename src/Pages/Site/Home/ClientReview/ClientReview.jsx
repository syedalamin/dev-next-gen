import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useClientReview from "../../../../hooks/useClientReview";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const ClientReview = () => {
    const [clientReview] = useClientReview();
    return (
        <div className="relative">
            <div className="rounded-full filter blur-3xl absolute top-0 right-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
            <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
            <div className="w-11/12 mx-auto">
                <SectionTitle Heading="Clients Says!"></SectionTitle>
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                       
                        className="mySwiper"
                    >
                        <div>
                            {
                                clientReview.map(client => <SwiperSlide
                                    key={client._id}
                                >
                                    <div className="card w-full bgGlash  shadow-xl">
                                        <div className="card-body items-center text-center space-y-1">
                                            <div className="flex  justify-center ">
                                                <div className="avatar">
                                                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={client.image} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>{client.title}</p>
                                            <h2 className="card-title">{client.name}</h2>
                                            <p>{client.position}</p>
                                            <div>
                                                <Rating
                                                    style={{ maxWidth: 100 }}
                                                    value={client.rating}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;