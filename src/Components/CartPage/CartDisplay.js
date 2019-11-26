import React from 'react';

function CartDisplay(props){
    console.log(props)

    return(
        <div>
            {props.productObj.productName ? (
                <div>
                    hit first condition
                    {props.productObj.productName}
                </div>
            ) : (
                <div>
                    hitting second condition
                    {props.productObj.product_name}
                </div>
            )}
        </div>
    )
}

export default CartDisplay