import React from 'react';
import Layout from '../components/Layout';
import FoodView from '../features/foods/FoodView';

const MenuPage = () => {
    return (
        <Layout>
            <div className='flex flex-col items-start px-4 md:items-center mt-10'>
                <h2 className='md:text-6xl text-3xl font-bold'>Food Items</h2>
                <p className='text-md mt-4'>Home{'>'}Food Items</p>
            </div>
            <FoodView/>
        </Layout>
    );
};

export default MenuPage;