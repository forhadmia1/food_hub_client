import React from 'react';
import { BarLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='w-full mt-52 flex justify-center'>
            <BarLoader color="#3498db" />
        </div>
    );
};

export default Loading;