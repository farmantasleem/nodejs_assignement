const express = require("express");
const { loginValidate } = require("../middlerwares/loginValidate");
const { Usermodel } = require("../model/User.model");
const { registerValidate } = require("../middlerwares/registerValidate");
const mongoose = require("mongoose");
const { Blogmodel } = require("../model/Blog.model");
const { blogValidate } = require("../middlerwares/blogValidate");
const blogRoute = express.Router();
const {AuthenticateAuthor} =require("../middlerwares/authenticateAuthor")


// create/add blog

blogRoute.post("/add",blogValidate,async(req,res)=>{

    try {
        const newBlog = await new Blogmodel({...req.body});
        await newBlog.save()
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
})

// get all blogs

blogRoute.get("/",async(req,res)=>{
    try{
        const blogData= await Blogmodel.find();
        res.status(200).send({data:blogData})


    }
    catch(err){
        res.status(501).send({msg:err.message})
    }
})

// delete blog

blogRoute.delete("/:id",AuthenticateAuthor,async(req,res)=>{
        const blogId = req.params.id;
        const userId=req.headers.authorization.split(" ")[1];

        try{

        }catch(err){
            res.status(501).send({msg:err.message})
        }

})




//delete blog


//update blog

