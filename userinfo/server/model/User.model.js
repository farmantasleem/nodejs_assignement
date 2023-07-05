const mongoose = require("mongoose");
const bcrypt= require("bcryptjs")

const userSchema  = new  mongoose.Schema({
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
           required:true
        }
})

// method to generate token 
userSchema.methods={
    jwtToken(){
        return JWT.sign({id:this._id,email:this.email},process.env.SECRET,{
            expiresIN:'24h'
        })
    }
}

// to hash password before saving it
userSchema.pre("save",async function(next){
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12); //hashing password
    return next();
})
const UserModel = mongoose.model("user",userSchema)


module.exports = {UserModel}