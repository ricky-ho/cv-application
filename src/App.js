import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Personal />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
