import React from 'react';
import About from '../components/Home/About';
import ChooseUs from '../components/Home/ChooseUs';
import FeaturedItems from '../components/Home/FeaturedItems';
import HeroArea from '../components/Home/HeroArea';
import ImageBar from '../components/Home/ImageBar';
import Newsletter from '../components/Home/Newsletter';
import Testimonial from '../components/Home/Testimonial';
import Layout from '../components/Layout';
import Footer from '../components/Home/Footer';

const Home = () => {
    return (
        <Layout>
            <HeroArea/>
            <FeaturedItems/>
            <ChooseUs/>
            <About/>
            <ImageBar/>
            <Testimonial/>
            <Newsletter/>
            <Footer/>
        </Layout>
    );
};

export default Home;