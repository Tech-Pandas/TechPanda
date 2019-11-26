import React from 'react';

function IphoneHeader() {
    return(  
        <div id='iphone-page-header-2'>
            <div className='logos'>
                <a href='/'><p className='iphone-product-logo'>iPhone 11 Pro</p></a>
            </div>

            <div className='iphone-header-2-center-menu'>
                <a href='/#/iphone'><button className='iphone-product-header-2-menu-buttons'>Overview</button></a>
                <a href='/#/iphone-tech-specs'><button className='iphone-product-header-2-menu-buttons'>Tech Specs</button></a>
            </div>

            <div className='product-header-2-right-stuff'>
                <div className='product-header-2-text'>
                    <p className='iphone-product-header-2-text-p-1'>From $999 or $41.62/mo for 24 mos</p>
                    <p className='iphone-product-header-2-text-p-2'>with 0% APR Apple Store Financing*</p>
                </div>
                
                <a href='/#/productconfigiphone'><button className='product-header-2-buy-button'>Buy</button></a>
            </div>
        </div>
        
    )
}

export default IphoneHeader;