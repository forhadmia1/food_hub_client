import React from 'react';
import Footer from './Home/Footer';
import Layout from './Layout';

const NotFound = () => {
    return (
        <Layout>
            <div className=''>
                <img className='w-full h-screen' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?w=740&t=st=1666543621~exp=1666544221~hmac=eb8b53c768c3ea72461c6c1b2d9fa1bfc5695e6f6a17ab5bbdfa54db9c00c574" alt="" />
            </div>
            <Footer />
        </Layout>
    );
};

export default NotFound;