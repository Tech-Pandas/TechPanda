import React, { useState } from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

// import StripeNumberTextField from '../StripeComponent/StripeNumberTextField';
// import StripeExpiryTextField from '../StripeComponent/StripeExpiryTextField';
// import StripeCVCTextField from '../StripeComponent/StripeCVCTextField';

function Form(props) {

    const [name] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let token = await props.stripe.createToken({ name: name });
            // console.log(token)
            if (token.error) {
                return alert('Invalid')
            }
            alert('Payment Submitted')
            props.history.push('/')
        } catch (e) {
            throw e;
        }
    }

    console.log(props.cart)
    return (
        <div id='stripe-component'>
            Form
            <form onSubmit={handleSubmit}>
                <label value={name}>{props.user.user_name}</label>
                
                <label>Amount: {props.cart.productPrice}</label>
                
                <CardElement />
                
                <button className='home-product-heading-button'>Submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user,
        loggedIn: state.loggedIn
    }
}



export default connect(mapStateToProps)(injectStripe(withRouter(Form)));