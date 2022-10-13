import React from 'react';
import { removeFromCarts } from './cartSlice';
import { useDispatch } from 'react-redux/es/exports';

const CartCard = ({item}) => {
    const dispatch= useDispatch()
    return (
        <div className='flex px-2'>
            <div class="avatar">
                <div class="w-20 rounded">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
                </div>
            </div>
            <div className='ml-3'>
                <div>
                    <h2 className='text-sm'>{item.name}</h2>
                    <p className='text-md font-bold'>${item.price}</p>
                     <div>
                        <button onClick={()=> dispatch(removeFromCarts(item._id))} className='px-4 py-1 rounded bg-yellow-400 hover:bg-yellow-500 text-white'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;