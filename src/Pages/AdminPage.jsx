import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div>
            <div className='flex justify-between px-10 py-5 bg-slate-600 text-white'>
                <div>Name or Logo</div>
                <div> Profile</div>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-slate-400 text-base-content">
                        <li><Link to='/admin'>Dashboard</Link></li>
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