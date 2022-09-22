import passport from 'passport'
import User from '../models/User.js'
import { Strategy, ExtractJwt } from 'passport-jwt'

// to authenticate user (log in) before forwarding to protective routes

// set up options for JWT Strategy - strategy is passport plugin for authenticating a user
// tell passport to look at request header to find the key
const passportService = () => {
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    //jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: process.env.JWT_SECRET
}

// create JWT Strategy
// the function is called whenever user is authenticated with token
// payload is the user id and the timestamp - try to decode the token
// we need to call done which is callback to signal if authentication success or not
const jwtLogin = new Strategy(jwtOptions, function(payload, done) {
    // see if the user id in the payload exists in database
    // if it does, call done with that user object - valid 
    // otherwise call doe without user object - invalid
    User.findById(payload.sub, function(err, user) {
        if (err) {
            return done(err, false) // err is whatever error, false refers to user object
        }
        if (user) {
            done(null, user)
        }
        else { // cannot find the user
             done(null, false)
        }
    })

})

// tell passport to use this strategy
passport.use(jwtLogin)
}

export default passportService