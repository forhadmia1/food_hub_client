import { async } from '@firebase/util';
import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import Layout from '../components/Layout';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';

const RegisterPage = () => {
    const navigate = useNavigate()
    const [passMatch, setPassMatch] = useState(false)
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user)

    const handleForm = async (e) => {
        e.preventDefault()
        const name = e.target.fullname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        if (password !== confirm_password) {
            setPassMatch(true)
        } else {
            setPassMatch(false)
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({
                displayName: name
            })
        }
    }

    if (token) {
        navigate('/')
    }
    return (
        <Layout>
            <div>
                <div className="flex flex-col">
                    <div className="container max-w-md shadow mx-auto flex-1 flex flex-col items-center justify-center px-4">
                        <form onSubmit={handleForm} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" />
                            {
                                passMatch && <p className='text-center text-red-500 text-sm'>Password don't Match</p>
                            }
                            {
                                error && <p className='text-center text-red-500 text-sm'>{error.code.split('/')[1].split('-').join(' ')}</p>
                            }
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-center py-3 rounded bg-green text-white hover:bg-yellow-600 focus:outline-none my-1"
                            >Create Account</button>

                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the
                                <a href="/" className="no-underline border-b border-grey-dark text-grey-dark" >
                                    Terms of Service
                                </a> and
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="/">
                                    Privacy Policy
                                </a>
                            </div>
                        </form>

                        <div className="text-grey-dark mt-6 text-black">
                            Already have an account?
                            <Link to="/login" className="no-underline border-b border-blue text-blue">
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