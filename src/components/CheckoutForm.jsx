import React, { useEffect, useState } from "react";
import {
    useStripe,
    useElements,
    CardElement
} from "@stripe/react-stripe-js";
import '../Styles/Payment.css'
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

export default function CheckoutForm({ order, setIsOpen }) {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const [errMessage, setErrMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/order/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify({ totalAmount: order.totalAmount }),
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
                return res.json()
            })
            .then((data) => setClientSecret(data.clientSecret));
    }, [order.totalAmount, navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || !clientSecret) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        setIsLoading(true);

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { perror } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setErrMessage(perror?.message || '')

        const { paymentIntent, error } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: order.email,
                    },
                },
            },
        );

        if (error) {
            setErrMessage(error.message);
        } else {
            const newOrder = { ...order, transectionId: paymentIntent.id }
            fetch(`http://localhost:5000/api/v1/order/`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(newOrder)
            }).then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
                if (res.status === 200) {
                    setIsOpen(false)
                    swal({
                        title: "Good job!",
                        text: "Successfully Placed Order",
                        icon: "success",
                        buttons: false,
                        timer: 3000,
                    });
                    localStorage.removeItem('carts')
                    navigate('/order')
                }
            })
        }
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="py-5">
            <CardElement id="payment-element"
            />
            <button className="pay-button" disabled={isLoading || !stripe || !elements || !clientSecret} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {errMessage && <div className="text-red-500 text-center mt-3" >{errMessage}</div>}
        </form>
    );
}