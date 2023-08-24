// get blog

const { BlogModel } = require("../model/BlogModel");

const getBlog = async(req,res) => { 
   try {
        const getAllBlog= await BlogModel.find();
        res.status(200).send({msg:"Data Fetched Successfully",data:getAllBlog})
   } catch (error) {
    res.status(501).send({msg:error.message})
   }
}


// create a blog 

const createBlog =async(req,res) => { 
    const  {title,description,content,img} = req.body || {};
    if(!title || !description || !content || !img) { 
        return res.status(300).send({msg:"All input fields are required"})
    }

    try {
        const newBlog= await BlogModel(req.body)
        await newBlog.save();
        res.status(200).send({msg:"Blog Created Successfully",data:newBlog})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// get single blog

const getSingleBlog = async(req,res) => {
    const blogId = req.params.blogID

    try {
        console.log(blogId)
        const getData = await BlogModel.findOne({_id:blogId})
        if(getData){
            res.status(200).send(getData)
        }else{
            res.status(404).send({msg:"Blog not Found"})
        }
    } catch (error) {
        res.status(501).send({msg:"Invalid Id, Blog could not Found"})

    }
}

const deleteBlog =async(req,res)=>{
    const blogId = req.params.blogID

    try {
        console.log(blogId)
        const getData = await BlogModel.deleteOne({_id:blogId})
        const updatedData = await BlogModel.find()
        if(getData){
            res.status(200).send({msg:"Blog has been deleted",updatedData})
        }else{
            res.status(404).send({msg:"Blog not Found"})
        }
    } catch (error) {
        res.status(501).send({msg:"Invalid Id, Blog could not Found"})

    }
}

module.exports =  { getBlog,createBlog,getSingleBlog,deleteBlog}