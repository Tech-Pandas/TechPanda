import React from 'react';

function CartDisplay(props){
    console.log(props)
    console.log(props.productObj)

    return(
        <div>
            {props.productObj.productName}
        </div>
    )
}

export default CartDisplay