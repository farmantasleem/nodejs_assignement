import React, { useEffect, useState } from "react";

import "./popup.css"
export const Success = ({msg})=>{
    const[display,setdisplay]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
                setdisplay(true)
        },2000)
    })
    return(
        <div hidden={display} id="success">
                <marquee>{msg||"You are Not Authenticated"}</marquee>
        </div>
    )
}