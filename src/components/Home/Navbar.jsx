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
    const [user, loading, error] = useAuthState(auth);
    const { quantity } = useSelector(state => state.carts)

    if (loading) {
        return <p>Loading.....</p>
    }

    return (
        <nav className="navbar z-50 bg-base-100 md:px-24 py-4 md:py-5">
            <div className="navbar-start  w-full justify-between px-2 z-20">
                <Link to={'/'}>
                    <img className='w-32 z-50' src={logo} alt="" />
                </Link>
                <div className="dropdown flex items-center gap-5">
                    <div className='relative md:hidden block'>
                        <Link to={'/order'}><HiShoppingBag className='text-3xl' /></Link>
                        <span className='absolute -top-2 px-3 py-1 rounded-full bg-red-500 left-2/4 text-white font-bold'>{quantity}</span>
                    </div>
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-2 p-2  shadow bg-base-100 rounded-box w-48 ml-[-140px]">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/menu'}>Menu</Link></li>
                        <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/'}>Contact</Link></li>
                        <li><Link to={'/'}>Order</Link></li>
                        {user ? <li><button>SignOut</button></li> : <li><Link to={'/login'}>Login</Link></li>}
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex z-20">
                <ul className={NavbarCss.link} >
                    <li ><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/'}>About</Link></li>
                    <li><Link to={'/'}>Contact</Link></li>
                    <li><Link to={'/order'}>Order</Link></li>
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