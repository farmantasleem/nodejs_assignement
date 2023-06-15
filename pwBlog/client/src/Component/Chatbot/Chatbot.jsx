import React, { useState } from "react";

import "./chatbot.css";
import { UserMsg } from "./UserMsg";
import { BotMsg } from "./Botreply";

export const Chatbot = () => {
    const[hide,sethide]=useState(true)
    return(
        <div id="chatbot">
            <img hidden={!hide} onClick={()=>{sethide(!hide)}} src="https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg" alt="" />
                <div id="bot" hidden={hide}>
                        <p id="close"  onClick={()=>{sethide(!hide)}}> X</p>
                        <UserMsg/>
                        <BotMsg/>
                </div>

        </div>
    )
}