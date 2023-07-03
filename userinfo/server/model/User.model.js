const mongoose = require("mongoose");


const userSchema  = mongoose.schema({
        name:{
            type:String,
            required:true,
        },
        email : {
            type:String,
            required:true
        },
        password : {
            type:String,
            required:true,
            select:false
        },
        bio : {
            type:String,
            required:true
        },
        userName : {
            type:String,
            unique:true
        }
})

const UserModel = mongoose.model("user",userSchema)