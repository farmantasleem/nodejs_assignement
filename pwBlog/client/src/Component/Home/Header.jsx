import React, { useContext, useEffect } from "react";

import "../../App.css"
import { NavLink } from "react-router-dom";
import { userInfo } from "../../routes/Allroutes";


export const Header = () => {
    const {login,setlogin} = useContext(userInfo);


    const logOut = ()=>{
        setlogin(false)
        localStorage.removeItem("userId")
        alert("You have been logged Out Successfully")
    }

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
          <button hidden={!login} onClick={logOut} style={{color:"white"}}>LogOut</button>
        

            <button id="welcome">Welcome</button>
        </header>
    )
}

