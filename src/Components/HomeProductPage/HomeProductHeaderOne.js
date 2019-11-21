import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser, logout} from '../../redux/reducer'

function HomeProductHeaderOne(props) {

    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])

    const userLogin = () => {
        window.location.href = 'http://localhost:5000/api/login';
    };
   
    console.log(props.user)
    console.log(props.loggedIn)

    return(  
        <div id='home-product-page-header-1'>
            <img id='logo' src='https://static.thenounproject.com/png/337525-200.png'/>
            {props.loggedIn ? (
                <div> 
                    <img src={props.user.user_image} alt='' className='user-image'/>
                    <button
                        onClick={() => props.logout()}
                    >Logout</button>
                </div>
            ) : (
                <button
                onClick={() => userLogin()}
            >Login</button>
            )}
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = {
    getUser,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProductHeaderOne)