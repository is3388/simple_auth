import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { signin } from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

// handleSubmit comes with redux-form to handle that operation and formProps from whatever input values which are email and password
const Signin = ({handleSubmit}) => {
    const dispatch = useDispatch()
    const errorMessage = useSelector(state=> state.auth.errorMessage)
    const navigate = useNavigate()
    const onSubmitHandler = (formProps) => {
        //console.log(formProps)
        dispatch(signin(formProps, () => {
            navigate('/feature')
        }))
    }
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
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
            <div>{errorMessage}</div>
            <button>Sign In</button>
        </form>
    )
}

export default reduxForm({ form: 'signin' })(Signin)