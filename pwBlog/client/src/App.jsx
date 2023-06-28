import { useEffect, useState } from "react";
import "./App.css";
import { StoryCard } from "./Component/Story/StoryCard";


function App() {
  const HOST="http://localhost:8081"

  const[blogData,setBlogData]=useState([])
  const getData=async()=>{
     try { const resp=await fetch(`${HOST}/blog/`)
     const {data}=await resp.json();
     setBlogData(data)
      
     } catch (error) {
        console.log(error.message)
     }
    

  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="parent homepage">
    
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
