import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ReviewModal from './ReviewModal';

const OrderItem = ({ item, reload, setReload }) => {
    const navigate = useNavigate()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    const orderHandle = (id) => {
        fetch(`http://localhost:5000/api/v1/order/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({
                orderStatus: "complete"
            })
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
            }
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
                            <p className='text-orange-500 font-bold'>{item.transectionId}</p>
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
                        <p className='font-bold'>Status:{item.orderStatus ? <span className={`font-bold ml-2 ${item.orderStatus === 'complete' ? 'text-green-500' : 'text-red-500'}`}>{item.orderStatus}</span> : <span className='font-bold ml-2 text-red-500'>Pending</span>}</p>
                        <button onClick={() => orderHandle(item._id)} className={`bg-orange-500 px-4 py-1 rounded-full text-white hover:bg-orange-500  disabled:bg-slate-600 disabled:text-slate-400`} {...item.orderStatus !== 'shipped' && { disabled: true }}>Complete</button>
                    </div>
                </div>
            </div>
            <ReviewModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                reload={reload}
                setReload={setReload}
            />
        </div>
    );
};

export default OrderItem;