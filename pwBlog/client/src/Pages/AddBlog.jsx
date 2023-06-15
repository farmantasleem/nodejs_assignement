import React from "react";
import "./addBlog.css"

export const Addblog=()=>{
    return(
        <div id="main">
            <h1>Write Your Blog</h1>
            <input type="text" placeholder="Enter Title of Your Story" />
            <input type="text" placeholder="Enter Url of Blog Image" />
            <input type="text" placeholder="Type Short Description for your Blog" />

            <textarea name="" id="" cols="30" rows="5" placeholder="Type Your Blog"></textarea>   
            <button>Publish Blog</button>         
            </div>
    )
}