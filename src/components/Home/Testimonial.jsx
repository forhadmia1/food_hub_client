import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../Styles/Testimonial.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';

const Testimonial = () => {
  const [reviews, setReviews] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/review/')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  console.log(reviews);

  return (
    <section className='mt-10'>
      <h2 className='text-center md:text-5xl text-3xl text-slate-700 font-bold'>Our Happy Clients Says</h2>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews && reviews.map(review => <SwiperSlide
          key={review._id}
        >
          <div className="blockquote-wrapper">
            <div className="blockquote">
              <h1>{review.comment}</h1>
              <div className='flex pl-32 items-center mt-2 gap-3'>
                <img className='w-16 h-16 rounded-full' src={review.iamge ? review.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
                <div>
                  <h2 className='text-xl font-semibold'>{review.name}</h2>
                  <div>
                    <Rating
                      className='text-yellow-400 text-xl'
                      fullSymbol={<AiFillStar />}
                      emptySymbol={<AiOutlineStar />}
                      initialRating={review.rating}
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </section>
  );
};

export default Testimonial;