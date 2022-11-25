import StudentHighScores from './StudentHighScores';
import allCountryScores from "./scores.js";
import './App.css';
import sortData from "./sortData"

sortData(allCountryScores)

function App() {
  return (
    <div className="App">
     <StudentHighScores allScores = {allCountryScores}  />
    </div>
  );
}

export default App;
