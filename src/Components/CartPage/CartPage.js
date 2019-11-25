// This component will display the items on the cart, as well as the checkout options. It will also hold the functions to send the cart to the database to be stored there, as well as to check if there are any saved carts for the current user(if any) and load them. 

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer'
import axios from 'axios';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';

// Style //

import './CartPage.css';


//-----Stripe Import----//

import { injectStripe } from 'react-stripe-elements';

import StripeNumberTextField from '../StripeComponent/StripeNumberTextField';
import StripeExpiryTextField from '../StripeComponent/StripeExpiryTextField';
import StripeCVCTextField from '../StripeComponent/StripeCVCTextField';



function CartPage(props) {
    const [productId, setProductId] = useState(0)
    const [cart, setCart] = useState({})


    //----Stripe-----//
    const [otherDonation, setOtherDonation] = useState('');
    const [selectedDonation, setSelectedDonation] = useState('');
    const [cardNumberError, setCardNumberError] = useState(null);
    const [cardExpiryError, setCardExpiryError] = useState(null);
    const [cardCVCError, setCardCVCError] = useState(null);
    const [postalCode, setPostalCode] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    const submit = async (ev) => {
        // Logic for checking if form has been filled out correctly
        if (cardNumberError || cardExpiryError || cardCVCError || postalCode.length !== 5) {
            setDialogMessage('Please make sure that you have correctly filled out the required credit/debit card information.')
            setDialogOpen(true);
            return;
        }

        if (!otherDonation && !selectedDonation) {
            setDialogMessage('No donation amount indicated.')
            setDialogOpen(true);
            return;
        }

        if (!loading) {
            setLoading(true);
        }

        let chargeAmount;

        if (!otherDonation) {
            chargeAmount = selectedDonation;
        } else {
            chargeAmount = otherDonation
        }

        let stripeCustomerId = props.user.stripe_customer_id;
        if (props.user.user_id) {
            if (!props.user.stripe_customer_id) {
                const body = {
                    address: {
                        line1: `${props.user.address ? props.user.address : ''}`,
                        city: `${props.user.city ? props.user.city : ''}`,
                        country: `${props.user.country ? props.user.country : ''}`,
                        postal_code: `${props.user.zip ? props.user.zip : ''}`,
                        state: `${props.user.state ? props.user.state : ''}`,
                    },
                    description: 'Donor',
                    email: props.user.email,
                    name: `${props.user.first_name}${props.user.middle_initial ? ` ${props.user.middle_initial}` : ''} ${props.user.last_name}`,
                    phone: props.user.phone_number
                }

                await axios.post('/customer/create', body)
                    .then(res => {
                        stripeCustomerId = res.data.id
                        axios.put(`/api/donor/${props.user.user_id}`, { stripeCustomerId })
                            .then(res => {
                                // console.log(res);
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            }
        }

        let name = 'Anonymous Donor';

        if (stripeCustomerId) {
            name = `${props.user.first_name} ${props.user.last_name}`;
        }

        let token = await props.stripe.createToken({ type: "card", name: name })

        const body = {
            amount: +chargeAmount * 100,
            currency: 'usd',
            description: props.donee.donee_id ? `Donation to ${props.donee.first_name} ${props.donee.last_name} from ${name}` : 'Donation to Resol',
            source: token.token.id,
            // customer: stripeCustomerId won't work unless an id is attached at time of tokenization and in order for the token to work, it has to be a payment method that is attached to the customer id
        }

        const date = new Date();

        axios.post("/charge/create", body)
            .then(res => {
                setLoading(false);
                setSuccess(true);
            })
            .catch(err => {
                setError(true);
            })
    }

    //-----EndStripe-----//


    useEffect(() => {
        if (!props.user.loggedIn) {
            props.getUser();
        }
    }, [])


    // const {productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor} = props.cart
    // useEffect(() => {
    //     axios.post('/api/productid', {productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor})
    //     .then(res => {
    //         setProductId(res.data)
    //     })
    // }, [])

    useEffect(() => {
        // console.log(props.user.user_id)
        // console.log(props)
        // console.log(props, productId)
        axios.get(`/api/cart/${props.user.resuser_id}`)
            .then(res => {
                console.log(res)
                setCart(res.data)
            })
    }, [])


    console.log(props)
    console.log(cart)


    return (
        <div>
            <HomeProductHeaderOne />
            CartPage
            <div className='checkout'>
                <StripeNumberTextField cardNumberError={cardNumberError} setCardNumberError={setCardNumberError} />
                <StripeExpiryTextField cardExpiryError={cardExpiryError} setCardExpiryError={setCardExpiryError} />
                <StripeCVCTextField cardCVCError={cardCVCError} setCardCVCError={setCardCVCError} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CartPage));