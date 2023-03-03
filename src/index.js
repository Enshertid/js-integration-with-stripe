import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


document.addEventListener('DOMContentLoaded', async () => {
    const {publishableKey} = await fetch('/api/stripe/test/config').then((r) => r.json());
    console.log("stripe publish api key")
    console.log(publishableKey)
    const stripePromise = loadStripe(publishableKey);

    ReactDOM.render(
        <React.StrictMode>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
        </React.StrictMode>,
        document.getElementById('root')
    );
});