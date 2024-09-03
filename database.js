const mongoose = require("mongoose")
require("dotenv").config()
const link = process.env.MONGO_URI;
mongoose.connect(link)
const database = mongoose.connection;

database.on('connected' , () =>{
    console.log("database server has been connected")
})

database.on('disconnected', () =>{
    console.log("database server has disconnected")
})

database.on("error",()=>{
    console.log("error while connecting to the database")
})

module.exports = database;