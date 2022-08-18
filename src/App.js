import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TEXT-UTILS"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Form mode={mode} />
      </div>
    </>
  );
}

export default App;
