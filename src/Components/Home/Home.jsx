import React, {useState} from "react";
import style from "../../Components/Home/Home.module.css";
import { AiOutlineWhatsApp, AiOutlineFacebook } from "react-icons/ai";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguague";
import { Link } from "react-router-dom";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const textButton ={
    es: "Contactanos",
    en: "Contact us",
    fr: "Contactez-nous"
  }
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <div className={style.container}>
      <ChangeLanguage onLanguageChange={handleLanguageChange} />
      <Link to="/contact">
      <button className={style.button}>{textButton[selectedLanguage]}</button>
      </Link>
      <footer className={style.footer}>
        <AiOutlineWhatsApp className={style.whatsapp} />
        <AiOutlineFacebook className={style.face} />
        <h6 className={style.copy}>copy ViZal@2023</h6>
      </footer>
    </div>
  );
}
