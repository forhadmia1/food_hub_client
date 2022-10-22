import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading';
import Order from './Order';

const Orders = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [reload, setReload] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        (async function () {
            const res = await axios.get(`https://foodhub-pi.vercel.app/api/v1/order/all`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
            }
            setOrders(res.data)
            setLoading(false)
        })()
    }, [reload])

    if (loading) {
        return <Loading />
    }

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