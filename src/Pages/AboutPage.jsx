import React from 'react';
import Footer from '../components/Home/Footer';
import Layout from '../components/Layout';

const AboutPage = () => {
    return (
        <Layout>
            <div className='flex flex-col items-start px-4 md:items-center mt-10'>
                <h2 className='md:text-6xl text-3xl font-bold'>About</h2>
                <p className='text-md mt-4'>Home{'>'}About</p>
            </div>
            <Footer />
        </Layout>
    );
};

export default AboutPage;