import React, { useState } from "react";
import "./addBlog.css"

export const Addblog=()=>{
    const[story,setstory]=useState({title:"",desc:"",img:"",content:""})

    const handleClick = () => {
        console.log(story)
    }
    return(
        <div id="main">
            <h1>Write Your Blog</h1>
            <input type="text"  placeholder="Enter Title of Your Story" value={story.title} onChange={e=>setstory({...story,title:e.target.value})}/>
            <input type="text" placeholder="Enter Url of Blog Image"  value={story.img} onChange={e=>setstory({...story,img:e.target.value})}/>
            <input type="text" placeholder="Type Short Description for your Blog"  value={story.desc} onChange={e=>setstory({...story,desc:e.target.value})} />

            <textarea name="" id="" cols="30" rows="5" placeholder="Type Your Blog"  value={story.content} onChange={e=>setstory({...story,content:e.target.value})}></textarea>   
            <button onClick={handleClick}>Publish Blog</button>         
            </div>
    )
}