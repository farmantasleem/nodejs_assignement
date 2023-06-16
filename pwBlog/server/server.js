const express=require("express");
const cors=require("cors");     
const connectDatabase = require("./config/connection");
require("dotenv").config()  
const app=express();       
app.use(cors())     
app.use(express.json())

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    connectDatabase()
    console.log("Server Started Successfully")
})
