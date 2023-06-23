import React, { useEffect, useState } from "react";

import "./readblog.css"
import { useParams } from "react-router-dom";

export const ReadBlog = ()=>{
    const {id}=useParams()
    const HOST="http://localhost:8081"

    const[blogData,setBlogData]=useState({})
    const getData=async()=>{
          const resp=await fetch(`${HOST}/blog/${id}`)
          const {data,author}=await resp.json();
          setBlogData({...data,author})
          console.log(data)
    
      }
    
      useEffect(()=>{
        getData()
      },[])
    return(
        <div id="Readblog">
            <img src={blogData?.img} />
            <h1 behavior="" direction="">{blogData?.title}</h1>

            <div id="authorDetails">
                <h1>Author : {blogData?.author}</h1>
                <p>Date: 22 June 2023</p>
            </div>
            <div id="blogContent">
                    <p>
                        {blogData?.content}
                    </p>
            </div>
        </div>
    )
}