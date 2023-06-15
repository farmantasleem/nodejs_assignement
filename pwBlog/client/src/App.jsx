import "./App.css";
import { StoryCard } from "./Component/Story/StoryCard";
import { Addblog } from "./Pages/AddBlog";
import { User } from "./Pages/User";

function App() {
  return (
    <div className="parent">
    
      <main>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>

      
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
