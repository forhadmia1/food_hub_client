import React from 'react';
import { HiMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseQuantity, removeFromCart } from '../features/carts/cartSlice';

const OrderItemRow = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <tr className='border-t-2 border-slate-500 hover:bg-slate-400 text-black text-center'>
            <td>
                <div className='flex gap-1 items-center ml-2 py-2'>
                    <div className="avatar">
                        <div className="w-16 rounded">
                            <img src={item?.image} alt='' />
                        </div>
                    </div>
                    <h2 className='md:text-2xl text-xl'>{item.name}</h2>
                </div>
            </td>
            <td>${item.price}</td>
            <td><div className='flex items-center font-semibold mt-1 justify-center'>
                {item.quantity > 1 ? <button onClick={() => dispatch(decreaseQuantity(item))} className='p-2 bg-yellow-300 rounded-l'><HiMinusSm /></button>
                    : <button onClick={() => dispatch(removeFromCart(item._id))} className='p-2 bg-yellow-300 rounded-l'><MdOutlineDeleteOutline /></button>}
                <span className='bg-white px-3 text-black py-1'>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))} className='p-2 bg-yellow-300 rounded-r'><HiOutlinePlusSm /></button>
            </div></td>
            <td>${item.price * item.quantity}</td>
        </tr>
    );
};

export default OrderItemRow;