import User from '../models/User.js'
import jwt from 'jwt-simple'
import dotenv from 'dotenv' 
dotenv.config()

function tokenForUser(user) {
    const timestamp = new Date().getTime()
    // sub is jwt property called subject meaning which token belongs to
    // first argument is the payload
    return jwt.encode({ sub: user.id, iat: timestamp}, process.env.JWT_SECRET)
}

const signup = function (req, res, next) {
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(400).send({error: 'You must provide email and password'})
    }
    
    // use callback function instead of async await
    // err for error, existingUser can be null or an object
    User.findOne({email}, function (err, existingUser) {
        if (err) {
            return next(err)
        }

        if (existingUser) {
            return res.status(400).send({error: 'User already exists'})
        }
        const user = new User ({
            email: email,
            password: password
        })
        user.save(function (err) {
            if (err) {
                return next(err)
            }res.status(201).json({token: tokenForUser(user)})

        })
    })    
}

const signin = function (req, res, next) {
    // passport send back req.user via middleware requireSignin
    res.send({token: tokenForUser(req.user)})
}

export { signup, signin }