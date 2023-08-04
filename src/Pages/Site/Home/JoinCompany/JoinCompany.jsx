
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useJoinCompany from '../../../../hooks/useJoinCompany';


const JoinCompany = () => {
    const [companys] = useJoinCompany();


    return (
        <div className="">
            <div className="w-11/12 mx-auto relative">
                <SectionTitle Heading="Join 10 + Company" subHeading="Our Team Is All Experienced Individuals Who Are Passionately Dedicated To What We Do. Feel Free To Contact US Anytime For Free Guidance."></SectionTitle>
                <div className="my-10">
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