import { AUTH_USER, AUTH_ERROR } from './types'
import axios from 'axios'

export const signup = (formProps, callback) => async(dispatch) => {
    try{
    const {data} = await axios.post('http://localhost:5000/signup', formProps)
    dispatch({
        type: AUTH_USER,
        payload: data.token
    })
    localStorage.setItem('token', data.token)
    callback()
    }
    catch(err) {
        dispatch({
            type: AUTH_ERROR, 
            payload: 'Email is in use'
        })
        /*dispatch({
            type: AUTH_ERROR, 
            payload: err.response.data.error
        }) */
    }
}

export const signout = () => {
    localStorage.removeItem('token')
    return { 
        type: AUTH_USER,
        payload: ''
    }
}

export const signin = (formProps, callback) => async (dispatch) => {
    try{
        const {data} = await axios.post('http://localhost:5000/signin', formProps)
        dispatch({
            type: AUTH_USER,
            payload: data.token
        })
        localStorage.setItem('token', data.token)
        callback()
        }
        catch(err) {
            dispatch({
                type: AUTH_ERROR, 
                payload: 'Invalid login credentials'
            })
        }
}