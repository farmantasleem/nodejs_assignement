import React, { useContext, useEffect, useState } from "react";
import { StoryCard } from "../Component/Story/StoryCard";

import "./myblog.css";
import { BlogAuthor } from "../Component/Story/BlogAuthor";
import { userInfo } from "../routes/Allroutes"

export const BlogPage = ()=>{
    const HOST="http://localhost:8081"
    const[blogData,setBlogData]=useState([])
    const {login}=useContext(userInfo)
    const getData=async()=>{
        const resp=await fetch(`${HOST}/blog/`)
        const {data}=await resp.json();
        setBlogData(data)
        console.log(data)

    }

    useEffect(()=>{
        // getData()
        console.log(login)
    },[])

        return(
            <div id="myBlog">
              <BlogAuthor/>
              <BlogAuthor/>
              <BlogAuthor/>
              <BlogAuthor/>
                
            </div>
        )
}