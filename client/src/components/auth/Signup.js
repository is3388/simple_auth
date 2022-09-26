import React from 'react'
import { reduxForm, Field } from 'redux-form'

// handleSubmit comes with redux-form to handle that operation and formProps from whatever input values which are email and password
const Signup = ({handleSubmit}) => {
    const onSubmitHandler = (formProps) => {
        console.log(formProps)
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
            <button>Sign Up</button>
        </form>
    )
}

export default reduxForm({ form: 'signup' })(Signup)