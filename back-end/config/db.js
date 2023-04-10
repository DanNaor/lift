const mongoose = require("mongoose")


const connectDB= async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://dan:yrah4028@liftcluster.gcftmbw.mongodb.net/?retryWrites=true&w=majority")

        console.log(`MongoDB connected :${conn.connection.host}`.cyan.underline)
    }
    catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDB