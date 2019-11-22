import axios from 'axios';


const initialState = {
    email: '',
    user: {},
    loggedIn: false,
    cart: {
        productSize: null,
        productColor: null, 
        productStorage: null, 
        pandaCare: null,
        productPrice: null,
        productType: null,
        productName: null,
        productRam: null,
        productProcessor: null
    }
}

const UPDATE_EMAIL = 'UPDATE_EMAIL';
const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'
const ADD_DEVICE_TO_CART = 'ADD_DEVICE_TO_CART'

export function addDeviceToCart(productSize, productColor, productStorage, pandaCare, productPrice, productName, productType, productRam, productProcessor){
    return{
        type: ADD_DEVICE_TO_CART,
        payload: {
            productSize,
            productColor, 
            productStorage, 
            pandaCare,
            productPrice,
            productType,
            productName,
            productRam,
            productProcessor
        }
    }
}

export function updateEmail(emailObj){
    return{
        type: UPDATE_EMAIL,
        payload: emailObj
    }
}

export const getUser = () => {
    return {
      type: GET_USER,
      payload: axios.get("/api/getUser").then(res => res.data)
    };
};

export const logout = () => {
    return {
      type: LOGOUT,
      payload: axios.delete(`/api/logout`).then(res => console.log('delete', res)).catch(err => console.log(err))
    };
};

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER + "_PENDING":
            return { ...state };
        case GET_USER + "_FULFILLED":
            return { ...state, user: payload, loggedIn: true };
        case LOGOUT + "_FULFILLED":
            return { user: {}, users: {}, loggedIn: false };
        case UPDATE_EMAIL:
            let email = payload;
            return {...state, email};
        case ADD_DEVICE_TO_CART:
            return {...state, cart: payload}
        default:
            return state;
    }
}