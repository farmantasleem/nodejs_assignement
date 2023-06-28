import React, { useEffect, useState } from "react";

import "./readblog.css"
import { useParams } from "react-router-dom";
import { StoryCard } from "../Component/Story/StoryCard";

export const ReadBlog = ()=>{
    const {id}=useParams()
    const HOST="http://localhost:8081"

    const[blogData,setBlogData]=useState({})
    const[allblogData,setallblogData]=useState([])
    const getData=async()=>{
        try {
            const resp=await fetch(`${HOST}/blog/${id}`)
            const blogResp=await fetch(`${HOST}/blog`)
            const blogRespData=await blogResp.json()
            setallblogData(blogRespData.data)
            const {data,author}=await resp.json();
            setBlogData({...data,author})
           
        } catch (error) {
            alert(error.message)
        }
    
      }
    
      useEffect(()=>{
        getData()
      },[blogData])
    return(
        <div id="parentReadBlog" style={{display:"flex",padding:"20px"}}>
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
             
             <div id="sidebar" style={{display:"flex",flexDirection:"column",gap:"05px"}}>
             <h1 style={{color:"white",fontFamily:"sans-serif"}}>You May Also Like</h1>
                {
                    allblogData.map((e)=>{
                        return <StoryCard data={e}/>
                    })
                }
             </div>
        </div>
    )
}