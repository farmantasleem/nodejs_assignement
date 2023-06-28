import React, { useState } from "react";
import { EditModal } from "./EditModal";
import { NavLink } from "react-router-dom";


export const BlogAuthor = ({data={}}) => {
  const[edit,setEdit]=useState(true)
  const HOST="http://localhost:8081"
  const handleDelete =async()=>{
  

    try {
      const resp=await fetch(`${HOST}/blog/${data._id}`,{
        method:"DELETE",
        headers:{
          "authorization":`bearer ${localStorage.getItem("userId")}`
        }
      })
      const respData=await resp.json()
      alert(respData.msg)
    } catch (error) {
      alert(error.message)
    }

    
  }


        return(
            <div className="storyCard myBlog">
            <img src={data.img} alt="" />
            <div className="content">
              <h1>{data.title}</h1>
              <p>
               {data.desc}
              </p>
              <div id="blogButton">
                  <NavLink to={`/read/${data._id}`}><button>Read</button></NavLink>
                  <button onClick={()=>{setEdit(false)}}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
              </div>
              <EditModal dataPrev={data} edit={edit} setEdit={setEdit}/>
            </div>
          </div>
        )
}