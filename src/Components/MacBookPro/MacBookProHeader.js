import React from 'react';

function MacBookProHeader() {
    return(  
        <div id='macbook-page-header-2'>
            <div className='logos'>
                <a href='/'><p className='macbook-product-logo'>MacBook Pro 16-inch model</p></a>
            </div>

            <div className='macbook-header-2-center-menu'>
                <a href='/#/macbookpro-home'><button className='macbook-product-header-2-menu-buttons'>Overview</button></a>
                <a href='/#/macbookpro-tech-specs'><button className='macbook-product-header-2-menu-buttons'>Tech Specs</button></a>
            </div>

            <div className='product-header-2-right-stuff'>
                <div>

                </div>
                
                <a href='/#/mac-book-pro'><button className='product-header-2-buy-button'>Buy</button></a>
            </div>
        </div>
        
    )
}

export default MacBookProHeader;