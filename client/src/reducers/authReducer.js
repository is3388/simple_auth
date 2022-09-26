// authenticated as it is tied to JWT to determine if user is signed in
// errorMessage is not empty if sign in with invalid email/password or sign up with email already exists
const INITIAL_STATE = { authenticated: '',
                        errorMessage: ''}

const authReducer = (state=INITIAL_STATE, action) => {
    return state
}

export default authReducer