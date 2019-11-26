// This component will display the items on the cart, as well as the checkout options. It will also hold the functions to send the cart to the database to be stored there, as well as to check if there are any saved carts for the current user(if any) and load them. 

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser, getCart } from '../../redux/reducer'
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
// import { withRouter } from 'react-router-dom';
import Form from '../StripeComponent/Form';
import CartDisplay from './CartDisplay'

// Style //

import './CartPage.css';


//-----Stripe Import----//



function CartPage(props) {
    const [cart, setCart] = useState({})


    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])

    // useEffect(() => {
    //     if(props.user.user_id){
    //        props.getCart(props.user.user_id)
    //     }
    // }, [])

    console.log(props.cart)   

    return (
        <div>
            <HomeProductHeaderOne />
            <div>
                CartPage            
                <div>
                    {props.cart ? (
                        props.cart.map(e => {
                            return <CartDisplay productObj={e}/>
                        }
                        )
                    ) : (
                        <p>nothing in cart</p>
                    )}
                </div>
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        savedCart: state.savedCart,
        user: state.user,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = {
    getUser, 
    getCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);