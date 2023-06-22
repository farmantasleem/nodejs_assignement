import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Component/Home/Header";
import App from "../App";
import { Addblog } from "../Pages/AddBlog";
import { User } from "../Pages/User";
import { BlogPage } from "../Pages/BlogPage.jsx";
import { Chatbot } from "../Component/Chatbot/Chatbot";
import { ReadBlog } from "../Pages/ReadBlog";




export const Allroutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/add" element={<Addblog/>}/>;
            <Route path="/user" element={<User/>} />
            <Route path="/myblog" element={<BlogPage/>}/>
            <Route path="/read" element={<ReadBlog/>}/>

        </Routes>
    )
}