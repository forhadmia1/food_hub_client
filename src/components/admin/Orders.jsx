import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Order from './Order';

const Orders = () => {
    const navigate = useNavigate()
    const [reload, setReload] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        (async function () {
            const res = await axios.get(`http://localhost:5000/api/v1/order/all`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
            }
            setOrders(res.data)
        })()
    }, [reload])

    return (
        <div className='px-5 w-full'>
            {orders.map(order => <Order
                key={order._id}
                item={order}
                reload={reload}
                setReload={setReload}
            />)}
        </div>
    );
};

export default Orders;