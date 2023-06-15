const validateTodo=(req,res,next)=>{
    if(req.body && req.body.task && req.body.task.length>3){
        next()
    }

    res.send({msg:"Validation Failed, Todo Length should be more then 3 Character"})
}

module.exports=validateTodo;