import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Component/Home/Header";
import App from "../App";
import { Addblog } from "../Pages/AddBlog";
import { User } from "../Pages/User";
import { BlogPage } from "../Pages/BlogPage.jsx";
import { Chatbot } from "../Component/Chatbot/Chatbot";
import { ReadBlog } from "../Pages/ReadBlog";
export const userInfo=createContext()



export const Allroutes=()=>{
    
const[islogin,setlogin]=useState(false)
    return(
        <userInfo.Provider value={{login:islogin,setlogin}}>
        <Header/>

        <Routes>

            <Route path="/" element={<App/>}/>
            <Route path="/add" element={<Addblog/>}/>;
            <Route path="/user" element={<User/>} />
            <Route path="/myblog" element={<BlogPage/>}/>
            <Route path="/read/:id" element={<ReadBlog/>}/>

        </Routes>
        </userInfo.Provider>

    )
}