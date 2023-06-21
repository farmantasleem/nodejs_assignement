 const loginValidate=(req,res,next)=>{
    if(req.body&&req.body.email&&req.body.password){
        next()
    }else{
        res.status(401).send({msg:"Email & Password Required to Login"})
    }

   
}

 module.exports = {loginValidate}