import React from 'react';
import image1 from '../../assets/image/img-1.png'
import image2 from '../../assets/image/img-2.png'
import image3 from '../../assets/image/img-3.png'

const ChooseUs = () => {
    return (
        <div className="px-4">
            <h2 className='text-4xl font-bold text-center mt-24'>Why Choose us</h2>
            <p className='text-xl text-center mt-6'>We offer you the biggest choice from over 50 different cuisines. <br />
                We deliver great-tasting dishes anytime and for every occasion.</p>
            <div className='grid md:grid-cols-3 justify-items-center gap-4'>
                <div className="card  bg-base-100 shadow">
                    <figure className="px-8 pt-10">
                        <img src={image1} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Shoes!</h2>
                        <p className='text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow">
                    <figure className="px-8 pt-10">
                        <img src={image2} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Shoes!</h2>
                        <p className='text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow">
                    <figure className="px-8 pt-10">
                        <img src={image3} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Shoes!</h2>
                        <p className='text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;