const express = require("express");
const { loginValidate } = require("../middlerwares/loginValidate");
const { Usermodel } = require("../model/User.model");
const { registerValidate } = require("../middlerwares/registerValidate");
const mongoose = require("mongoose");
const userRoute = express.Router();

// route for login
userRoute.post("/login", loginValidate, async (req, res) => {
  const { email, password } = req.body;

  const userData = await Usermodel.findOne({ email })||{};

  if (userData&&userData.password?.length>0) {
    if (userData.password == password) {
      res.status(200).send({ msg: "Login Success", userId: userData._id });
    } else  {
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
       const data= await new Usermodel({name,email,password});
       await data.save()
        res.status(200).send({msg:"Registed Successfully"});
    } catch (error) {
        res.status(404).send({msg:error.message});
    }
})

module.exports = userRoute;