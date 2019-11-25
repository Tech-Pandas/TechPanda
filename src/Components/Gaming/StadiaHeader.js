import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Stadia.css';

function StadiaHeader() {
    return(  
        <div id='stadiaheader'>
            <div className='logos'>
                <p className='stadianame'>Stadia Premiere Edition</p>
            </div>

            <div className='product-header-2-center-menu'>
                <a href='/'><button className='product-header-2-menu-buttons'>Overview</button></a>
                <Link to ='/stadiaspecs'><button className='product-header-2-menu-buttons'>Tech Specs</button></Link>
            </div>

            <div className='product-header-2-right-stuff'>
                <div className='product-header-2-text'>
                    <p className='product-header-2-text-p-1'>$129</p>
                    <p className='product-header-2-text-p-2'>Free Shipping</p>
                </div>
                
                <a href='#/productconfig'><button className='product-header-2-buy-button'>Buy</button></a>
            </div>
        </div>
        
    )
}

export default StadiaHeader;