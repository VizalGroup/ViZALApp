import React from "react";
import style from "../../Components/Home/Home.module.css";
import { AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Home({ selectedLanguage, onLanguageChange }) {
  const textButton = {
    es: 'Contactanos',
    en: 'Contact us',
    fr: 'Contactez-nous'
  };

  const handleEmailClick = () => {
    const email = 'vizalgroup0@gmail.com';
    const subject = 'Consulta';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  };
  return (
    <div className={style.container}>
      <Link className={style.positionB} to="/contact">
      <button className={style.button}>{textButton[selectedLanguage]}</button>
      </Link>
      <div className={style.footer}>
        <h6 className={style.copy}>copy ViZal@2023</h6>
        <AiOutlineMail className={style.socialIcon} onClick={handleEmailClick} />
        <AiOutlineWhatsApp className={style.socialIcon} />
        <AiOutlineFacebook className={style.socialIcon} />
      </div>
    </div>
  );
}
