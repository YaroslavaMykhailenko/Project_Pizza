import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
// import { placeOrder } from '../actions/orderActions'
// import Error from "../components/Error";
// import Loading from "../components/Loading";
// import Success from '../components/Success'


export default function Checkout(totalamount) {
    function tokenHandler(token){
        console.log(token)

    }

    return (
        <div>
            <StripeCheckout amount={totalamount} shippingAddress token={tokenHandler} currency='UAH'>

                <button className='btn'>Оплатити</button>

            </StripeCheckout>

        </div>
    )
}