import React from "react";
import { EditModal } from "./EditModal";
import { NavLink } from "react-router-dom";


export const StoryCard = () => {
        return(
            <div className="storyCard">
            <img src="https://img.staticmb.com/mbcontent/images/uploads/2022/7/Image-of-colorful-sky-from-nandi-hills-bangalore.jpg" alt="" />
            <div className="content">
              <h1>Blog : How JavaScript is doing it</h1>
              <p>
                Short Description of Story : Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eius nostrum minima quod facilis,
                aperiam assumenda praesentium saepe nobis delectus? Consectetur
                molestias eaque exercitationem. Excepturi quidem eveniet mollitia
                ad dolorem iste.
              </p>
             <NavLink to={"/read"}> <button>Read</button></NavLink>
            </div>
        
          </div>
        )
}