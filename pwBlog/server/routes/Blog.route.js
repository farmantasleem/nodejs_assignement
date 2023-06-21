const express = require("express");
const { loginValidate } = require("../middlerwares/loginValidate");
const { Usermodel } = require("../model/User.model");
const { registerValidate } = require("../middlerwares/registerValidate");
const mongoose = require("mongoose");
const { Blogmodel } = require("../model/Blog.model");
const blogRoute = express.Router();


// create/add blog

blogRoute.post("/add",async(req,res)=>{
    
})

// get


//delete blog


//update blog

