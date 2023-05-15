const mongoose = require("mongoose")


const connectDB= async()=>{
    try{
        console.log(`connecting...`.cyan.underline)
        mongoose.set('debug', true);
        const URI="mongodb+srv://dan:8809349@liftcluster.uotnzhn.mongodb.net/?retryWrites=true&w=majority"
        const conn = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log(`MongoDB connected :${conn.connection.host}`.cyan.underline)
    }
    catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDB