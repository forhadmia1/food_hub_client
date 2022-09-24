import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../Styles/Testimonial.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

const Testimonial = () => {
    return (
        <section className='mt-10'>
            <h2 className='text-center text-6xl text-slate-700 font-bold'>Our Happy Clients Says</h2>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="blockquote-wrapper">
            <div class="blockquote">
                <h1>
                Intuitive design happens whencurrent knowledge is the same as the target knowledge.
                </h1>
                <div className='flex pl-32 items-center mt-2 gap-3'>
                        <img className='w-16 h-16 rounded-full' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1663859140~exp=1663859740~hmac=820501bd6763f02359573a5fdf4a5c7c0faf88f298eba29cac854debd1c8059a" alt="" />
                        <div>
                            <h2 className='text-2xl font-semibold'>Name</h2>
                            <div>Rating</div>
                        </div>
                    </div>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
    );
};

export default Testimonial;