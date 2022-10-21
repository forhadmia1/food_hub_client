import React from 'react';
import Footer from '../components/Home/Footer';
import Layout from '../components/Layout';
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai';

const ContactPage = () => {
    return (
        <Layout>
            <div className='flex flex-col items-start px-4 md:items-center mt-10'>
                <h2 className='md:text-6xl text-3xl font-bold'>Contact</h2>
                <p className='text-md mt-4'>Home{'>'}Contact</p>
            </div>
            <div className='lg:px-24 px-4 flex my-20 flex-col'>
                <div className='bg-yellow-400 px-10 py-20'>
                    <div className='flex gap-5 items-start '>
                        <ImLocation2 className='text-3xl mt-2' />
                        <div>
                            <h2 className='text-2xl font-bold'>Office</h2>
                            <p>Gaibandha Sadar, Gaibandha, Rangpur</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-start mt-5'>
                        <MdEmail className='text-3xl mt-2' />
                        <div>
                            <h2 className='text-2xl font-bold'>Email</h2>
                            <p>forhadmia416@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-start mt-5'>
                        <BsPhone className='text-3xl mt-2' />
                        <div>
                            <h2 className='text-2xl font-bold'>Phone</h2>
                            <p>+88017-17808752</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-start mt-5'>
                        <AiOutlineClockCircle className='text-3xl mt-2' />
                        <div>
                            <h2 className='text-2xl font-bold'>
                                Open Hours</h2>
                            <p>Mon — Sat: 8 am — 5 pm Sunday: CLOSED</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <section class="bg-[url('/src/assets/image/gray-abstract-wireframe-technology-background.jpg')] bg-cover">
                        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <form class="space-y-8">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
                                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                                </div>
                                <div>
                                    <label for="subject" class="block mb-2 text-sm font-medium ">Subject</label>
                                    <input type="text" id="subject" class="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message" class="block mb-2 text-sm font-medium ">Your message</label>
                                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ContactPage;