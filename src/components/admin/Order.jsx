import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import swal from 'sweetalert';

const Order = ({ item, reload, setReload }) => {
    const [isVisible, setIsVisible] = useState(false)
    const handleDeliver = (id) => {
        fetch(`http://localhost:5000/api/v1/order/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderStatus: "shipped"
            })
        }).then(res => {
            if (res.status === 200) {
                swal({
                    title: "Great!",
                    text: "Order Delivered!",
                    icon: "success",
                    buttons: false,
                    timer: 2000
                });
                setReload(!reload)
            }
        })
    }

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/api/v1/order/${id}`, {
                        method: 'DELETE'
                    }).then(res => {
                        if (res.status === 200) {
                            swal({
                                title: "Great!",
                                text: "Successfully Delete Item",
                                icon: "success",
                                buttons: false,
                                timer: 2000
                            });
                            setReload(!reload)
                        }
                    })
                } else {
                    swal("Your file is safe!");
                }
            });

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
                                    item?.item?.map(product => <tr className='border-t-2'>
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
                        <button onClick={() => handleDeliver(item._id)} className={`bg-orange-500 px-4 py-1 rounded-full text-white hover:bg-orange-600  disabled:bg-slate-600 disabled:text-slate-400`} {...item.orderStatus && { disabled: true }}>Deliver</button>
                        <button onClick={() => handleDelete(item._id)} className={`bg-red-500 px-4 py-1 rounded-full text-white hover:bg-red-600`}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;