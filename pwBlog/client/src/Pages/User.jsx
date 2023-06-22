import React, { useState } from "react";

import "./user.css"
import { Error } from "../Component/popup/Error";


export  const User=()=>{
    const[register,setregister]=useState(false)
    const[user,setUser]=useState({name:"",email:"",password:""})
    const HOST="http://localhost:8081"

    const handleClick = async() => {
   
            const resp=await fetch(`${HOST}/user/${register?"register":"login"}`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(user)
            }) 

            const data=await resp.json();
            if(resp.status=="200" && data?.userId){
                localStorage.setItem("userId",data.userId)
            }
            alert(data.msg)
      
    }

    return(
        <div id="user">
                <h1>{register?"Register":"Login"}</h1>
                <input type="text" value={user.name} hidden={!register} onChange={e=>{setUser({...user,name:e.target.value})}} placeholder="Full Name Eg. Farman Tasleem" />
                <input type="text" value={user.email} placeholder="Email" onChange={e=>{setUser({...user,email:e.target.value})}} />
                <input type="text"  value={user.password} placeholder="Password" onChange={e=>{setUser({...user,password:e.target.value})}}/>
                
                <button onClick={handleClick}>Submit</button>
              

                <p>Don't have account?  <span onClick={()=>{setregister(!register)}} style={{cursor:"pointer",color:"rgb(236,79,47)"}}>{!register?"Register":"Login"}</span></p>
        </div>
    )
}