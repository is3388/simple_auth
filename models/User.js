import mongoose from "mongoose"
import validator from 'validator'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        async validate(value)
        {
            if (!validator.isEmail(value))
            {
                throw new Error('Email is invalid')
            }
        }
        
        }, 
    password: {
        type: String,
        required: [true, 'Please enter a password']
    }
})
// create a model class called User and user is collection name
const User = mongoose.model('user', userSchema)

export default User