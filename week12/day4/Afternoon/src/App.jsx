import { useState } from "react";
import Form from "./components/Form";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Form />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
