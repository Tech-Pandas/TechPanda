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


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

function CartPage(props) {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])

    // const {cart} = props
    // useEffect(() => {
    //     if(props.cart){
    //         Axios.post(`/api/cart`, {cart})
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    //     }
    // }, [])

    // useEffect(() => {
    //     Axios.get('/api/cart')
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        let updatedPrice = 0
        props.cart.map(e => {
            updatedPrice = updatedPrice + e.productPrice
        })
        setTotal(updatedPrice)
    }) 

    const forceUpdate = useForceUpdate()

    return (
        <>
        <HomeProductHeaderOne />
        <div className='shopping-cart'>
            <div className='cart-products'>
                <h1>Shopping Cart</h1>            
                <div>
                    {props.cart ? (
                        props.cart.map((e,i) => {
                            return <CartDisplay productObj={e} productId={i} forceUpdate={forceUpdate}/>
                        }
                        )
                    ) : (
                        <p>nothing in cart</p>
                    )}
                </div>
            </div>
            <div className='payment-form'>

                <Form total={total}/>
            </div>
        </div>
        </>
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