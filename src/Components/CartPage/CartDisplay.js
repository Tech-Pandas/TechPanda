import React from 'react';

function CartDisplay(props){
    console.log(props)
    console.log(props.productObj)

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
                    {props.productObj.name}
                </div>
            )}
        </div>
    )
}

export default CartDisplay