const express = require("express");

const app=express();
const PORT=8081

//get random Number
app.get("/random",(req,res)=>{
    const randomNumber=Math.floor(Math.random() * 100)  // generating Number
    res.send({random:randomNumber})  // sending generated number
})

app.listen(PORT,()=>{
    console.log(`Server Started On Port No ${PORT}`)
})