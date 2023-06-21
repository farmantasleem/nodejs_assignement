const blogValidate=(req,res,next)=>{
        const {title,desc,img,content,author} = req.body;

        if(req.body&&req.body.title && req.body.desc && req.body.img && req.body.content && req.body.author){
            next()
        }else{
            res.status(401).send({msg:"All Input Fields are required"})
        }
}


module.exports ={blogValidate}