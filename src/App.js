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
      setOrder((prev) => sortData(prev))
    }
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
