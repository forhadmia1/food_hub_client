import React from 'react';

const CartCard = () => {
    return (
        <div className='flex px-2'>
            <div class="avatar">
                <div class="w-16 h-16 rounded">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
                </div>
            </div>
            <div className='ml-3'>
                <div>
                    <h2 className='text-lg'>Name</h2>
                    <p className='text-md font-bold'>$10.00</p>
                </div>
            </div>
        </div>
    );
};

export default CartCard;