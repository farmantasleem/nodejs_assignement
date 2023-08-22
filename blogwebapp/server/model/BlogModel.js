const { default: mongoose } = require("mongoose");



const blogSchema = mongoose.Schema({
    title: { 
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    content : {
        type:String,
        required:true
    },
    img : {
         type:String,
         required:true
    }

})

const BlogModel = mongoose.model("blog",blogSchema) // model created


module.exports = {BlogModel}