const express=require("express");
const cors=require("cors");     
const connectDatabase = require("./config/connection");
require("dotenv").config()  
const app=express();       
app.use(cors())     
const userRoute = require("./routes/User.route")
app.use(express.json())

const PORT = process.env.PORT;

//user route
app.use("/user",userRoute)
app.listen(PORT,()=>{
    connectDatabase()
    console.log("Server Started Successfully")
})
