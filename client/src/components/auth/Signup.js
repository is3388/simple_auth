import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { signup } from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

// handleSubmit comes with redux-form to handle that operation and formProps from whatever input values which are email and password
const Signup = ({handleSubmit}) => {
    const dispatch = useDispatch()
    const errorMessage = useSelector(state=> state.auth.errorMessage)
    const navigate = useNavigate()
    const onSubmitHandler = (formProps) => {
        //console.log(formProps)
        dispatch(signup(formProps, () => {
            navigate('/feature')
        }))
        dispatch(reset('myForm'))
    }
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} name='myForm'>
            <fieldset>
                <label>
                    Email
                </label>
                <Field name='email' type='text' component='input' autoComplete='none'/>
            </fieldset>
            <fieldset>
                <label>
                    Password
                </label>
                <Field name='password' type='password' component='input' autoComplete='none'/>
            </fieldset>
            { errorMessage && (<div>{errorMessage}</div>) }
            <button>Sign Up</button>
        </form>
    )
}

export default reduxForm({ form: 'signup' })(Signup)