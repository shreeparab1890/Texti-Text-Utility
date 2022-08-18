import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
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
      document.title = "Texti | Text Utilities | Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success");
      document.title = "Texti | Text Utilities | Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TEXTI"
          aboutText="About "
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<Form mode={mode} showAlert={showAlert} />}
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
        <Footer mode={mode} />
      </BrowserRouter>
    </>
  );
}

export default App;
