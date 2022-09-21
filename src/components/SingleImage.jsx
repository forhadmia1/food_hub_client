import React from 'react';
import {BsInstagram} from 'react-icons/bs'
import '../Styles/SingleImage.css'

const SingleImage = ({image}) => {
    return (
        <div className='imgContainer'>
            <img className='h-full' src={image.pic} alt="" />
            <div className='imgBox w-full h-full flex justify-center items-center flex-col bg-slate-900 bg-opacity-60'>
                <BsInstagram className='text-3xl text-white'/>
                <p className='mt-2 text-white'>View in Instagram</p>
            </div>
        </div>
    );
};

export default SingleImage;