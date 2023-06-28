const express =  require("express");
const { getUser, registerUser } = require("../controllers/userController");

const userRoute = express.Router();


userRoute.get("/",getUser)

userRoute.post("/register",registerUser) // to register user


module.exports = { userRoute}