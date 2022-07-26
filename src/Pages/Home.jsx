import React from 'react';
import About from '../components/Home/About';
import ChooseUs from '../components/Home/ChooseUs';
import FeaturedItems from '../components/Home/FeaturedItems';
import HeroArea from '../components/Home/HeroArea';
import Newsletter from '../components/Home/Newsletter';

const Home = () => {
    return (
        <div className='mt-[-100px]'>
            <HeroArea/>
            <FeaturedItems/>
            <ChooseUs/>
            <About/>
            <Newsletter/>
        </div>
    );
};

export default Home;