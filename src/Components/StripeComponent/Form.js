import React, { useEffect, useState } from 'react';

import { injectStripe, CardElement, ReactStripeElements } from 'react-stripe-elements';

import StripeNumberTextField from '../StripeComponent/StripeNumberTextField';
import StripeExpiryTextField from '../StripeComponent/StripeExpiryTextField';
import StripeCVCTextField from '../StripeComponent/StripeCVCTextField';




function Form() {

    const [name, setName] = useState('')

    return(
        <div>
            Form
            <form>
                <label>Name</label>
                <input 
                    type='text'
                    className='input-group' 
                    value={name}
                    onChange={(e) => setName({ name: e.target.value})} 
                />
            </form>
        </div>
    )
}

export default (injectStripe(Form));