const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const colors = require("colors")
const app = express()
const {errorHandler} =require("./middleware/errorMiddleware")
const connectDB =require("./config/db")
const bp = require('body-parser')
connectDB()


//@desc middleware for parsing incoming requests with JSON payloads 
app.use(bp.json())

//@desc middleware for parsing incoming requests with urlencoded payloads
app.use(bp.urlencoded({ extended: true }))

app.use("/api/program", require("./routes/programRoute"))
app.use("/api/programHistory",require('./routes/programHistoryRoute'))

app.use(errorHandler)

app.listen(port,() => console.log(`server listening on port - ${port}`.green.underline))
