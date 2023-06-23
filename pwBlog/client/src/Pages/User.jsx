import React, { useContext, useEffect, useState } from "react";

import "./user.css"
import { Error } from "../Component/popup/Error";
import { userInfo } from "../routes/Allroutes";
import { useNavigate } from "react-router-dom";


export  const User=()=>{
    const[register,setregister]=useState(false)
    const[user,setUser]=useState({name:"",email:"",password:""})
    const HOST="http://localhost:8081";
    const {setlogin,login} = useContext(userInfo)

    const handleClick = async() => {
   
          try{
            const resp=await fetch(`${HOST}/user/${register?"register":"login"}`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(user)
            }) 

            const data=await resp.json();
            if(resp.status=="200" && data?.userId){
                localStorage.setItem("userId",data.userId)
                setlogin(true)

            }
            alert(data.msg)
          }catch(err){
               alert(err.message)
          }

            
      
    }

    const navigate=useNavigate()
  React.useEffect(()=>{
    if(login){
    navigate("/")
    }
  },[login])

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