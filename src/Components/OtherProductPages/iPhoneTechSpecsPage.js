import React from 'react';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
import IphoneHeader from './IphoneHeader';

import "./OtherProductPages.css";

function IphoneTechSpecsPage() {
    return(
        <div>
            <HomeProductHeaderOne/> 
            <IphoneHeader/>
            
            <body id='iphone-tech-specs-body'>
                {/* <div className='iphone-headings'>
                    <h1>iPhone 11 Pro</h1>
                    <h1>iPhone 11 Pro Max</h1>
                </div>
                <div className='iphone-heading-line'/> */}
                <img className='iphone-heading-photo' src='https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/11pro/iPhone_11_Pro_Desktop_01._CB436769811_.jpg' alt='pic' />
            </body>
        </div>
    )
}

export default IphoneTechSpecsPage;