import express from 'express'
import http from 'http'
import morgan from 'morgan'
import router from './router.js'
import connectDB from './config/db.js'
import passport from 'passport'
import cors from 'cors'
import dotenv from 'dotenv' 
dotenv.config()

connectDB()

const app = express()

// App set up
app.use(morgan('combined')) // logging incoming requests for debugging purpose
app.use(cors()) // allow different domain/sub domain/port to share resources (cross orgin resource sharing) allow request coming from anywhere
app.use(express.urlencoded({extended: true}))
app.use(express.json()) // parsing incoming requests to JSON
// app.use(bodyParser.json({type: '*/*'}))
app.use(passport.initialize())
router(app)



// Server set up
const PORT = process.env.PORT || 5000
// create http server that knows http requests and anything comes in forward to express app
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})