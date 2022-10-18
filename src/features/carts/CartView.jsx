import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import CartCard from './CartCard';

const CartView = () => {
    const navigate = useNavigate()
    const carts = useSelector(state => state.carts)

    if (carts.isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div>
            <div className='flex flex-col gap-5 mt-4 h-80 overflow-auto scroll-smooth'>
                {
                    carts.carts.length > 0 ? carts.carts.map(item => <CartCard
                        key={item._id}
                        item={item}
                    >
                    </CartCard>) :
                        <p className='text-xl mt-4'>CHOOSE AN ITEM FROM THE MENU TO GET STARTED.</p>
                }
            </div>
            <div className='mt-4'>
                <button onClick={() => navigate('/order')} className="btn btn-warning w-full">View Order</button>
            </div>
        </div>
    );
};

export default CartView;