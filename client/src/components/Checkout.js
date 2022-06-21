import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
export default function Checkout({totalamount}) {

    // const orderstate = useSelector((state) => state.placeOrderReducer)

    //const {loading , error , success} = orderstate
    
    
    // const dispatch = useDispatch()
    function tokenHandler(token)
    {
        // console.log(token);
        // dispatch(placeOrder(token , subtotal))

    }

    return (
        <div>
            
            {/* {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)} */}

            <StripeCheckout
            amount={totalamount*100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51LD6YGG0CkHymctW7x0ugp8QTFzwxt33ZNngptcg2RjENhO8Vqr8chj9d4TQSKVBCu0lYQzengwycMfwCyMHRFQ400yjTSMPjX'
            currency='INR'
            >

                  
                  <button className='btn'>Pay Now</button>

            </StripeCheckout>
            
        </div>
    )
}