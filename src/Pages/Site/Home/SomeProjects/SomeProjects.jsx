import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useSomeProjects from "../../../../hooks/useSomeProjects";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import SingleSomeProjects from "../../../../components/SingleSomeProjects/SingleSomeProjects";

const SomeProjects = () => {
    const [someProjects] = useSomeProjects();

    return (
        <div className="relative">
            <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
            <div className="rounded-full filter blur-3xl absolute top-10 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
            <div className="w-11/12 mx-auto">
                <SectionTitle Heading="Get to know us more" ></SectionTitle>
                <div className="">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={
                            {
                                delay: 6000,
                                disableOnInteraction: false,
                            }
                        }
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <div>
                            {
                                someProjects.map(project => <SwiperSlide
                                    key={project._id}
                                >
                                   <div>
                                        <SingleSomeProjects project={project}></SingleSomeProjects>
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

export default SomeProjects;