import { useState } from "react";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="grid place-items-center my-20">
      <h1 className="text-3xl font-bold">Login</h1>
      <SignUp />
    </div>
  );
}

export default App;
