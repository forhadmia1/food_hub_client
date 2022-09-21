import React from 'react';
import food from '../../assets/banner/img_2.png'

const HeroArea = () => {
    return (
        <div className='-mt-28 z-0'>
            <div class="grid grid-cols-2">
            <div class="hero-content text-neutral-content bg-white">
                <div class="max-w-md text-slate-800">
                    <h1 class="mb-5 text-5xl font-bold">hello</h1>
                    <p class="mb-5">We only cooperate with food establishments of high-quality service, original menu, and safety guarantee for our customers.</p>
                    <div className='flex items-center gap-10'>
                        <p className='text-2xl font-semibold'>$<span className='text-4xl font-bold'>14</span>99</p>
                    <button class="btn btn-primary rounded-full px-8">View Menu</button>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/src/assets/banner/Mask-Group-1@2x.jpg')] bg-cover pt-32 z-0">
                <img src={food} alt="" />
            </div>
        </div>
        </div>
    );
};

export default HeroArea;