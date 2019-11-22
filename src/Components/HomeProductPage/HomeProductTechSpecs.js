import React from 'react';
import "./HomeProductTechSpecs.css"
import HomeProductHeaderOne from './HomeProductHeaderOne';
import HomeProductHeaderTwo from './HomeProductHeaderTwo';

const HomeProductTechSpecs = () => {
    return (
        <div>
            <HomeProductHeaderOne/>
            <HomeProductHeaderTwo/>

            <div className='techspec'>
                <h1>Tech Specs</h1>
            </div>
        </div>
    )
}

export default HomeProductTechSpecs;