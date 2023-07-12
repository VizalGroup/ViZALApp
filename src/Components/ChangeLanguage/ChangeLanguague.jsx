import React, { useState } from "react";
import style from "./ChangeLanguague.module.css";

export default function ChangeLanguage({ onLanguageChange }) {
  const [selectedOption] = useState("");

  const handleLanguageChange = (event) => {
    const value = event.target.value;

    onLanguageChange(value);
  };

  return (
    <div>
      <select className={style.select} value={selectedOption} onChange={handleLanguageChange}>
        <option disabled value=""></option>
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

