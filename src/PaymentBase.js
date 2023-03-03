import React, {Component, useState} from "react";
import {useNavigate} from "react-router-dom";

const PaymentBase = () => {

    const navigate = useNavigate()

    const [paymentMethodValue, setPaymentMethodValue] = useState("card")
    const [paymentAmount, setPaymentAmount] = useState(0)
    const [paymentCurrency, setPaymentCurrency] = useState("EUR")

    const handleSubmit = (e) => {
        var navigationMethod = '/' + paymentMethodValue
        navigate(
            navigationMethod,
            { state: {paymentAmount: paymentAmount, paymentCurrency: paymentCurrency} }
        )
        console.log("AAAAAAAAAAAAAAAAA")
    }

    return (
        <>
            <h1> PaymentBase </h1>

            <form id="payment-data-form" onSubmit={handleSubmit}>

                <input onChange={e => { setPaymentAmount(e.target.value) }} placeholder="Amount"/>

                <select name="payment currency" id="paymentCurrency"
                        onChange={e => { setPaymentCurrency(e.target.value) }}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>

                <select name="payment method" id="paymentMethod"
                        onChange={ e=> { setPaymentMethodValue(e.target.value) }}>
                    <option value="card">Card</option>
                    <option value="applePay">Apple pay</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}


export default PaymentBase