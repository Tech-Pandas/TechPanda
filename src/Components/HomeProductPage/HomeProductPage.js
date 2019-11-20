import React from 'react';
import "./HomeProductPage.css"

import TestData from '../../dummydata.json';
import HomeProductHeaderOne from './HomeProductHeaderOne';
import HomeProductHeaderTwo from './HomeProductHeaderTwo';

function HomeProductPage() {
    return(
        <div>
            <HomeProductHeaderOne/>
            <HomeProductHeaderTwo/>
            <div id='home-product-body'>
                <img className='pixel-4-photo-1' src={TestData.image_1} />
                <img className='pixel-4-photo-2' src={TestData.image_2} />
                <img className='pixel-4-photo-3' src={TestData.image_3} />
            </div>
        </div>
    )
}

export default HomeProductPage;