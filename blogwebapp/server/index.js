const express = require("express");
const { blogRoute } = require("./routes/blogRoute");
const { connectDatabase } = require("./config/dbConnection");
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(require("cors")())

app.get("/",(req,res)=>{
    res.status(200).send({msg:"Server is running..!"})
})

app.use("/blog",blogRoute)
// connect to db

connectDatabase()
app.listen(8081, ()=>{
    console.log("Server started on PORT NO : ",8081)
})

