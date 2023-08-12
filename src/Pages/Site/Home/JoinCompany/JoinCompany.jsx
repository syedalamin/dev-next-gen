import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useJoinCompany from '../../../../hooks/useJoinCompany';


const JoinCompany = () => {
    const [companys] = useJoinCompany();


    return (
        <div className="relative">
            <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
            <div className="rounded-full filter blur-3xl absolute top-10 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
            <div className="w-11/12 mx-auto relative">
                <SectionTitle Heading="They’re Already Winning With Us"></SectionTitle>
                <div className="my-3">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        autoplay={
                            {
                                delay: 2500,
                                disableOnInteraction: false,
                            }
                        }
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <div>
                            {
                                companys.map(company => <SwiperSlide
                                    key={company._id}
                                >
                                    <div className="  h-20 flex items-center justify-center  card  w-full bgGlash shadow-xl">
                                        <img src={company.image} alt="" />
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

export default JoinCompany;