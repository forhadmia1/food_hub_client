import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import OrderItem from '../components/order/OrderItem';

const AllOrderPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        (async function () {
            const res = await axios.get('http://localhost:5000/api/v1/order/')
            setData(res.data)
        })()
    }, [])
    return (
        <Layout>
            <div className='px-24'>
                {data.map(d => <OrderItem
                    item={d}
                />)}
            </div>
        </Layout>
    );
};

export default AllOrderPage;