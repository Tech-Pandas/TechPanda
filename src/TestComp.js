import React, {useState, useEffect} from 'react';
import TestData from './dummydata.json';

function TestComp() {
    return(
        <div>
            {TestData.type}
            <img src={TestData.image_2} />
        </div>
    )
}

export default TestComp;