const { UserModel } = require("../../../backendUser/models/User.model")


// to register user
exports.userSignUp = async(req,res) => {
    try {
        const newUser=await UserModel.create(req.body);
        res.status(200).send({
            msg:"SignUp Success"
        })
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// to login user
exports.userLogin = (req,res) => {
    const {email,password} = req.body;
    try {

        
    } catch (error) {
        
    }
}