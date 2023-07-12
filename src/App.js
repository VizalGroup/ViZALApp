import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "../src/Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route stric path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
