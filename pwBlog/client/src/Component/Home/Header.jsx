import React, { useContext, useEffect } from "react";

import "../../App.css"
import { NavLink } from "react-router-dom";
import { userInfo } from "../../routes/Allroutes";


export const Header = () => {
    const {login,setlogin} = useContext(userInfo);


    useEffect(()=>{
        let userId=localStorage.getItem("userId");
        if(userId){
            setlogin(true)
        }
    },[])

    return (
        <header>
            <NavLink to={"/"}>
                <button>Home</button>
            </NavLink>
            <NavLink to={"/add"}>
                <button>Add Blog</button>
            </NavLink>
            <NavLink hidden={login} to={"/user"}>
                <button>Login/Register</button>
            </NavLink>
            <NavLink hidden={!login} to={"/myblog"}><button>MyBlog</button></NavLink>
        

            <button id="welcome">Welcome, Guest</button>
        </header>
    )
}

