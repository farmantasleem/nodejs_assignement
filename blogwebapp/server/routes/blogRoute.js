const express = require("express");
const { getBlog, createBlog } = require("../controller/blogController");

const blogRoute =  express.Router()



blogRoute.get("/",getBlog) 

blogRoute.post("/",createBlog)

module.exports = { blogRoute}