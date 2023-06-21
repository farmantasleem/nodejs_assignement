const registerValidate=(req,res,next)=>{
    if(req.body&&req.body.email&&req.body.password&&req.body.name){
        next()
    }else{
        res.send({msg:"All Fields are Required to Register"})

    }

}


module.exports = {registerValidate}