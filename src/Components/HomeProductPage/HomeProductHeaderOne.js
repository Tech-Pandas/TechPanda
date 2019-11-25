import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, logout } from '../../redux/reducer';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {withRouter} from 'react-router-dom';



function HomeProductHeaderOne(props) {
    const [productId, setProductId] = useState(0)


    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])


    const userLogin = () => {
        window.location.href = 'http://localhost:5000/api/login';
    };

    const logoutUser = () => {
        const {productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor} = props.cart
        
        axios.post('/api/productid', {productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor})
        .then(res => {
            setProductId(res.data)
        })
        axios.post('/api/cart', {user_id: props.user.id, product_id: productId, quantity: 1})
        .then(res => {
            console.log(res)
        })

        console.log('hitting logout', props)
        props.logout()

        props.history.push('/')
        // console.log(props)
    }


    //------- Adding Style here --------///

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //-------- Style Done Here --------///

    return (
        <div id='home-product-page-header-1'>
            <a href='/'><img id='logo' src='https://static.thenounproject.com/png/337525-200.png' /></a>
            <div className='cart-user-icons'>
                <div>
                    <ShoppingCartIcon></ShoppingCartIcon>
                    {/* <img src='https://carlisletheacarlisletheatre.org/images/shopping-cart-icon-grey-9.jpg' className='cart-icon' /> */}
                </div>
                {props.loggedIn ? (
                    <div>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <img src={props.user.user_image} alt='' className='user-image' />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem >{props.user.user_name}</MenuItem>
                            <MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
                        </Menu>
                    </div>
                ) : (
                        <button
                            onClick={() => userLogin()}
                        >Login</button>
                    )}
            </div>
        </div>
    )
}


{/* <button
    onClick={() => props.logout()}
>
    Logout
</button> */}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        loggedIn: state.loggedIn,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    getUser,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeProductHeaderOne))