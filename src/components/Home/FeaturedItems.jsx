import React from 'react';

const FeaturedItems = () => {
    return (
        <div className='grid md:grid-cols-2 gap-5'>
            <div className='flex md:flex-col items-center  py-10 row-span-2 bg-yellow-400'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div className='md:flex flex-col items-center justify-center'>
                    <h2 className='text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
            <div className='flex items-center py-10 bg-yellow-400'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white border-0 hover:text-white text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
            <div className='flex items-center bg-yellow-400 py-10'>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur</h2>
                    <button class="btn bg-white border-0 hover:text-white text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;