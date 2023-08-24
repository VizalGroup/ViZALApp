import React from "react";
import style from "../../Components/Home/Home.module.css";
import { Link } from "react-router-dom";

export default function Home({ selectedLanguage, onLanguageChange }) {
  const textButton = {
    es: "Contactanos",
    en: "Contact us",
    fr: "Contactez-nous",
  };

  const texth1 = {
    es: "Digitaliza tus necesidades",
    en: "Digitize your needs",
    fr: "Digitalisez vos besoins",
  };

  const item1 = {
    es: "Mejora la experiencia de tus clientes",
    en: "Improve your customer experience",
    fr: "Améliorez votre expérience client",
  };

  const item2 = {
    es: "Presencia en línea",
    en: "Online presence",
    fr: "Présence en ligne",
  };

  const item3 = {
    es: "Tu satisfacción es nuestra prioridad.",
    en: "Your satisfaction is our priority.",
    fr: "Votre satisfaction est notre priorité.",
  };

  const secondaryTitle = {
    es: "Nuestros servicios",
    en: "Our services",
    fr: "Nos services",
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.h1}>{texth1[selectedLanguage]}</h1>
        <ul className={style.items}>
          <li>{item1[selectedLanguage]}</li>
          <li>{item2[selectedLanguage]}</li>
          <li>{item3[selectedLanguage]}</li>
        </ul>
        <Link to="/contact">
          <button className={style.button}>
            {textButton[selectedLanguage]}
          </button>
        </Link>
      </div>
      <br />
      <div className={style.containerTitle}>
        <h2 className={style.secondaryTitle}>
          {secondaryTitle[selectedLanguage]}
        </h2>
      </div>
    </div>
  );
}
