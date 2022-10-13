import React from 'react';
import {Link} from "react-router-dom";
import Layout from '../components/Layout';

const RegisterPage = () => {
    return (
        <Layout>
        <div>
            <div class="flex flex-col">
            <div class="container max-w-md shadow mx-auto flex-1 flex flex-col items-center justify-center px-4">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full bg-yellow-500 text-center py-3 rounded bg-green text-white hover:bg-yellow-600 focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a href="/" class="no-underline border-b border-grey-dark text-grey-dark" >
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="/">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6 text-black">
                    Already have an account? 
                    <Link to="/login" class="no-underline border-b border-blue text-blue">
                        <span className='font-bold ml-2 '>
                        Log in
                        </span>
                    </Link>
                </div>
            </div>
        </div>
            
        </div>
        </Layout>
    );
};

export default RegisterPage;