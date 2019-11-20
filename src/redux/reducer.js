const initialState = {
    email: '',
}

const UPDATE_EMAIL = 'UPDATE_EMAIL';

export function updateEmail(emailObj){
    return{
        type: UPDATE_EMAIL,
        payload: emailObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_EMAIL:
            let email = payload;
            return {...state, email};

        default:
            return state;
    }
}