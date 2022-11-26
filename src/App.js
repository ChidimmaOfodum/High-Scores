import StudentHighScores from "./StudentHighScores";
import { useState } from "react";
import allCountryScores from "./scores.js";
import "./App.css";
import sortData from "./sortData";

// sortData(allCountryScores)

function App() {
  const [order, setOrder] = useState(allCountryScores);

  function handleOrder() {
   if(order[0].name === "Ethiopia") {
    let copy = [...order].sort((a,b) => a.name < b.name? -1: 1)
    for(let obj of copy) {
      let { scores } = obj;
      scores.sort((a, b) => (a.s > b.s ? -1 : 1));
      setOrder(copy)
    }}
   else setOrder(allCountryScores)
  }
  return (
    <div className="App">
      <button onClick={handleOrder}>Toggle</button>
      <StudentHighScores allScores={order} />
    </div>
  );
}

export default App;
