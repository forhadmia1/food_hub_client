import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';

const AdminPage = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div className='flex justify-between px-10 py-2 bg-slate-500 text-white items-center'>
                <div>
                    <Link to={'/'}>
                        <p className='text-3xl font-bold'>FOOD</p>
                    </Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL ? user.photoURL : 'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666291685~exp=1666292285~hmac=ea6fe0eaacd4df0db898dd8126b75c9e0b4a6044ad46cc7eb7c7853f95825d71'} alt='' />
                        </div>
                    </div>
                    <p>{user.displayName}</p>
                </div>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-slate-400 text-base-content">
                        <li><Link to='orders'>Orders</Link></li>
                        <li><Link to='allItems'>All Items</Link></li>
                        <li><Link to='addItem'>Add New Item</Link></li>
                        <li><Link to='reviews'>Reviews</Link></li>
                        <li><Link to='users'>Users</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;