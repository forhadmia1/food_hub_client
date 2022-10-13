import React from 'react';
import { BsInstagram } from 'react-icons/bs'
import styles from '../Styles/SingleImage.module.css'

const SingleImage = ({ image }) => {
    return (
        <div className={styles.imgContainer}>
            <img className='h-full' src={image.pic} alt="" />
            <div className={`${styles.imgBox} w-full h-full flex justify-center items-center flex-col bg-slate-900 bg-opacity-60`}>
                <BsInstagram className='text-3xl text-white' />
                <p className='mt-2 text-white'>View in Instagram</p>
            </div>
        </div>
    );
};

export default SingleImage;