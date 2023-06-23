const { Usermodel }  = require("../model/User.model");

const userValidation =async(req,res,next)=>{
    const userId=req.headers?.authorization?.split(" ")[1];
    if(userId){
        const userData=await Usermodel.findOne({_id:userId});
        if(userData && userData.name?.length>0){
            req.body.userId=userId
            next()
        }else{
            res.status(403).send({msg:"User not Found"})
        }

    }else{
        res.status(403).send({msg:"User not Authenticated"})
        }
}

module.exports = {userValidation}