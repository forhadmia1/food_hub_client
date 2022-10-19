import React from 'react';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import ReviewModal from './ReviewModal';

const OrderItem = ({ item }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    console.log(item);
    const [isVisible, setIsVisible] = useState(false)
    const orderHandle = (id) => {
        fetch(`http://localhost:5000/api/v1/order/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderStatus: "complete"
            })
        }).then(res => {
            if (res.status === 200) {
                setIsOpen(true);
            }
        })
    }
    return (
        <div className='bg-yellow-400 mt-5 rounded-md px-3 py-5'>
            <div className='flex items-start gap-2'>
                <div>{!isVisible ? <MdKeyboardArrowDown onClick={() => setIsVisible(true)} className='text-2xl' /> : <MdKeyboardArrowUp onClick={() => setIsVisible(false)} className='text-2xl' />}</div>
                <div className='w-full'>
                    <div className='flex justify-between w-full'>
                        <div>
                            <p className='text-center font-semibold'>Order Id</p>
                            <p>{item._id}</p>
                        </div>
                        <div>
                            <p className='text-center font-semibold'>User Name</p>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <p className='text-center font-semibold'>Total Price</p>
                            <p>{item.totalAmount}</p>
                        </div>
                        <div>
                            <p className='text-center font-semibold'>Transection Id</p>
                            <p>{item.transectionId}</p>
                        </div>
                    </div>
                    <div className={`bg-white px-5 py-5 mt-2 rounded ${!isVisible ? 'hidden' : 'block'}`}>
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <th className='text-start'>Name</th>
                                    <th className='text-start'>Category</th>
                                    <th className='text-start'>Price</th>
                                    <th className='text-start'>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    item.item.map(product => <tr className='border-t-2'>
                                        <td>{product.name}</td>
                                        <td>{product.category}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='flex gap-5 items-center mt-5'>
                        <p className='font-bold'>Status: <span className='font-normal'>{item.orderStatus ? item.orderStatus : 'Pending'}</span></p>
                        <button onClick={() => orderHandle(item._id)} className='bg-slate-500 px-4 py-1 rounded-full text-white hover:bg-slate-600'>Complete</button>
                    </div>
                </div>
            </div>
            <ReviewModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
};

export default OrderItem;