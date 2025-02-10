import React, { useState } from 'react';
import axios from 'axios';
import './payment-page-style.css'; // Link to the CSS file

const PaymentForm = () => {
    const getEmail = () => localStorage.getItem("email"); // Get email from localStorage

    const handlePayment = async (subscriptionType) => {
        try {
            // Create an order by calling Flask API
            const orderResponse = await axios.post('http://localhost:5005/v1/payment/create', {
                email: getEmail(),  // Use email from localStorage
                subscription_type: subscriptionType
            });

            const { id: order_id, amount, currency } = orderResponse.data;

            // Razorpay options
            const options = {
                key: "rzp_test_ls8UyEU66pm1Y6", // Your Razorpay Key ID
                amount: amount,
                currency: currency,
                order_id: order_id,
                name: "Subscription Payment",
                description: `Pay for ${subscriptionType} subscription`,
                handler: async function (response) {
                    // On successful payment, call Flask API to verify payment
                    await axios.post('http://localhost:5005/v1/payment/verify', {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature
                    });

                    alert('Payment Successful!');
                },
                prefill: {
                    email: getEmail(), // Use email from localStorage
                    contact: '7358580180' // Optional: Collect user contact info
                },
                theme: {
                    color: "#3399cc"
                }
            };

            // Open Razorpay Checkout
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Payment error:', error);
        }
    };

    return (
        <div className="payment-unqiuename">
            <h1 className="payment-title">Subscribe to a Plan</h1>

            <div className="payment-plans">
                <div className="payment-box">
                    <h2>Basic Plan</h2>
                    <p>₹100 / month</p>
                    <button className="payment-button" onClick={() => handlePayment('basic')}>Select Basic Plan</button>
                </div>

                <div className="payment-box">
                    <h2>Standard Plan</h2>
                    <p>₹200 / month</p>
                    <button className="payment-button" onClick={() => handlePayment('standard')}>Select Standard Plan</button>
                </div>

                <div className="payment-box">
                    <h2>Premium Plan</h2>
                    <p>₹399 / month</p>
                    <button className="payment-button" onClick={() => handlePayment('premium')}>Select Premium Plan</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
