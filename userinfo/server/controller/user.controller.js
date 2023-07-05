const { UserModel } = require("../model/User.model")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")

// to register user
exports.userSignUp = async(req,res) => {
    try {
        const newUser=await UserModel.create(req.body);
        res.status(200).send({
            msg:"SignUp Success"
        })
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// to login user
exports.userLogin = async(req,res) => {
    const {email,password} = req.body;
    try {
        const getuserData=await UserModel.findOne({email}).select("+password");
        if(getuserData && getuserData.email ){
            const result= await bcrypt.compare(password,getuserData.password)
            res.status(200).send({msg:"Great"})
        }else{  
            res.status(404).send({msg:"No Account Found Associated with this email"})
        }

        
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}