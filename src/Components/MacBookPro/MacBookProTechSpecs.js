import React from 'react';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
import MacBookProHeader from './MacBookProHeader';

// import "./OtherProductPages.css";

function MacBookProTechSpecs() {
    return (
        <div>
            <HomeProductHeaderOne />
            <MacBookProHeader />
            <div className='macbook-tech-specs'>
                <div className='tech-specs-div'>
                    MacBook Photo
                </div>
                <div className='tech-specs-div'>
                    Price
                </div>
                <div className='tech-specs-div'>
                    Finish
                </div>
                <div className='tech-specs-div'>
                    Display
                </div>
                <div className='tech-specs-div'>
                    Processor
                </div>
                <div className='tech-specs-div'>
                    Storage
                </div>
                <div className='tech-specs-div'>
                    Memory
                </div>
                <div className='tech-specs-div'>
                    Graphics
                </div>
                <div className='tech-specs-div'>
                    Battery and Power²
                </div>
            </div>
        </div>
    )
}

export default MacBookProTechSpecs;
