import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import Loading from '../Loading';

const Users = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [reload, setReload] = useState(false)
    useEffect(() => {
        fetch('https://foodhub-pi.vercel.app/api/v1/user/all', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => setUsers(data))
        setLoading(false)
    }, [reload])

    if (loading) {
        return <Loading />
    }

    const handleAdmin = (email) => {
        swal({
            title: "Are you sure?",
            text: "You want to make admin!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://foodhub-pi.vercel.app/api/v1/user/create-admin?email=${email}`, {
                        method: 'PUT',
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(res => {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth)
                            navigate('/login')
                        }
                        if (res.status === 200) {
                            swal({
                                title: "Great!",
                                text: "Successfully make admin",
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

    const handleDelete = (email) => {
        swal({
            title: "Are you sure?",
            text: "You want to delete user",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://foodhub-pi.vercel.app/api/v1/user?email=${email}`, {
                        method: 'DELETE',
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(res => {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth)
                            navigate('/login')
                        }
                        if (res.status === 200) {
                            swal({
                                title: "Great!",
                                text: "Successfully delete user",
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
        <div className='w-full px-5 py-5 overflow-x-scroll'>
            <table style={{ minWidth: '600px' }} className='w-full border-2 border-slate-300 rounded'>
                <thead className='bg-yellow-500'>
                    <tr>
                        <th className='text-start  py-1 px-2'>Name</th>
                        <th className='text-start py-1 px-2'>Email</th>
                        <th className='text-start py-1 px-2'>Status</th>
                        <th className='text-start py-1 px-2'>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        users.map(user => <tr
                            key={user._id}
                            className='border-t-2'>
                            <td className='py-1 px-2'>{user.name}</td>
                            <td className='py-1 px-2'>{user.email}</td>
                            <td className={`py-1 px-2 ${user.isAdmin && 'font-bold'}`}>{user.isAdmin ? user.isAdmin : 'user'}</td>
                            <td className='py-1 px-2 flex gap-2 lg:flex-row flex-col'>
                                <button onClick={() => handleAdmin(user.email)} className='px-2 py-1 bg-orange-400 hover:bg-orange-500 rounded disabled:bg-slate-600' {...user.isAdmin && { disabled: true }}>Make Admin</button>

                                <button onClick={() => handleDelete(user.email)} className='px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded ' >Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;