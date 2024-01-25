import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { subscribeURL, stripePublishKey } from "../../constants";
import { authAxios } from "../../utils";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.

const stripePromise = loadStripe(stripePublishKey);

export default function Check() {
    const [clientSecret, setClientSecret] = useState("");

    this.setState({ loading: true, error: null });
    if (this.props.stripe) {
        this.props.stripe.createToken().then(result => {
            if (result.error) {
                this.setState({
                    error: result.error.message,
                    loading: false
                });
            } else {
                authAxios
                    .post(subscribeURL, {
                        stripeToken: result.token.id
                    })
                    .then(res => {
                        this.setState({
                            loading: false
                        });
                        this.props.handleUserDetails();
                    })
                    .catch(err => {
                        console.log(err);
                        this.setState({
                            loading: false,
                            error: err.response.data.message
                        });
                    });
            }
        });
    } else {
        console.log("Stripe js hasn't loaded yet");
    }

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}