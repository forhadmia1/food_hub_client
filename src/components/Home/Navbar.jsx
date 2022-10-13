import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import auth from '../../firebase.init';
import NavbarCss from '../../Styles/Navbar.module.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <p>Loading.....</p>
    }
    console.log(user);
    return (
        <nav class="navbar z-50 bg-base-100 md:px-24 py-4 md:py-5">
            <div class="navbar-start z-50 w-full justify-between px-2">
                <Link to={'/'}>
                    <img className='w-32 z-50' src={logo} alt="" />
                </Link>
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-48 ml-[-140px]">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/'}>About</Link></li>
                    <li><Link to={'/'}>Contact</Link></li>
                    <li><Link to={'/'}>Order</Link></li>
                    {user? <li><button>SignOut</button></li>:<li><Link to={'/login'}>Login</Link></li>}
                </ul>
                </div>
            </div>
            <div class="navbar-end hidden lg:flex z-50">
                <ul className={NavbarCss.link} >
                    <li ><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/'}>About</Link></li>
                    <li><Link to={'/'}>Contact</Link></li>
                    <li><Link to={'/order'}>Order</Link></li>
                     {user? <li><button onClick={()=> signOut(auth)}>SignOut</button></li>:<li><Link to={'/login'}>Login</Link></li>}
                </ul>
            </div>
            </nav>
    );
};

export default Navbar;