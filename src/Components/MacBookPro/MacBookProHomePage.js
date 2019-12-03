import React, { Component } from 'react';
import { Parallax} from 'react-spring/renderprops-addons';
// import ReactPlayer from 'react-player';
import './MacBookPro.css';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
import MacBookProHeader from './MacBookProHeader';

// Photos Import

import MacBookProImage from '../../assets/images/MacBookPro.png';
import MacBookProSpecs from '../../assets/images/MacBookProSpecs.png';


class MacBookProHomePage extends Component {
    render() {
        return (

            <Parallax ref={ref => (this.parallax = ref)} pages={3} className='containpro'>
                <HomeProductHeaderOne />
                <MacBookProHeader />
                <div className='mac-overview'>
                    <div className='macbook-first-div'>
                        <h2>MacBook Pro</h2>
                        <h1> The best for the brightest.</h1>
                        <img src={MacBookProImage} alt='' className='macbook-image' />
                    </div>
                    <div className='macbook-description'>
                        <div className='macbook-text'>
                            Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. With an immersive 16-inch Retina display, superfast processors, next-generation graphics, the largest battery capacity ever in a MacBook Pro, a new Magic Keyboard, and massive storage, it’s the ultimate pro notebook for the ultimate user.
                        </div>
                    </div>
                    <div>
                        <img src={MacBookProSpecs} alt='' className='macbook-image'/>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default MacBookProHomePage;