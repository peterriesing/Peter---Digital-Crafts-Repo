import { useState } from "react";
import "./App.css";
import HomePage from "./components/Home/HomePage";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({
    name: "Peter",
    settings: "Dark Mode",
    address: "123 S Main",
  });
  const [userSites, setUserSites] = useState([
    {
      name: "midland",
      hqaddress: "23210 J St",
      water: "Blah",
    },
    {
      name: "Blahville",
      hqaddress: "123 Blah Ave",
      water: "Waater",
    },
    {
      name: "Doofer",
      hqaddress: "123 Sloppy St",
      water: "Drip",
    },
  ]);
  return (
    <div className="App">
      <h1>App</h1>
      <HomePage />
    </div>
  );
}

export default App;
