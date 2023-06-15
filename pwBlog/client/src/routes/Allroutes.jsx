import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../Component/Home/Header";
import App from "../App";
import { Addblog } from "../Pages/AddBlog";
import { User } from "../Pages/User";



export const Allroutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/add" element={<Addblog/>}/>;
            <Route path="/user" element={<User/>} />

        </Routes>
    )
}