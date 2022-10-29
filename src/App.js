
import MainTitle from "./components/MainTitle";
import SearchBar from "./components/SearchBar";
import DisplayMeal from "./components/DisplayMeal";
import { useState } from "react";
function App() {

  let [getText, setGetText] = useState("");

  const handleGetText = (text) => {
    setGetText(text);
  };



  return (
    <>
   
    <div className="container mx-auto p-10 mt-10">
        <MainTitle />
        <SearchBar handleGetText={handleGetText}/>
        <DisplayMeal text={getText}/>
    </div>
    </>
  );
}

export default App;
