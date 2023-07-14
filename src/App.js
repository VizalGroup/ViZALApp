import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "../src/Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Description from "./Components/Description/Description";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route stric path="/contact" element={<Contact />} />
        <Route path="/descripcion" element={<Description/>}/>
      </Routes>
    </div>
  );
}

export default App;
