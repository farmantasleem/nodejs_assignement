const mongoose=require("mongoose");

const blogSchema=mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String,required:true,unique:true},
    content:{type:String,required:true},
    author:{type:mongoose.Types.ObjectId,ref:"user",required:true}   

})

const Blogmodel=mongoose.model("blog",blogSchema)

module.exports={Blogmodel}