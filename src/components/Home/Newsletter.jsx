import React from 'react';

const Newsletter = () => {
    return (
        <div class="px-6 py-8 mx-auto bg-[url('https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?w=740&t=st=1658856098~exp=1658856698~hmac=c26e5f1736e5b2387a029ca9a818e1ab75d4990f117bf008179a88804dee3c88')] bg-cover bg-fixed">
            <section class="mb-32 text-gray-800 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
                <h2 class="text-3xl font-bold mb-6 mt-16">Subscribe to the newsletter</h2>

                <p class="text-gray-500 mb-12">We will write rarely and only high-quality content.</p>

                <div class="md:flex flex-row">
                    <input
                    type="text"
                    class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your email"
                    />
                    <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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