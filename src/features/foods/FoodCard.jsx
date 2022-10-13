import React from 'react';
import { addToCarts } from '../carts/cartSlice';
import { useDispatch } from 'react-redux/es/exports';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const FoodCard = ({food}) => {
    const [user]= useAuthState(auth)
    const {_id, ...rest}= food;
    const dispatch= useDispatch()

    const handleAddToCart=()=>{
        dispatch(addToCarts({
            ...rest,
            quantity:1,
            email: user.email
        }))
    }
    
    return (
        <div className='flex px-2'>
            <div class="avatar">
                <div class="w-24 rounded">
                    <img src="https://placeimg.com/192/192/people" alt=''/>
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
                        <button onClick={()=>handleAddToCart()} class="btn-sm px-6 text-white btn-warning rounded-full font-semibold">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;