import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Enabled Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success");
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
      <Alert alert={alert} />
      <div className="container my-3">
        <Form mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
