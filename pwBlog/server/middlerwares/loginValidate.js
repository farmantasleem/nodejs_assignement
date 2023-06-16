export const loginValidate=(req,res,next)=>{
    if(req.body&&req.body.email&&req.body.password){
        next()
    }

    res.send({msg:"Email & Password Required to Login"})
}