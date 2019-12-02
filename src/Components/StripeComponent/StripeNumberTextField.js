import React from "react";
import { CardNumberElement } from "react-stripe-elements";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";



function StripeInput(props) {
    const {
        component: Component,
        inputRef,
        'aria-invalid': notGood,
        'aria-describedby': evenWorse,
        autoComplete,
        autoFocus,
        defaultValue,
        onAnimationStart,
        name,
        readOnly,
        required,
        rows,
        onKeyDown,
        onKeyUp,
        type,
        ...other } = props;
    const elementRef = React.useRef();

    React.useImperativeHandle(inputRef, () => ({
        focus: () => elementRef.current.focus
    }));

    return (
        <Component onReady={element => (elementRef.current = element)} {...other} />
    );
}

export default function StripeNumberTextField(otherProps) {
    const classes = useStyles();

    function handleElementChange({ complete, error }) {
        if (error) {
            otherProps.setCardNumberError(error.message);
        } else {
            otherProps.setCardNumberError(null);
        }
    }

    const hasError = otherProps.cardNumberError !== null;

    return (
        <TextField
            className={classes.cardNumber}
            variant='outlined'
            label="Credit Card Number"
            error={hasError}
            helperText={hasError ? otherProps.cardNumberError || "Invalid" : ""}
            onChange={handleElementChange}
            InputLabelProps={{
                shrink: true
            }}
            InputProps={{
                inputProps: {
                    component: CardNumberElement
                },
                inputComponent: StripeInput
            }}
        />
    );
}

const useStyles = makeStyles({
    cardNumber: {
        width: '65%',
        border: '1px black solid',
    }
})