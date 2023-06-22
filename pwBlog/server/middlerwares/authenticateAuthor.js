const { Blogmodel } = require("../model/Blog.model");
const { Usermodel } = require("../model/User.model");

const AuthenticateAuthor = async(req,res,next) => {
    const blogId=req.params?.id;
    const userId=req.headers?.authorization?.split(" ")[1];
    if(userId&&blogId){
        const userData=await Usermodel.findOne({_id:userId});
        const blogData=await Blogmodel.findOne({_id:blogId});
        if(userData&&blogData&&blogData?.author==userId){
            next()
        }else{
            res.status(301).send({msg:"User not authenticated to Perform this action"})
        }
    }else{
        res.status(301).send({msg:"Not Authenticated to perform this action"})
    }
    

}


module.exports= {AuthenticateAuthor}