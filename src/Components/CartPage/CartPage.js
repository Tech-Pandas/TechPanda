// This component will display the items on the cart, as well as the checkout options. It will also hold the functions to send the cart to the database to be stored there, as well as to check if there are any saved carts for the current user(if any) and load them. 

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer'
import axios from 'axios';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
// import { withRouter } from 'react-router-dom';
import Form from '../StripeComponent/Form';

// Style //

import './CartPage.css';


//-----Stripe Import----//



function CartPage(props) {
    const [productId, setProductId] = useState(0)
    const [cart, setCart] = useState({})



    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])

    useEffect(() => {
        // console.log(props.user.user_id)
        // console.log(props)
        // console.log(props, productId)
        axios.get(`/api/cart/${props.user.resuser_id}`)
            .then(res => {
                console.log(res)
                setCart(res.data)
            })
    }, [])


    console.log(props)
    console.log(cart)


    return (
        <div>
            <HomeProductHeaderOne />
            CartPage
            <Form />
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

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);