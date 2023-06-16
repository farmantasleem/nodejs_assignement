export const registerValidate=(req,res,next)=>{
    if(req.body&&req.body.email&&req.body.password&&req.body.name){
        next()
    }

    res.send({msg:"All Fields are Required to Register"})
}