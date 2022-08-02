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
        <div className='flex flex-col gap-3 mt-4'>
            {
              carts.carts.length>0?  carts.carts.map(item=><CartCard></CartCard>):
              <p className='text-xl mt-4'>CHOOSE AN ITEM FROM THE MENU TO GET STARTED.</p>
            }
        </div>
    );
};

export default CartView;