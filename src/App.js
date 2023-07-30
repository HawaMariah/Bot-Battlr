import React, { useState, useEffect } from "react";
import "./App.css";
import BotCollection from "./BotCollection";


function App() {
  const [botsData, setBotsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBotsData(data))
      .catch((error) => alert("error fetching data"));
  }, []);
  return (
    <div className="App">
      <h1>Bots</h1>
      <BotCollection collection={botsData} />
  
    </div>
  );
}

export default App;
