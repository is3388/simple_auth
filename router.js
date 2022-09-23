import { signup, signin } from './controllers/authentication.js'
import passportService from './services/passport.js'
import passport from 'passport'

passportService()

// create an interceptor object to occurs in the middle between incoming
// request and protective route handlers
// use passport to authenticate user pass in jwt strategy and tell it not 
// make a cookie based session for this request by default as we use token
const requireAuth = passport.authenticate('jwt', {session: false})

const requireSignin = passport.authenticate('local', {session: false})

export default function(app) {
    app.get('/', requireAuth, function (req, res) {
        res.send({hi: 'there'})
    })
    app.post('/signup', signup)
    app.post('/signin', requireSignin, signin)
    
}