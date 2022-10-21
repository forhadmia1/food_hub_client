import React from 'react';
import image1 from '../../assets/image/img-1.png'
import image2 from '../../assets/image/img-2.png'
import image3 from '../../assets/image/img-3.png'

const ChooseUs = () => {
    return (
        <div className="px-4">
            <h2 className='text-4xl font-bold text-center mt-24'>Why Choose us</h2>
            <p className='text-md lg:text-xl text-center mt-6'>We offer you the biggest choice from over 50 different cuisines. <br />
                We deliver great-tasting dishes anytime and for every occasion.</p>
            <div className='grid md:grid-cols-3 justify-items-center gap-4'>
                <div className="card  bg-base-100 ">
                    <figure className="px-8 pt-10">
                        <img src={image1} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">We work 24/7</h2>
                        <p className='text-lg font-light'>Our delivery service is available for you every minute. And more than 60% of restaurant partners agree with us.</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 ">
                    <figure className="px-8 pt-10">
                        <img src={image2} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Top Restaurant Partners</h2>
                        <p className='text-lg font-light'>We only cooperate with food establishments of high-quality service, original menu, and safety guarantee for our customers.</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 ">
                    <figure className="px-8 pt-10">
                        <img src={image3} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Fast Delivery</h2>
                        <p className='text-lg font-light'>Save time tackling your to-do list at home, at work, or on the go. And trust us the fast delivery of delicious food.</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;