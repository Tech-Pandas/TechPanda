import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, logout } from '../../redux/reducer';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';




function HomeProductHeaderOne(props) {

    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])

    const userLogin = () => {
        window.location.href = 'http://localhost:5000/api/login';
    };

    console.log(props.user)
    console.log(props.loggedIn)


    //------- Adding Style here --------///

    const useStyles = makeStyles({
        button: {
            display: 'block',
            // marginTop: theme.spacing(2),
        },
        none: {
            display: 'none',
        },
        formControl: {
            // margin: theme.spacing(1),
            minWidth: 120,
        },
    });

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    //-------- Style Done Here --------///

    return (
        <div id='home-product-page-header-1'>
            <img id='logo' src='https://static.thenounproject.com/png/337525-200.png' />
            <div className='cart-user-icons'>
                <div>
                    <img src='https://carlisletheacarlisletheatre.org/images/shopping-cart-icon-grey-9.jpg' className='cart-icon' />
                </div>
                {props.loggedIn ? (
                    <div>
                        <Button className={classes.button} onClick={handleOpen}>
                            <img src={props.user.user_image} alt='' className='user-image' />
                        </Button>
                        <FormControl className={classes.formControl}>
                            <Select
                                className={classes.none}
                                // labelId="demo-controlled-open-select-label"
                                // id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                            >
                                <MenuItem>
                                    <em>{props.user.user_name}</em>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={() => props.logout()}
                                    >
                                        Logout
                                    </button>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                ) : (
                        <button
                            onClick={() => userLogin()}
                        >Login</button>
                    )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = {
    getUser,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProductHeaderOne)