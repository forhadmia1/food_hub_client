import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { removeFromCart } from './cartSlice';

const CartCard = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex px-2'>
            <div className="avatar">
                <div className="w-20 rounded">
                    <img src={item?.image} alt='' />
                </div>
            </div>
            <div className='ml-3'>
                <div>
                    <h2 className='text-sm'>{item.name}</h2>
                    <p className='text-md font-bold'>${item.price}</p>
                    <div>
                        <button onClick={() => dispatch(removeFromCart(item._id))} className='px-4 py-1 rounded bg-yellow-400 hover:bg-yellow-500 text-white'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;