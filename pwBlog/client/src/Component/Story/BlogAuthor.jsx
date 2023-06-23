import React, { useState } from "react";
import { EditModal } from "./EditModal";


export const BlogAuthor = ({data}) => {
  const[edit,setEdit]=useState(true)
        return(
            <div className="storyCard myBlog">
            <img src={data.img} alt="" />
            <div className="content">
              <h1>{data.title}</h1>
              <p>
               {data.desc}
              </p>
              <div id="blogButton">
                  <button>Read</button>
                  <button onClick={()=>{setEdit(false)}}>Edit</button>
                  <button>Delete</button>
              </div>
              <EditModal edit={edit} setEdit={setEdit}/>
            </div>
          </div>
        )
}