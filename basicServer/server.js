const express = require("express");

const app=express();
const PORT=8081


// home route
app.get("/",(req,res)=>{
    res.send({msg:"I'm Homepage"})
})

// about route
app.get("/about",(req,res)=>{
    res.send({msg:"I'm Aboutpage"})
})

// contact route
app.get("/about",(req,res)=>{
    res.send({email:"support@pwskills.com"})
})
app.listen(PORT,()=>{
    console.log(`Server Started On Port No ${PORT}`)
})