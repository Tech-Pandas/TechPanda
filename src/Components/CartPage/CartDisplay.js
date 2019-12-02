import React from 'react';
import './CartDisplay.css'

function CartDisplay(props){
    console.log(props)
    // console.log(props.productObj)

    return(
        <div className='product-info-display'>
            <img className='product-image' src={props.productObj.productImage} />
            <div className='product-specs'>  
            <p>{props.productObj.productName} </p> 
            {`(${props.productObj.productColor}, ${props.productObj.productStorage}, ${props.productObj.productSize}" display)`} 
            {props.productObj.pandaCare ? (
                <p>PandaCare</p>
            ): null}             
            
            </div>
            <div className='price-remove-div'>
                {`$${props.productObj.productPrice}`}
                <button>Remove</button>
            </div>
        </div>
    )
}

export default CartDisplay