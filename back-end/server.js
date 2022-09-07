const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000

const app = express()

app.use("/api/program", require("./routes/programRoute"))

app.listen(port,() => console.log(`im listening on port - ${port}`))
