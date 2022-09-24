import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import CartCard from './CartCard';
import { fetchCarts } from './cartSlice';

const CartView = () => {
    const carts= useSelector(state=>state.carts)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(fetchCarts())
    },[])

    if(carts.isLoading){
        return <p>Loading</p>
    }

    return (
        <div>
            <div className='flex flex-col gap-5 mt-4 h-80 overflow-auto scroll-smooth'>
                {
                    carts.carts.length>0?  carts.carts.map(item=><CartCard
                    key={item._id}
                    item={item}
                    ></CartCard>):
                    <p className='text-xl mt-4'>CHOOSE AN ITEM FROM THE MENU TO GET STARTED.</p>
                }
            </div>
            <div className='mt-4'>
            <button class="btn btn-warning w-full">CheckOut</button>
            </div>
        </div>
    );
};

export default CartView;