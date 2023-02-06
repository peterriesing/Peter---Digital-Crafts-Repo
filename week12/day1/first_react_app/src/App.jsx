import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  const studentName = "Peter";
  return (
    <>
      <Header />
      <div className="App">
        <h1>React</h1>
        <p>One element containing many elements</p>
      </div>
      <div className="Frag">
        <h2>Fragment</h2>
        <h2>vs.</h2>
        <h2>Division</h2>
      </div>
      <Footer studentName={studentName} />
    </>
  );
}

export default App;
