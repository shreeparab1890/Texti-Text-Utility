import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="TEXT-UTILS" aboutText="About" />
      <div className="container my-3">
        <Form />
      </div>
    </>
  );
}

export default App;
