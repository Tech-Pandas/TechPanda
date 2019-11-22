// This component will display the items on the cart, as well as the checkout options. It will also hold the functions to send the cart to the database to be stored there, as well as to check if there are any saved carts for the current user(if any) and load them. 

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer'
import axios from 'axios';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';



function CartPage(props){
    const [productId, setProductId] = useState(0)

    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])

    const {productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor} = props.cart
    useEffect(() => {
        axios.post('/api/productid', {productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor})
        .then(res => {
            setProductId(res.data)
        })
    }, [])

    console.log(props.cart)

    return(
        <div>
            <HomeProductHeaderOne />
            CartPage
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user
    }
}

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)