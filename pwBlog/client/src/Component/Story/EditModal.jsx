import React, { useState } from "react";

import "./editModal.css";

export const EditModal = ({edit,setEdit,dataPrev})=>{
    const[data,setData]=useState({...dataPrev})
    const HOST="http://localhost:8081"
    const handleClick=async()=>{
       try {
        const resp=await fetch(`${HOST}/blog/${data._id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${localStorage.getItem("userId")}`
            },
            body:JSON.stringify(data)
        })

        const data1=await resp.json();
        alert(data1.msg)
        window.location.reload();

        
       } catch (error) {
            alert(error.message)
       }


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