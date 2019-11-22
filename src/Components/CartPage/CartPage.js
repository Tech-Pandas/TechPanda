// This component will display the items on the cart, as well as the checkout options. It will also hold the functions to send the cart to the database to be stored there, as well as to check if there are any saved carts for the current user(if any) and load them. 

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer'


function CartPage(props){
    

    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])

    useEffect(() => {
        // need to have an axios request here to get the product's id from the db
    }, [])

    console.log(props)

    return(
        <div>
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