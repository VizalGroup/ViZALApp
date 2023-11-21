import React, { useState } from "react";
import style from "./ChangeLanguague.module.css";

export default function ChangeLanguage({ onLanguageChange }) {
  const [selectedOption] = useState("");

  const handleLanguageChange = (event) => {
    const value = event.target.value;

    onLanguageChange(value);
  };

  return (
    <div className={style.container}>
      <select className={style.select} value={selectedOption} onChange={handleLanguageChange}>
        <option className={style.option} disabled value=""></option>
        <option className={style.option} value="es">Español</option>
        <option className={style.option} value="en">English</option>
        <option className={style.option} value="fr">Français</option>
      </select>
    </div>
  );
}

