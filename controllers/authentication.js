import User from '../models/User.js'

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
            }res.status(201).json({success: true})

        })
    })    
}

export { signup }