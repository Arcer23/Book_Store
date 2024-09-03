const express = require("express")
const app = express()
require("dotenv").config()
const database = require("./database")
const parser = require("body-parser")
app.use(parser.json())
const userroute = require("./routes/auth")

app.use('/store', userroute);

const port = process.env.PORT;
app.listen(port , function(){
    console.log('the server is running at the port :' ,port )
})
