import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import auth from '../firebase.init';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const customStyles = {
    content: {
        width: '40%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const OrderModal = ({ modalIsOpen, setIsOpen }) => {
    const [order, setOrder] = useState(null)
    const { carts, TotalAmount } = useSelector(state => state.carts)
    const [user] = useAuthState(auth)
    function closeModal() {
        setIsOpen(false);
    }

    const handleForm = (e) => {
        e.preventDefault()
        const name = user?.displayName
        const email = user?.email
        const phone = e.target.phone.value
        const address = {
            stret: e.target.address.value,
            city: e.target.city.value,
            district: e.target.district.value,
        }
        const order = { name, email, phone, address, totalAmount: TotalAmount, item: carts }
        setOrder(order)
    }
    /*
    Stripe section
     */

    const stripePromise = loadStripe("pk_test_51L31xRIBSJhlneIDCMOq1S0WmZPaYWMRjA1VxPaGwfWSm9BaJ8vp4ptaPeF4CczBGbYGabAh4EIGMqo08xn6jdGK00LPPoCJ4r");

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {!order ? <div>
                    <div className='flex justify-end'>
                        <button onClick={closeModal} className='bg-yellow-400 px-2 py-2 rounded'>Close <span className='font-bold'>X</span></button>
                    </div>
                    <div>
                        <form onSubmit={handleForm} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <label htmlFor="fullname" className='ml-1 mb-2'>
                                Name:
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4 bg-slate-200 font-medium"
                                    name="fullname"
                                    value={user?.displayName}
                                    disabled />
                            </label>
                            <label htmlFor="email" className='ml-1 mb-2'>
                                Email:
                                <input
                                    type="email"
                                    className="block border border-grey-light w-full p-3 rounded mb-4 bg-slate-200 font-medium"
                                    name="email"
                                    value={user?.email}
                                    disabled />
                            </label>
                            <label htmlFor="phone" className='ml-1 mb-2'>
                                Phone:
                                <input
                                    type="tel"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="phone"
                                    required />
                            </label>
                            <label htmlFor="address" className='ml-1 mb-2'>
                                Address:
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="address"
                                    required />
                            </label>
                            <div className='flex gap-3'>
                                <label htmlFor="city" className='ml-1 mb-2'>
                                    City:
                                    <input
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="city"
                                        required />
                                </label>
                                <label htmlFor="district" className='ml-1 mb-2'>
                                    State:
                                    <input
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="district"
                                        required />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-center py-3 rounded bg-green text-white hover:bg-yellow-600 focus:outline-none my-1"
                            >Next</button>
                        </form>
                    </div>
                </div> : <div >
                    <div className='flex justify-end'>
                        <button onClick={closeModal} className='bg-yellow-400 px-2 py-2 rounded'>Close <span className='font-bold'>X</span></button>
                    </div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            setIsOpen={setIsOpen}
                            order={order} />
                    </Elements>
                </div>}
            </Modal>
        </div>
    );
}

export default OrderModal;