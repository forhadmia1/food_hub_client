import React from 'react';
import {HiOutlineShoppingBag} from 'react-icons/hi'

const About = () => {
    return (
        <section className='bg-yellow-400 py-8 md:py-32 mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-24 gap-10'>
                <div>
                    <h2 className='md:text-6xl text-3xl font-bold'>About Us</h2>
                    <p className='mt-4 text-xl font-thin text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nemo esse sed deleniti, qui vel consequuntur tenetur nulla expedita temporibus, laboriosam, itaque voluptas perferendis eum ex. </p>
                    <p className='mt-4 text-xl font-thin text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nemo esse sed deleniti, qui vel consequuntur tenetur nulla </p>
                    <button className='btn bg-white text-black rounded-3xl border-none mt-6'>Learn More</button>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex items-center'>
                        <div className='md:p-5 p-3 bg-white rounded-full mr-4'>
                            <HiOutlineShoppingBag className='text-3xl'/>
                        </div>
                        <div>
                            <h4 className='md:text-4xl text-2xl font-bold'>5K+</h4>
                            <p>Orders delivered</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='md:p-5 p-3 bg-white rounded-full mr-4'>
                            <HiOutlineShoppingBag className='text-3xl'/>
                        </div>
                        <div>
                            <h4 className='md:text-4xl text-2xl font-bold'>5K+</h4>
                            <p>Orders delivered</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='md:p-5 p-3 bg-white rounded-full mr-4'>
                            <HiOutlineShoppingBag className='text-3xl'/>
                        </div>
                        <div>
                            <h4 className='md:text-4xl text-2xl font-bold'>5K+</h4>
                            <p>Orders delivered</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='md:p-5 p-3 bg-white rounded-full mr-4'>
                            <HiOutlineShoppingBag className='text-3xl'/>
                        </div>
                        <div>
                            <h4 className='md:text-4xl text-2xl font-bold'>5K+</h4>
                            <p>Orders delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;