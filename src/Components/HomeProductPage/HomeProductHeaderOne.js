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

    // useEffect(() => {
    //     if(props.user.loggedIn){
    //         axios.get(`/api/cart/${props.user.id}`)
    //         .then(res => {
                
    //         })
    //         .catch(err => console.log(err))
    //     }
    // })


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

    console.log(props)
    //-------- Style Done Here --------///

    return (
        <div id='home-product-page-header-1'>
            
            <div id='left-header-1-stuff'>

                <a href='/#/'><img id='logo' src='https://static.thenounproject.com/png/337525-200.png' /></a>
                <a href='/#/'><p className='left-header-1-text'>Pixel 4</p></a>
                {/* <a href='/#/'><p className='left-header-1-text'>iPhone 11 Pro Max</p></a> */}
      
                <a href='/#/stadia'><p className='left-header-1-text'>Stadia</p></a>
            </div>
            
            <div className='cart-user-icons'>
                <div>
                    <a href='/#/cart'><ShoppingCartIcon></ShoppingCartIcon></a>
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
                        <img 
                            src='https://static.thenounproject.com/png/2366460-200.png' 
                            onClick={() => userLogin()}
                            className='user-icon'
                        ></img>
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