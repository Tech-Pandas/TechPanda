import React, {useState, useEffect} from 'react';

import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
import StadiaHeader from './StadiaHeader';

const StadiaSpecs = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);
    
    return (
        <div className='spec-container'>
            <HomeProductHeaderOne/>
            <StadiaHeader />

            <div className='specimg'>
                {/* <h2>What's in the box</h2> */}
                <img src='https://9to5google.com/stadia-founders-edition-requirements-and-specs-google-store/' />
            </div>
            <div className='techspecsdetails'>
                <div className='detailtitle'>
                    <h2>Tech Specs</h2>
                </div>
                </div>
                <div className='alldetailinfo'>
                <div className='detailinfo'>
                <h2>Stadia Controller</h2>
                <h4>Internal rechargeable Li-Ion battery</h4>
                <h2>Google Chromecast Ultra</h2>
                <h4>802.11ac (2.4GHz/5Ghz) 1x2 MISO Wi-Fi for high-performance streaming</h4>
                <h2>Warranty</h2>
                <h4>Lifetime PandaCare</h4>
                <img className='panda' src='https://media3.giphy.com/media/fAaBpMgGuyf96/giphy.gif' alt='gif' />
                </div>
            </div>
            <div className='inthebox'>
                <div className='inboxone'><h2>What's in the box</h2></div>
                <div className='inboxtwo'>
                    <h3>Stadia Controller (Clearly White)</h3>
                    <h3>USB-C™ to A cable</h3>
                    <h3>Power Adapter</h3>
                </div>
                <div className='inboxthree'>
                    <h3>Google Chromecast Ultra (Black)</h3>
                    <h3>Power adapter with integrated cable (required)</h3>
                </div>
            </div>
            <div className='stadiafooterpic-container'>
                <img className='stadiafooterpic' src='https://purepng.com/public/uploads/large/google-stadia-logo-3cx.png' />
            </div>
        </div>
    )
}

export default StadiaSpecs;