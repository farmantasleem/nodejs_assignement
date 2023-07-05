const express = require("express");
require("dotenv").config()
const connectDatabase = require("./config/db");
const { userRoute } = require("./routes/user.route");

const app = express();

app.use(express.json())
app.use("/",userRoute)

app.listen(process.env.PORT,async()=>{
  connectDatabase()
    console.log("Server Starting on PORT :",process.env.PORT)
})