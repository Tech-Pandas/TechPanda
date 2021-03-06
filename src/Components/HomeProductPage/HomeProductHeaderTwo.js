import React from 'react';
import { Link } from 'react-router-dom';

function HomeProductHeaderTwo() {
    return(  
        <div id='home-product-page-header-2'>
            <div className='logos'>
                <a href='/'><p className='product-logo'>Google Pixel 4</p></a>
            </div>

            <div className='product-header-2-center-menu'>
                <a href='/'><button className='product-header-2-menu-buttons'>Overview</button></a>
                <Link to ='/techspecs'><button className='product-header-2-menu-buttons'>Tech Specs</button></Link>
            </div>

            <div className='product-header-2-right-stuff'>
                <div className='product-header-2-text'>
                    <p className='product-header-2-text-p-1'>From $799 or $33.29/mo for 24 mos</p>
                    <p className='product-header-2-text-p-2'>with 0% APR Google Store Financing*</p>
                </div>
                
                <a href='#/productconfig'><button className='product-header-2-buy-button'>Buy</button></a>
            </div>
        </div>
        
    )
}

export default HomeProductHeaderTwo;