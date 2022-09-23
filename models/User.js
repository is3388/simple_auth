import mongoose from "mongoose"
import validator from 'validator'
import bcrypt from 'bcrypt-nodejs'

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
 
// before saving a user
userSchema.pre('save', function(next) {
    const user = this // get access to user model for each user instance
    if(!user.isModified('password'))
    {
        next() // move on to the next middleware if not update password
    }
    bcrypt.genSalt(10, function(err, salt) { // salt is a stream of randomly generated string
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) {
                return next(err)
            }
            user.password = hash
            next()
        })
    })
})

/* to generate a jwt-simple token
userSchema.methods.generateJwt = function () {
 const user = this;
 const timestamp = new Date().getTime();
 
 return jwt.encode({ sub: user.id, iat: timestamp }, config.jwt.secret);
}; */

userSchema.methods.comparePassword = function (submittedPassword, callback) {
    bcrypt.compare(submittedPassword, this.password, function(err, isMatch) {
        if (err) {
            return callback(err)
        }
        callback(null, isMatch) // isMatch is true or false
    })
}

// create a model class called User and user is collection name
const User = mongoose.model('user', userSchema)

export default User