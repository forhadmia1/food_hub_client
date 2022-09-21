import React from 'react';
import About from '../components/Home/About';
import ChooseUs from '../components/Home/ChooseUs';
import FeaturedItems from '../components/Home/FeaturedItems';
import Footer from '../components/Home/Footer';
import HeroArea from '../components/Home/HeroArea';
import ImageBar from '../components/Home/ImageBar';
import Newsletter from '../components/Home/Newsletter';

const Home = () => {
    return (
        <>
            <HeroArea/>
            <FeaturedItems/>
            <ChooseUs/>
            <About/>
            <ImageBar/>
            <Newsletter/>
            <Footer/>
        </>
    );
};

export default Home;