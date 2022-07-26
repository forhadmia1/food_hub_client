import React from 'react';
import image1 from '../../assets/image/img-1.png'
import image2 from '../../assets/image/img-2.png'
import image3 from '../../assets/image/img-3.png'

const ChooseUs = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-24'>Why Choose us</h2>
            <p className='text-xl text-center mt-6'>We offer you the biggest choice from over 50 different cuisines. <br />
            We deliver great-tasting dishes anytime and for every occasion.</p>
            <div className='grid grid-cols-3 justify-items-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-8 pt-10">
                        <img src={image1} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl">Shoes!</h2>
                        <p className='text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-8 pt-10">
                        <img src={image2} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl">Shoes!</h2>
                        <p className='text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-8 pt-10">
                        <img src={image3} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl">Shoes!</h2>
                        <p className='text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;