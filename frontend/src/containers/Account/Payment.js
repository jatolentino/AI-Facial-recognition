import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'
import React from 'react'
import { subscribeURL } from '../../constants';

function Payment(props) {
    const { stripePromise } = props;
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(subscribeURL)
            .then((res) => res.json())
            .then(({ clientSecret }) => setClientSecret(clientSecret));
    }, []);


    return (
        <div>
            <h1>Payment</h1>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret, }}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}

export default Payment;