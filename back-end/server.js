const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const colors = require("colors")
const app = express()
const {errorHandler} =require("./middleware/errorMiddleware")
//@desc middleware for parsing incoming requests with JSON payloads 
app.use(express.json())

//@desc middleware for parsing incoming requests with urlencoded payloads
app.use(express.urlencoded({extended:false}))

app.use("/api/program", require("./routes/programRoute"))

app.use(errorHandler)

app.listen(port,() => console.log(`server listening on port - ${port}`.green.underline))
