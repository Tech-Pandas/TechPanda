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

            <div><h1 id='home-product-heading'>The Google Phone.</h1></div>

            <button className='home-product-heading-button'>Buy</button>

            <div id='home-product-body-top-images'>
                <img className='pixel-4-photo-1' src={TestData.image_1} />
                <img className='pixel-4-photo-2' src={TestData.image_2} />
                <img className='pixel-4-photo-3' src={TestData.image_3} />
            </div>
        </div>
    )
}

export default HomeProductPage;