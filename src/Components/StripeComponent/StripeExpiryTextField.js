import React from "react";
import { CardExpiryElement } from "react-stripe-elements";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';



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

export default function StripeExpiryTextField(otherProps) {
    const classes = useStyles();

    function handleElementChange({ complete, error }) {
        if (error) {
            otherProps.setCardExpiryError(error.message);
        } else {
            otherProps.setCardExpiryError(null);
        }
    }

    const hasError = otherProps.cardExpiryError !== null;

    return (
        <TextField
            className={classes.expirationDate}
            variant='outlined'
            label="Expiration Date"
            error={hasError}
            helperText={hasError ? otherProps.cardExpiryError || "Invalid" : ""}
            onChange={handleElementChange}
            InputLabelProps={{
                shrink: true
            }}
            InputProps={{
                inputProps: {
                    component: CardExpiryElement
                },
                inputComponent: StripeInput
            }}
        />
    );
}

const useStyles = makeStyles({
    expirationDate: {
        width: '36%'
    }
})