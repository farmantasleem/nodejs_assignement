const express = require("express");
const { loginValidate } = require("../middlerwares/loginValidate");
const { Usermodel } = require("../model/User.model");
const { registerValidate } = require("../middlerwares/registerValidate");
import mongoose from "mongoose";
const userRoute = express.Router();

// route for login
userRoute.post("/login", loginValidate, async (req, res) => {
  const { email, password } = req.body;

  const userData = await Usermodel.findOne({ email });

  if (userData) {
    if (userData.password == password) {
      res.status(200).send({ msg: "Login Success", userId: userData._id });
    } else {
      res.status(401).send({ msg: "Wrong Password" });
    }
  } else {
    res.status(404).send({ msg: "No Account Associated with this email" });
  }
});


//Register User

userRoute.post("/register",registerValidate,async(req,res)=>{
    const {name,email,password} = req.body;
  
    try {
        await Usermodel.insertOne({name,email,password});
        res.status(200).send({msg:"Registed Successfully"});
    } catch (error) {
        res.status(404).send({msg:error.message});
    }
})