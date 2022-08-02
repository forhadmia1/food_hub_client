import React from 'react';
import { removeFromCarts } from './cartSlice';
import { useDispatch } from 'react-redux/es/exports';

const CartCard = ({item}) => {
    const dispatch= useDispatch()
    return (
        <div className='flex px-2'>
            <div class="avatar">
                <div class="w-20 h-20 rounded">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
                </div>
            </div>
            <div className='ml-3'>
                <div>
                    <h2 className='text-sm'>{item.name}</h2>
                    <p className='text-md font-bold'>${item.price}</p>
                    <button onClick={()=> dispatch(removeFromCarts(item._id))} class="btn btn-sm bg-error border-none rounded-full px-4 text-white">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;