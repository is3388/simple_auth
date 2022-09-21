import mongoose from 'mongoose'

const connectDB = async () =>
{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL,  {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
        /* const connection = mongoose.connection;
        connection.on("connected", function() {
        console.log("connected to db");
        })*/
    }
    catch(error)
    {
        console.error(`Error: ${error.message}`)
        process.exit(1)
        // or use return to stop the execution return console.error(`Error: ${error.message}`.red.underline.bold)
    }
}

export default connectDB