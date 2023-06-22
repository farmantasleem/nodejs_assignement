import React from "react";

import "../../App.css"
import { NavLink } from "react-router-dom";


export const Header = () => {
    return (
        <header>
            <NavLink to={"/"}>
                <button>Home</button>
            </NavLink>
            <NavLink to={"/add"}>
                <button>Add Blog</button>
            </NavLink>
            <NavLink to={"/user"}>
                <button>Login/Register</button>
            </NavLink>
            <NavLink to={"/myblog"}><button>MyBlog</button></NavLink>
            <button id="welcome">Welcome, Guest</button>
        </header>
    )
}

