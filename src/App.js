import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Contact from "../src/Components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Description from "./Components/Description/Description";
import ServicesList from "./Components/ServicesList/ServicesList";
import Footer from "./Components/Footer/Footer";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <div>
      <Nav
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
              <ServicesList
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
              <Footer
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          }
        />
        <Route
          stric
          path="/contact"
          element={
            <Contact
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />
          }
        />
        <Route
          stric
          path="/descripcion"
          element={
            <Description
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
