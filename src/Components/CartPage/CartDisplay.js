import React from 'react';
import {connect} from 'react-redux';
import {removeDeviceFromCart} from '../../redux/reducer';
import './CartDisplay.css'

function CartDisplay(props){
    console.log(props)
    // console.log(props.productObj)

    const removeProduct = (productId) => {
        props.removeDeviceFromCart(productId)
        props.forceUpdate()
    }

    console.log(props)

    return(
        <div className='product-info-display'>
            <img className='product-image' src={props.productObj.productImage} alt=''/>

            {props.productObj.productColor ? (
                <div className='product-specs'>  
                <p>{props.productObj.productName} </p> 
                {`(${props.productObj.productColor}, ${props.productObj.productStorage}, ${props.productObj.productSize}" display)`} 
                {props.productObj.pandaCare ? (
                    <p>PandaCare</p>
                ): null}       
            </div>
            ) : (
                <div>
                    <p>{props.productObj.productName} </p> 
                </div>
            )}

            

            <div className='price-remove-div'>
                {`$${props.productObj.productPrice}`}
                <button id='remove-button' onClick={() => removeProduct(props.productId)}>Remove</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeDeviceFromCart
}

export default connect(null, mapDispatchToProps)(CartDisplay)