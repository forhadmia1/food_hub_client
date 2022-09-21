import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


const FeaturedItems = () => {

    return (
        <section className='-mt-24'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex items-center py-16 bg-yellow-400 rounded'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center py-16 bg-yellow-400 rounded'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center py-16 bg-yellow-400 rounded'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center py-16 bg-yellow-400 rounded'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center py-16 bg-yellow-400 rounded'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default FeaturedItems;