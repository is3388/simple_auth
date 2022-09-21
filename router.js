import { signup } from './controllers/authentication.js'

export default function(app) {
    app.post('/signup', signup)
    
}