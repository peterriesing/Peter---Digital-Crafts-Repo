import "./App.css";
import Movies from "./components/Movies";
import MovieContainer from "./components/MovieContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie" element={<MovieContainer />} />
      </Routes>
    </div>
  );
}

export default App;
