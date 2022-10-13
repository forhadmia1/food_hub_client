import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts } from '../features/carts/cartSlice';
import Layout from '../components/Layout';
import OrderItemRow from '../components/OrderItemRow';

const OrderPage = () => {
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCarts())
    }, [])

    if (carts.isLoading) {
        return <p>Loading....</p>
    }

    return (
        <Layout>
            <div className='grid md:grid-cols-5 grid-cols-1 w-full gap-5 mt-5 md:px-24 items-start px-4'>
                <div className='col-span-3 bg-slate-300 bg-opacity-80 rounded '>
                    <table className='w-full'>
                        <thead>
                            <th className='py-2'>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            {carts.carts.map(item => <OrderItemRow
                                key={item.id}
                                item={item}
                            ></OrderItemRow>)}
                        </tbody>
                    </table>
                </div>
                <div className='col-span-2'>
                    <h2 className='text-2xl font-semibold text-center'>Submit Order</h2>
                    <div className='flex justify-between mt-5 px-3'>
                        <h2 className='text-xl font-semibold'>Subtotal</h2>
                        <p className='font-semibold'>$100</p>
                    </div>
                    <div className='flex justify-between mt-10 mb-2 px-3'>
                        <h2 className='text-lg font-semibold'>Shipping</h2>
                        <p className='font-semibold'>$10</p>
                    </div>
                    <hr />
                    <div className='flex justify-between mt-2 px-3'>
                        <h2 className='text-2xl font-semibold'>Total</h2>
                        <p className='font-semibold'>$110</p>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <button className='bg-yellow-400 px-6 py-2 rounded text-white font-semibold hover:bg-yellow-500'>Procced to checkout</button>
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default OrderPage;