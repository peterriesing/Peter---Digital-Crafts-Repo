import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Student } from "./components/Student/Student";

function App() {
  const [counter, setCounter] = useState(0);
  const studentName = "Peter";
  const student2 = "This header data was passed with props";
  const studentData = [
    { name: "Peter", age: 34, location: "Knoxville" },
    { name: "Jeff", age: 39, location: "Toronto" },
  ];
  return (
    <>
      <Header student2={student2} />
      <div className="App">
        <h1>React</h1>
        {studentData.map((student) => (
          <>
            <Student student={student} />
          </>
        ))}
        <p>One element containing many elements</p>
        <h3>Counter: {counter}</h3>
        <div className="Buttons">
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
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
