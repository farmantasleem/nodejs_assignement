const express = require("express");
const { getBlog, createBlog, getSingleBlog, deleteBlog } = require("../controller/blogController");

const blogRoute =  express.Router()



blogRoute.get("/",getBlog) 

blogRoute.post("/",createBlog)

blogRoute.get("/:blogID",getSingleBlog)

blogRoute.delete("/:blogID",deleteBlog)
module.exports = { blogRoute}