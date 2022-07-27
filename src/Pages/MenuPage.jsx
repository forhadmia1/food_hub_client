import React from 'react';
import Footer from '../components/Home/Footer';

const MenuPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center mt-16'>
                <h2 className='text-6xl font-bold'>Food Items</h2>
                <p className='text-md mt-4'>Home{'>'}Food Items</p>
            </div>
            <div className='grid md:grid-cols-4 gap-5 mt-20 md:mx-24 px-6 md:px-0'>
                <div className='px-6 text-xl font-semibold hidden md:block'>
                    <ul class="menu bg-base-100 w-56">
                        <li><a>Desserts</a></li>
                        <li><a>Dinner</a></li>
                        <li><a>Drink</a></li>
                        <li><a>Meat</a></li>
                        <li><a>Starters</a></li>
                    </ul>
                </div>
                <div className='col-span-2'>
                <div class="flex items-center justify-center">
                    <div class="flex border-2 rounded-full w-full px-4">
                            <input type="text" class=" w-full focus:outline-none px-2 py-2" placeholder="Search..."/>
                            <button class="flex items-center px-4 border-l">
                                <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='px-2 hidden md:block'>
                    <h2 className='text-4xl font-bold'>Your Order</h2>
                    <p className='text-xl mt-4'>CHOOSE AN ITEM FROM THE MENU TO GET STARTED.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MenuPage;