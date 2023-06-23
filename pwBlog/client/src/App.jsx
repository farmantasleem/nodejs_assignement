import { useEffect, useState } from "react";
import "./App.css";
import { StoryCard } from "./Component/Story/StoryCard";
import { Addblog } from "./Pages/AddBlog";
import { User } from "./Pages/User";

function App() {
  const HOST="http://localhost:8081"

  const[blogData,setBlogData]=useState([])
const getData=async()=>{
      const resp=await fetch(`${HOST}/blog/`)
      const {data}=await resp.json();
      setBlogData(data)
      console.log(data)

  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="parent">
    
      <main>
       {    
       blogData.map((e)=>{
        return  <StoryCard data={e}/>
       })
       
      
       
       
       }
            

      
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
