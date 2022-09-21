import React from 'react';
import { images } from '../../data/images';
import SingleImage from '../SingleImage';

const ImageBar = () => {
    return (
        <div className='flex h-60'>
            {
                images.map(image=><SingleImage
                key={image.id}
                image={image}
                />)
            }
            
        </div>
    );
};

export default ImageBar;