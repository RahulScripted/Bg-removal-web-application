import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Assuming your testimonial data is stored in an array
import { testimonialsData } from '../assets/assets';

export default function Testimonial() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5 mb-5">
        What Client Say <br className="max-md:hidden" />
        About Us
      </h1>

      <div>
        {/* Swiper container */}
        <Swiper
            pagination={false} 
            modules={[Pagination]}
            className="mySwiper"
            spaceBetween={20} 
            slidesPerView={1}
            breakpoints={{
            800: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            }}
        >
            {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-6 drop-shadow-md max-w-auto hover:scale-105 transition-all duration-700 cursor-pointer mb-6 mx-4">
                <p className="text-4xl text-gray-400">”</p>
                <p className="text-sm text-gray-700">{item.text}</p>
                <div className="flex items-center gap-3 mt-5">
                    <img className="w-9 rounded-full" src={item.image} alt="Client" />
                    <div>
                    <p>{item.author}</p>
                    <p className="text-sm text-orange-800">{item.jobTitle}</p>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}