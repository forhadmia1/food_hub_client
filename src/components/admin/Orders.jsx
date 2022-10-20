import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Order from './Order';

const Orders = () => {
    const [reload, setReload] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        (async function () {
            const res = await axios.get(`http://localhost:5000/api/v1/order/`)
            setOrders(res.data)
        })()
    }, [reload])

    return (
        <div className='px-5 w-full'>
            {orders.map(order => <Order
                item={order}
                reload={reload}
                setReload={setReload}
            />)}
        </div>
    );
};

export default Orders;