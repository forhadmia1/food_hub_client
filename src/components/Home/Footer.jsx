import React from 'react';
import { Link } from 'react-router-dom';
import { CgFacebook } from "react-icons/cg"
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer footer-center pb-10 bg-base-200 text-base-content">
            <div className='py-10 border-b-2 border-gray-400 w-2/3'>
                <div className="grid grid-flow-col gap-4 font-semibold">
                    <Link to={'/'} className="link link-hover">Home</Link>
                    <Link to={'/menu'} className="link link-hover">Menu</Link>
                    <Link to={'/about'} className="link link-hover">About</Link>
                    <Link to={'/contact'} className="link link-hover">Contact</Link>
                </div>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4 text-3xl">
                    <Link to={''}>
                        <AiOutlineTwitter />
                    </Link>
                    <Link to={''}>
                        <AiFillYoutube />
                    </Link>
                    <Link to={''}>
                        <CgFacebook />
                    </Link>
                </div>
            </div>
            <div>
                <p>Copyright &copy; 2022 - All right reserved by Food Hub Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;