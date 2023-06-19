const express = require("express");

const app=express();
const PORT=8081

let counter=0

// counter increment
app.get("/increment",(req,res)=>{
    counter++
    res.send({counter})  // sending incremented number
})

// decrement counter
app.get("/decrement",(req,res)=>{
    counter--
    res.send({counter})  // sending decremented number
})

// counter

app.get("/",(req,res)=>{
    res.send({counter})  // send counter
})


app.listen(PORT,()=>{
    console.log(`Server Started On Port No ${PORT}`)
})