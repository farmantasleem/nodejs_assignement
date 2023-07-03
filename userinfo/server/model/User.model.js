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

// method to generate token 
userSchema.methods={
    jwtToken(){
        return JWT.sign({id:this._id,email:this.email},process.env.SECRET,{
            expiresIN:'24h'
        })
    }
}

// to hash password before saving it
userSchema.pre("save",async(next)=>{
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10); //hashing password
    return next();
})
const UserModel = mongoose.model("user",userSchema)