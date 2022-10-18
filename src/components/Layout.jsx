import React from 'react';
import Navbar from './Home/Navbar';
import styles from '../Styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={`${styles.layoutContainer} mx-auto`}>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;