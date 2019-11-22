import React from 'react';
import ReactPlayer from 'react-player';
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

            <a href='#/productconfig'><button className='home-product-heading-button'>Buy</button></a>

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
                
                <div id='react-player-box'>
                    <ReactPlayer 
                        url='https://techpandas.s3-us-west-1.amazonaws.com/googlesittingvideo.mp4' 
                        playing
                        loop 
                        />

                    <div id='react-player-box-words'>
                        <h1 id='home-product-heading-6'>Challenging shots,</h1>
                        <h1 id='home-product-heading-6'> made easy.</h1>
                        <p id='home-product-heading-7'>Adjust brightness and shadows separately with dual exposure controls. Capture vivid colors with Live HDR+.</p>
                    </div>
                </div>

                <div id='under-react-player-box'>
                    <div id='under-react-player-box-words'>
                        <h1 id='home-product-heading-6'>Focus on</h1>
                        <h1 id='home-product-heading-6'>what matters.</h1>
                        <p id='home-product-heading-7'>With a second camera lens, Portrait Mode is now even better. Backgrounds fade into an artful blur, giving photos a DSLR-like quality.</p>
                    </div>

                    <img className='under-player-photo' src='https://lh3.googleusercontent.com/8Kkrtn4eeMj5gEgjjaKyA9j6aC7FF3A4nyOJPe0AqmEnE1KpjlnIPNsetefpZzwy4MOPgUqnJfkIP1FFBbfw9w=rw-w560'/>
                </div>
            </div>

            <div id='home-product-bottom'>
                <h1 id='home-product-heading'>Select your phone.</h1>
                
                <div id='home-product-bottom-bottom'>
                    <div className='home-product-bottom-image-box'>
                        <img className='home-product-bottom-image' src='https://lh3.googleusercontent.com/Nf8OxPaactgEts5WOUegp9l28MOmyeHqRqQ3xMu7rOvh1egFSEHQLwcjcffXTpA70T3NgvVSQdbv0KHWNuvcthI=rw'/>
                        <a href='#/productconfig'><button className='home-product-bottom-button'>Select</button></a>
                    </div>
                    <div className='home-product-bottom-image-box'>
                        <img className='home-product-bottom-image' src='https://lh3.googleusercontent.com/U0QWvETe2EmQVPHhUaTz0SUMHWz3dOPIWIgIOhJqt4fXRi48VMEB5C5xe6EyM5eWWpIdfcTXPxtr-hNkXPtcoQ=rw'/>
                        <a href='#/productconfig'><button className='home-product-bottom-button'>Select</button></a>
                    </div>
                    {/* <div className='home-product-bottom-image-box'>
                        <img className='home-product-bottom-image' src='http://t0.gstatic.com/images?q=tbn%3AANd9GcQniCsTAMWRqKGbea5zP03LAqkqZ9um0NZbFECgZBggPKFBeUY4gvYLrGnTXzE7NUy365ouDZc'/>
                        <button className='home-product-bottom-button'>Select</button>
                    </div> */}
                </div>
            </div>      
        </div>
    )
}

export default HomeProductPage;