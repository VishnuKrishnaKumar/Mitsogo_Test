import React from 'react';
import { data } from '../../data/dummyData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import './testimonials.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonialData = data?.testimonials;

    return (
        <section className="testimonial bg_white cmn_spacing" id='customers'>
            <div className="container">
                <h2 className='text_lg text_center mb'>{testimonialData?.title}</h2>
                <div className="wrap short_container_md ">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        speed={1000}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}

                    >
                        {testimonialData?.reviews?.map((el, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial_cnt">
                                    <figure>
                                        <img src={el?.image?.src} alt={el?.image?.alt} className='img_full' loading="lazy"/>
                                    </figure>
                                    <div className='bg_light cnt'>
                                        <div className="top">
                                            <h3 className='text_sm'>"{el?.text}"</h3>
                                        </div>
                                        <div className="bottom bg_light">
                                            <span className="author text_xs ">{el?.author}</span>
                                            {el?.position && <span className='position text_xxxxxs'>{el?.position}</span>}
                                            {el?.company && <span className='company text_xxxxxs'>{el?.company}</span>}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Trusted By Slider */}

                </div>
                {/* Testimonial Slider */}
                <div className="logo_wrap">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={7} // Default view
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        breakpoints={{
                            1025: { slidesPerView: 5 }, // Show 5 elements on large screens (1025px and above)
                            768: { slidesPerView: 3 }, // Show 3 elements on tablets (768px - 1024px)
                            480: { slidesPerView: 3 }, 
                            300: { slidesPerView: 3 },// Show 2 elements on mobile (below 480px)
                        }}
                    >
                        {testimonialData?.trusted_by?.map((el, index) => (
                            <SwiperSlide key={index}>
                                <img src={el?.image?.url} alt={el?.image?.alt} className='img_full' loading="lazy" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </div>
        </section>
    );
};

export default Testimonials;
