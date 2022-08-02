import React from 'react';
import FoodView from '../features/foods/FoodView';

const MenuPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center mt-16'>
                <h2 className='text-6xl font-bold'>Food Items</h2>
                <p className='text-md mt-4'>Home{'>'}Food Items</p>
            </div>
            <FoodView/>
        </div>
    );
};

export default MenuPage;