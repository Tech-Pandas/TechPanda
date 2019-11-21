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

            <div><h1 id='home-product-heading-2'>Studio-like photos.</h1></div>
            <div><h1 id='home-product-heading-3'>Without the studio.</h1></div>

            <img className='big-phone-camera' src='https://lh3.googleusercontent.com/FRGR4PXw7707svDy36bGGZaUTovrZZ6XnypbWv3YbFTlHzHy9VTMcuP2KT0vE4aMwheuTDgG4BkHYV96zRyZ=rw-w2550'/>
        
            <div id='black-section'>
                <img className='photo-behind-hole' src='https://techpandas.s3-us-west-1.amazonaws.com/Pixel4womanimg.jpg'/>
                <div><h1 id='home-product-heading-4'>Shoot without the flash.</h1></div>
                <div><p id='home-product-heading-5'>Capture rich detail and color, even in the dark, with the next generation of Night Sight.</p></div>
            </div>      
        </div>
    )
}

export default HomeProductPage;