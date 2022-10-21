import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedItems = () => {
    const navigate = useNavigate()

    return (
        <section className='grid md:grid-cols-3 grid-cols-1'>
            <div className=' flex gap-5 items-center py-10 px-4 bg-yellow-400'>
                <div className='relative'>
                    <img className='w-80' src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-1.png" alt="" />
                    <div className='bg-red-600 rounded-full md:py-8 md:px-3 py-6 px-2 absolute top-1/2 md:top-24 left-1/2 -translate-y-1/3'>
                        <span className='text-white text-xl md:text-2xl font-bold'>$14.99</span>
                    </div>
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Over 20
                        types of pizza</h2>
                    <button onClick={() => navigate('/menu')} className="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
            <div className='flex items-center py-10 px-6'>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Classic combos
                        for friends</h2>
                    <button onClick={() => navigate('/menu')} className="btn bg-yellow-400 hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
                <div>
                    <img src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-2.png" alt="" />
                </div>
            </div>
            <div className=' flex gap-5 items-center py-10 px-4 bg-yellow-400'>
                <div className='relative'>
                    <img className='w-80' src="https://pearl.stylemixthemes.com/food/wp-content/uploads/sites/55/2020/04/infobox-img-3.png" alt="" />
                    <div className='bg-red-600 rounded-full md:py-8 md:px-3 py-6 px-2 absolute top-1/2 md:top-24 left-1/2 -translate-y-1/3'>
                        <span className='text-white text-xl md:text-2xl font-bold'>$14.99</span>
                    </div>
                </div>
                <div className='md:flex flex-col items-start justify-center'>
                    <h2 className='text-2xl font-semibold'>Chicken Cheese
                        in crispy buns</h2>
                    <button onClick={() => navigate('/menu')} className="btn bg-white hover:text-white border-0 text-slate-800 font-semibold rounded-full px-10 mt-4">View Menu</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;