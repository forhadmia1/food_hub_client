import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import auth from '../../firebase.init';
import NavbarCss from '../../Styles/Navbar.module.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { HiShoppingBag } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const { quantity } = useSelector(state => state.carts)

    return (
        <nav className="navbar  bg-base-100 lg:px-24 py-4 md:py-5">
            <div className="navbar-start  w-full justify-between px-2 nav-visible">
                <Link to={'/'}>
                    <img className='w-32 z-50' src={logo} alt="" />
                </Link>
                <div className="dropdown flex items-center gap-5">
                    <div className='relative lg:hidden block'>
                        <Link to={'/cart'}><HiShoppingBag className='text-3xl' /></Link>
                        <span className='absolute -top-2 px-3 py-1 rounded-full bg-red-500 left-2/4 text-white font-bold'>{quantity}</span>
                    </div>
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-2 p-2  shadow bg-base-100 rounded-box w-48 top-full right-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/menu'}>Menu</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><Link to={'/order'}>Order</Link></li>
                        <li><Link to={'/admin'}>Dashboard</Link></li>
                        {user ? <li><button>SignOut</button></li> : <li><Link to={'/login'}>Login</Link></li>}
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex nav-visible">
                <ul className={NavbarCss.link} >
                    <li ><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/order'}>Order</Link></li>
                    <li><Link to={'/admin'}>Dashboard</Link></li>
                    {user ? <li><button onClick={() => signOut(auth)}>SignOut</button></li> : <li><Link to={'/login'}>Login</Link></li>}
                    <li><Link to={'/cart'}><HiShoppingBag className='text-3xl relative' /></Link>
                        <span className='absolute -top-2 px-3 py-1 rounded-full bg-red-500 left-2/4 text-white font-bold'>{quantity}</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;