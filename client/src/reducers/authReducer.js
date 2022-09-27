// authenticated as it is tied to JWT to determine if user is signed in

import { AUTH_USER, AUTH_ERROR } from "../actions/types"

// errorMessage is not empty if sign in with invalid email/password or sign up with email already exists
const INITIAL_STATE = { authenticated: localStorage.getItem('token'),
                        errorMessage: ''}

const authReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTH_USER:
            return {...state, authenticated: action.payload} 
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload}  
        default:
            return state
    }
    
}

export default authReducer