import axios from 'axios';


const initialState = {
    email: '',
    user: {},
    loggedIn: false,
    cart: []
}

const UPDATE_EMAIL = 'UPDATE_EMAIL';
const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'
const ADD_DEVICE_TO_CART = 'ADD_DEVICE_TO_CART'
const GET_CART = 'GET_CART'

export function addDeviceToCart(productSize, productColor, productStorage, pandaCare, productPrice, productName, productType, productImage, productRam, productProcessor){
    console.log(productImage)
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
            productProcessor,
            productImage
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

export const getCart = (user_id) => {
    let data = axios.get(`/api/cart/`).then(res => res.data).then(res => {
        return res
    })
    console.log(data)
    
    return {
        type: GET_CART,
        payload: data
    }
}

export const logout = () => {
    return {
      type: LOGOUT,
      payload: axios.get(`/api/logout`).then(res => console.log('delete', res)).catch(err => console.log(err))
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
            console.log(payload)            
            return {...state, cart: [...state.cart, payload]}
        default:
            return state;
    }
}