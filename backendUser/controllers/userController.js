const { UserModel } = require("../models/User.model")


// to get all user data
exports.getUser=async(req,res)=>{
   try {
    const allUserData = await UserModel.find()
    res.status(200).send({data:"User Data",data:allUserData})
   } catch (error) {
    res.status(401).send({msg:error.message})
   }

}

// to register user 

exports.registerUser=async(req,res)=>{
    const {name,email, password} = req.body;
    try {
        await UserModel.create({...req.body})  // creating a document in database
        res.status(200).send({msg:"User Registered Successfully"})
        
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// to login user 

exports.loginUser = async(req,res)=>{
    
}