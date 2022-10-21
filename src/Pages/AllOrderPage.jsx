import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import OrderItem from '../components/order/OrderItem';
import auth from '../firebase.init';

const AllOrderPage = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [reload, setReload] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        (async function () {
            const res = await axios.get(`http://localhost:5000/api/v1/order?email=${user.email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
            }
            setData(res.data)
        })()
    }, [reload, user])
    return (
        <Layout>
            <div className='px-24'>
                {data.map(d => <OrderItem
                    item={d}
                    reload={reload}
                    setReload={setReload}
                />)}
            </div>
        </Layout>
    );
};

export default AllOrderPage;