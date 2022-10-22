import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import OrderItemRow from '../components/OrderItemRow';
import OrderModal from '../components/OrderModal';
import { getTotal } from '../features/carts/cartSlice';

const OrderPage = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTotal())
    }, [carts, dispatch])

    if (carts.isLoading) {
        return <Loading />
    }

    return (
        <Layout>
            <div className='grid md:grid-cols-5 grid-cols-1 w-full gap-5 mt-5 md:px-24 items-start px-4'>
                <div className='col-span-3 bg-slate-300 bg-opacity-80 rounded w-full overflow-x-scroll lg:overflow-hidden'>
                    <table style={{ minWidth: '500px' }} className='lg:w-full '>
                        <thead>
                            <tr>
                                <th className='py-2'>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
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
                        <p className='font-semibold'>${carts.TotalAmount}</p>
                    </div>
                    <div className='flex justify-between mt-10 mb-2 px-3'>
                        <h2 className='text-lg font-semibold'>Shipping</h2>
                        <p className='font-semibold'>$0</p>
                    </div>
                    <hr />
                    <div className='flex justify-between mt-2 px-3'>
                        <h2 className='text-2xl font-semibold'>Total</h2>
                        <p className='font-semibold'>${carts.TotalAmount}</p>
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <button onClick={() => setIsOpen(true)} className='bg-yellow-400 px-6 py-2 rounded text-white font-semibold hover:bg-yellow-500'>Procced to checkout</button>
                    </div>
                </div>
            </div>
            <OrderModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen} />
        </Layout >
    );
};

export default OrderPage;