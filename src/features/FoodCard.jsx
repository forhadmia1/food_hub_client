import React from 'react';

const FoodCard = () => {
    return (
        <div className='flex px-2'>
            <div class="avatar">
                <div class="w-24 rounded">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
                </div>
            </div>
            <div className='ml-3'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl'>Name</h2>
                    <p className='text-xl font-bold'>$10.00</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, accusamus. Laborum recusandae natus earum accusantium distinctio dicta</p>
                    <div className='flex items-end ml-2'>
                        <button class="btn-sm px-6 text-white btn-warning rounded-full font-semibold">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;