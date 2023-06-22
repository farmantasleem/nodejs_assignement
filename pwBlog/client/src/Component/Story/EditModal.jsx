import React, { useState } from "react";

import "./editModal.css";

export const EditModal = ({edit,setEdit})=>{
    const[data,setData]=useState({title:"",img:"",desc:"",content:""})
    const handleClick=()=>{
        console.log(data)
    }
    return(
        <div id="EditModal" style={{display:edit?"none":"flex"}} >
                <input type="text" placeholder="Enter Title" value={data.title} onChange={({target})=>{setData({...data,title:target.value})}} />
                <input type="text" placeholder="Enter Description" value={data.desc} onChange={({target})=>{setData({...data,desc:target.value})}}/>
                <input type="text" placeholder="Image Url : " value={data.img} onChange={({target})=>{setData({...data,img:target.value})}}/>
                <input type="text" placeholder="Enter Content" value={data.content} onChange={({target})=>{setData({...data,content:target.value})}}/>
                <button onClick={handleClick}>Update</button>
                <button onClick={()=>{setEdit(true)}}>Close</button>
        </div>
    )
}