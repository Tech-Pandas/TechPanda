import React, {useState, useEffect} from 'react';

function HomeProductHeaderTwo() {

    const componentDidMount = () => {
        
    }

    const userLogin = () => {
        // console.log('login before')
        window.location.href = 'http://localhost:5000/api/login';
        // console.log('login')
    };


    return(  
        <div id='home-product-page-header-1'>
            <img id='logo' src='https://static.thenounproject.com/png/337525-200.png'/>
            <button
                onClick={() => userLogin()}
            >Login</button>
        </div> 
    )
}

export default HomeProductHeaderTwo;