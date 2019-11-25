import React from "react";
import { CardCVCElement } from "react-stripe-elements";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core';



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

export default function StripeCVCTextField(otherProps) {
    const classes = useStyles();

    function handleElementChange({ complete, error }) {
        if (error) {
            otherProps.setCardCVCError(error.message);
        } else {
            otherProps.setCardCVCError(null);
        }
    }

    const hasError = otherProps.cardCVCError !== null;

    return (
        <TextField
            className={classes.cvc}
            variant='outlined'
            label="CVC"
            error={hasError}
            helperText={hasError ? otherProps.cardCVCError || "Invalid" : ""}
            onChange={handleElementChange}
            InputLabelProps={{
                shrink: true
            }}
            InputProps={{
                inputProps: {
                    component: CardCVCElement
                },
                inputComponent: StripeInput
            }}
        />
    );
}

const useStyles = makeStyles({
    cvc: {
        width: '20%'
    }
})