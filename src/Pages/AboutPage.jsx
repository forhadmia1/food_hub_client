import React from 'react';
import Footer from '../components/Home/Footer';
import Layout from '../components/Layout';
import { GiSemiClosedEye } from 'react-icons/gi';
import { FaIndustry, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <Layout>
            <div className='flex flex-col items-start px-4 md:items-center mt-10'>
                <h2 className='md:text-6xl text-3xl font-bold'>About</h2>
                <p className='text-md mt-4'>Home{'>'}About</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-24 my-20'>
                <div className='order-2'>
                    <h2 className='text-4xl font-semibold'>Begin your journey in a peaceful and relaxing environment</h2>
                    <p className='mt-5 leading-7'>
                        We operate a giant service for online food delivery, serving our clients with an easy and secure way to order and pay for food from our Restaurant Partners. We have the widest choice available on our platform – from great local restaurants, traditional comfort food to renowned international branded chains.
                    </p>
                    <p className='mt-5 leading-7'>
                        We’ve created a community that champions customers, restaurants and the vibrant takeaway sector. We offer our customers the widest choice from over 100 different cuisines. Whether they’re craving Georgian cuisine on a Friday night or want burritos brought straight to the office, we satisfy our customers’ needs with great tasting dishes.
                    </p>
                    <p className='mt-5 leading-7'>
                        We help our Restaurant Partners to reach more customers and support their businesses by improving standards in the industry. We’re passionate about nurturing the next generation of talent in a diverse and inclusive workplace and offer a full program of training and support to all of our people, to help them develop their careers in the way that suits them.
                    </p>

                </div>
                <div className='order-1 lg:order-3'>
                    <img src="https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148535315.jpg?w=740&t=st=1666379289~exp=1666379889~hmac=b8dbeef956baf7f902f06e41cf7817608eb9142e096ba75e55c756b9e9c07db1" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-10'>
                <div>
                    <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=740&t=st=1666378430~exp=1666379030~hmac=f1e020374ff9dcb7fdc45769375bd6a81178b031259dc25ebed6912121ee9b5e" alt="" />
                </div>
                <div className='bg-yellow-400 flex items-center p-4 lg:px-12'>
                    <div>
                        <h2 className='text-4xl font-semibold'>Find Favourite Food <br /> And Explore New Item</h2>
                        <p className='mt-5'>
                            Search for hundreds of restaurants in your city to get the best of your neighborhood delivered.
                        </p>
                        <Link to={'/contact'} class="py-3 block mt-5 px-5 text-sm font-medium text-center  rounded-full bg-primary-700 sm:w-fit bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 ">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className='lg:px-24 px-4 grid grid-cols-1 lg:grid-cols-2 my-20 gap-10'>
                <div>
                    <h2 className='text-4xl font-semibold'>Our mission</h2>
                    <div className='flex gap-5 items-center mt-5'>
                        <GiSemiClosedEye className='text-4xl text-yellow-400' />
                        <p>We believe each guest visiting our salon & spa is a compliment we truly appreciate.</p>
                    </div>
                    <div className='flex gap-5 items-center mt-5'>
                        <FaIndustry className='text-4xl text-yellow-400' />
                        <p>We believe in the power our industry has to transform a guest’s self-confidence and well-being.</p>
                    </div>
                    <div className='flex gap-5 items-center mt-5'>
                        <FaReact className='text-4xl text-yellow-400' />
                        <p>We believe in the commitment to excel in knowledge and skill to always provide exceptional experience.</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl font-semibold'>What we offer</h2>
                    <p className='mt-5 leading-7'>
                        Upgrade your prosperity with our enhanced combination of spa and wellbeing, guilty pleasure and knowledge, play and reason. Encircle yourself with the peacefulness of an untainted desert scene structured ordinarily to support and recharge your brain, body and soul in an extravagance resort setting.Discover why Spa is listed as one of the best hotel spas through signature services from massages, facials and body treatments to acupuncture and singing sound bowl therapy.
                    </p>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default AboutPage;