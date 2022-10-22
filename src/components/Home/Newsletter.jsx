import React from 'react';

const Newsletter = () => {
    return (
        <div className="px-4 py-8 mx-auto bg-[url('/src/assets/banner/bg_subscribe.jpg')]">
            <section className="md:mb-32 mb-10 text-gray-800 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="grow-0 shrink-0 flex-basis w-full md:w-2/3 lg:w-6/12 px-3">
                        <h2 className="text-2xl md:text-5xl text-white font-bold mb-6 mt-16">Subscribe to the newsletter</h2>

                        <p className="text-white text-xl font-thin mb-12">We will write rarely and only high-quality content.</p>

                        <div className="md:flex flex-row">
                            <input
                                type="text"
                                className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-3xl"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-yellow-400 rounded-3xl text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-gray-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;