import express from 'express'
import http from 'http'
import morgan from 'morgan'
import router from './router.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv' 
dotenv.config()

connectDB()

const app = express()

// App set up
app.use(morgan('combined')) // logging incoming requests for debugging purpose
app.use(express.json()) // parsing incoming requests to JSON
// app.use(bodyParser.json({type: '*/*'}))
router(app)



// Server set up
const PORT = process.env.PORT || 5000
// create http server that knows http requests and anything comes in forward to express app
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})