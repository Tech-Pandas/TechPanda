import React, { useState } from 'react';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import { connect } from 'react-redux';
import {clearCart} from '../../redux/reducer'
import {withRouter} from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import swal from 'sweetalert';

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
                return swal({
                    title: "Invalid",
                    text: "There was an error submitting your request",
                    icon: "error",
                  });
            }
            swal({
                title: "Payment Submitted",
                text: "Your payment was successful",
                icon: "success",
              });
            props.history.push('/')
        } catch (e) {
            throw e;
        }
        props.clearCart()
    }

    const classes = useStyles();
    return (
        <div id='stripe-component'>
            <form class='stripe-content' onSubmit={handleSubmit}>
                <label value={name}>{props.user.user_name}</label>
                <h2 className='stripe-heading'>Subtotal: ${props.total}</h2>
                
                <div className='exp-cvc'>
                    <CardNumberElement className={classes.cardNumber}/>
                    <CardExpiryElement className={classes.exp}/>
                    <CardCVCElement className={classes.cvc}/>
                </div>
                <button className='home-product-heading-button'>Pay Now</button>
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

const useStyles = makeStyles({
    cardNumber: {
        width: '60%',
        // border: '1px lightgray solid',
        marginRight: '10px',
        marginBottom: '10px',
        marginTop: '10px',
    },
    exp: {
        width: '24%',
        // border: '1px lightgray solid',
        marginRight: '10px',
        marginTop: '10px',
    },
    cvc: {
        width: '14%',
        // border: '1px lightgray solid',
        marginTop: '10px',
    }
})

const mapDispatchToProps = {
    clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(withRouter(Form)));