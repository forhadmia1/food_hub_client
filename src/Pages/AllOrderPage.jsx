import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import OrderItem from '../components/order/OrderItem';
import auth from '../firebase.init';

const AllOrderPage = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [reload, setReload] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        (async function () {
            const res = await axios.get(`https://foodhub-pi.vercel.app/api/v1/order?email=${user.email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
            }
            setData(res.data)
            setLoading(false)
        })()
    }, [reload, user])

    if (loading) {
        return <Loading />
    }


    return (
        <Layout>
            <div className='lg:px-24'>
                {data.length < 1 ? <div className='flex justify-center w-full mt-20'>
                    <span className='text-xl text-center'>No Order at this moment!</span>
                </div> : data.map(d => <OrderItem
                    item={d}
                    reload={reload}
                    setReload={setReload}
                />)}
            </div>
        </Layout>
    );
};

export default AllOrderPage;