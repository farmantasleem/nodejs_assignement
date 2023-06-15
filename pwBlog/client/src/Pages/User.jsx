import React from "react";

import "./user.css"

export  const User=()=>{
    return(
        <div id="user">
                <h1>Login</h1>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button>Submit</button>

                <p>Don't have account?  <span style={{cursor:"pointer",color:"rgb(236,79,47)"}}>Register</span></p>
        </div>
    )
}