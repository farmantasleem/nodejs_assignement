exports.signupValidator = (req,res,next) =>{
    const {name,email,password,bio,userName} = req.body;

    if(req.body && name && email && password && bio && userName){
        next()
    }else{
        res.status(404).send({msg:"all Input Fields are required"})
    }
}