import React from 'react';
import { useNavigate } from 'react-router-dom';
import food from '../../assets/banner/img_2.png'

const HeroArea = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div className="grid grid-cols-1 md:grid-cols-2 relative">
                <div className="hero-content justify-start md:pl-24 pl-4 text-neutral-content md:bg-white absolute md:static top-48 p-0">
                    <div className="max-w-md text-slate-800">
                        <h1 className="mb-5 text-5xl font-bold">Combo Triple Hamburger with coke</h1>
                        <p className="mb-5 font-light">Today only: order the hamburger with free coke.</p>
                        <div className='flex items-center gap-10'>
                            <p className='text-2xl font-semibold'>$<span className='text-4xl font-bold'>14.</span>99</p>
                            <button onClick={() => navigate('/menu')} className="btn btn-primary rounded-full px-8 cursor-pointer">View Menu</button>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('/src/assets/banner/Mask-Group-1@2x.jpg')] bg-cover pt-32 ">
                    <img src={food} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroArea;