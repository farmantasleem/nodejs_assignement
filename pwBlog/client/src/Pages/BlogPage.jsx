import React from "react";
import { StoryCard } from "../Component/Story/StoryCard";

import "./myblog.css";
import { BlogAuthor } from "../Component/Story/BlogAuthor";

export const BlogPage = ()=>{
        return(
            <div id="myBlog">
              <BlogAuthor/>
              <BlogAuthor/>
              <BlogAuthor/>
              <BlogAuthor/>
                
            </div>
        )
}