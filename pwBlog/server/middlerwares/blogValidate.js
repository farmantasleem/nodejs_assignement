const blogValidate=(req,res,next)=>{
        const {title,desc,img,content} = req.body;

        if(req.body&&req.body.title && req.body.desc && req.body.img && req.body.content){
            next()
        }else{
            res.status(401).send({msg:"All Input Fields are required"})
        }
}


module.exports ={blogValidate}