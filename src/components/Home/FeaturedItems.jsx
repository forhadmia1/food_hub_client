import React from 'react';

const FeaturedItems = () => {
    return (
        <section className='grid grid-cols-3'>
            <div className='relative flex gap-8 items-center py-14 px-4 bg-yellow-400'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
                <div className='bg-red-600 rounded-full py-8 px-3 absolute top-24 left-20'>
                    <span className='text-white text-2xl font-bold'>$14.99</span>
                </div>
            </div>
            <div className='flex items-center py-10 px-6'>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-yellow-400 hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
            </div>
            <div className='relative flex gap-8 items-center py-14 px-4 bg-yellow-400'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
                <div className='bg-red-600 rounded-full py-8 px-3 absolute top-24 left-20'>
                    <span className='text-white text-2xl font-bold'>$14.99</span>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;