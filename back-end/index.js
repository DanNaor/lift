const express = require("express")
const dotenv = require("dotenv").config()
const port =  5000
const colors = require("colors")
const app = express()
const {errorHandler} =require("./middleware/errorMiddleware")
// const connectDB =require("./config/db")
const bp = require('body-parser')
const functions = require("firebase-functions")
// connectDB()


//@desc middleware for parsing incoming requests with JSON payloads 
app.use(bp.json())

//@desc middleware for parsing incoming requests with urlencoded payloads
app.use(bp.urlencoded({ extended: true }))

app.use("/program", require("./routes/programRoute"))
app.use("/programHistory",require('./routes/programHistoryRoute'))

app.use(errorHandler)

app.listen(port,() => console.log(`server listening on port - ${port}`.green.underline))

exports.api=functions.https.onRequest(app)