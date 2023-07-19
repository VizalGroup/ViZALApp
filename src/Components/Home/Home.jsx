import React from "react";
import style from "../../Components/Home/Home.module.css";
import { AiOutlineWhatsApp, AiOutlineFacebook } from "react-icons/ai";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguague";
import { Link } from "react-router-dom";

export default function Home({ selectedLanguage, onLanguageChange }) {
  const textButton = {
    es: 'Contactanos',
    en: 'Contact us',
    fr: 'Contactez-nous'
  };
  return (
    <div className={style.container}>
      <Link className={style.positionB} to="/contact">
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
