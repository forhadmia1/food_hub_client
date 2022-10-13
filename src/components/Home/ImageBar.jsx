import React from 'react';
import { images } from '../../data/images';
import SingleImage from '../SingleImage';

const ImageBar = () => {
    return (
        <div className='md:flex h-60 hidden'>
            {
                images.map(image => <SingleImage
                    key={image.id}
                    image={image}
                />)
            }
        </div>
    );
};

export default ImageBar;