import React, { useEffect, useState } from "react";

import "./popup.css"
export const Error = ({msg})=>{
    const[display,setdisplay]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
                setdisplay(true)
        },2000)
    })
    return(
        <div hidden={display} id="error">
                <marquee>{msg||"You are Not Authenticated"}</marquee>
        </div>
    )
}