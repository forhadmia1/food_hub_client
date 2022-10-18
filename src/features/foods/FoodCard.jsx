import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { addToCart } from '../carts/cartSlice';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const [user] = useAuthState(auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login')
        } else {
            dispatch(addToCart({
                ...food
            }))
        }

    }

    return (
        <div className='flex px-2'>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src="https://placeimg.com/192/192/people" alt='' />
                </div>
            </div>
            <div className='ml-3'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-cl md:text-2xl'>{food.name}</h2>
                    <p className='text-xl font-bold'>${food.price}</p>
                </div>
                <div className='flex flex-col gap-2 justify-between mt-2'>
                    <p className='text-sm text-gray-500'>{food.description}</p>
                    <div className='flex items-end ml-2'>
                        <button onClick={() => handleAddToCart()} className="btn-sm px-6 text-white btn-warning rounded-full font-semibold">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;