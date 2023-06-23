const express = require("express");
const { loginValidate } = require("../middlerwares/loginValidate");
const { Usermodel } = require("../model/User.model");
const { registerValidate } = require("../middlerwares/registerValidate");
const mongoose = require("mongoose");
const { Blogmodel } = require("../model/Blog.model");
const { blogValidate } = require("../middlerwares/blogValidate");
const blogRoute = express.Router();
const {AuthenticateAuthor} =require("../middlerwares/authenticateAuthor")
const {userValidation} = require("../middlerwares/userValidation")


// create/add blog

blogRoute.post("/add",[blogValidate,userValidation],async(req,res)=>{

    try {
        const newBlog = await new Blogmodel({...req.body});
        await newBlog.save()
        res.status(200).send({msg:"Blog Added Successfully"})
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
            await Blogmodel.findOneAndDelete({_id:blogId})
            res.status(200).send({msg:"Blog Deleted Successfully"})

        }catch(err){
            res.status(501).send({msg:err.message})
        }

})


//update blog

blogRoute.patch("/:id",AuthenticateAuthor,async(req,res)=>{
    const blogId = req.params.id;
    const userId=req.headers?.authorization.split(" ")[1];

    try{
        await Blogmodel.findOneAndUpdate({_id:blogId},{...req.body})
        res.status(200).send({msg:"Blog Update Successfully"})
    }catch(err){
        res.status(501).send({msg:err.message})
    }

})


// get single blog by id;

blogRoute.get("/:id",async(req,res)=>{
    const id=req.params.id;

    try {
        const oneBlog=await Blogmodel.findOne({_id:id});
        const userData=await Usermodel.findOne({_id:oneBlog.author})
        res.status(200).send({data:oneBlog,author:userData.name})
        
    } catch (error) {
        res.status(404).send({msg:error.message})
    }
})
module.exports ={blogRoute}