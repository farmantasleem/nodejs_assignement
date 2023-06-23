import React from "react";
import { EditModal } from "./EditModal";
import { NavLink } from "react-router-dom";


export const StoryCard = ({data}) => {
        return(
            <div className="storyCard">
            <img src={data.img} alt="" />
            <div className="content">
              <h1>{data.title}</h1>
              <p>
               {data.desc}
              </p>
             <NavLink to={`/read/${data._id}`}> <button>Read</button></NavLink>
            </div>
        
          </div>
        )
}