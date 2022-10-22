import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Layout from '../components/Layout';
import { useState } from 'react';
import { useEffect } from 'react';
import useToken from '../hooks/useToken';
import Loading from '../components/Loading';

const LoginPage = () => {
    const [customError, setCustomError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [token] = useToken(user || guser)

    let from = location.state?.from?.pathname || "/";

    if (loading || gloading) {
        <Loading />
    }

    if (token) {
        navigate(from, { replace: true });
    }
    useEffect(() => {
        if (error || gerror) {
            setCustomError((error || gerror).code.split('/')[1].split('-').join(' '))
        }
    }, [error, gerror])
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }


    return (
        <Layout>
            <section className="min-h-screen flex items-stretch text-white ">
                <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=740&t=st=1658914529~exp=1658915129~hmac=423a5cde4326e3b2fae6548c1bd63c7108d6c34ba0f392589b0a1c346be588e9')]">
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    <div className="w-full px-24 z-10">
                        <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                        <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-slate-800" >

                    <div className="w-full py-6 z-20">
                        <h1 className="my-4 text-6xl font-bold">
                            FOOD HUB
                        </h1>
                        <div className="py-6 space-x-2">
                            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">f</span>
                            <span onClick={() => signInWithGoogle()} className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">G</span>
                        </div>
                        <p className="text-gray-100 text-lg">
                            or use email to <Link to="/register" className='font-bold underline'>create account</Link>
                        </p>
                        <form onSubmit={handleLogin} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                            <div className="pb-2 pt-4">
                                <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black" />
                            </div>
                            <div className="pb-2 pt-4">
                                <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                                <a href="no">Forgot your password?</a>
                            </div>
                            <div className="px-4 pb-2 pt-4">
                                <p className='text-red-500 text-center text-sm mb-2'>{customError}</p>
                                <button type='submit' className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default LoginPage;