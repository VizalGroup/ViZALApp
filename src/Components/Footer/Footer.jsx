import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function footer({ selectedLanguage, onLanguageChange }) {
  const handleEmailClick = () => {
    const email = "vizalgroup0@gmail.com";
    const subject = "";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={style.footer}>
      <h6 className={style.copy}>copy ViZal@2023</h6>
      <AiOutlineMail className={style.socialIcon} onClick={handleEmailClick} />
      <a
        href="https://wa.me/5493512079515"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineWhatsApp className={style.socialIcon} />
      </a>
      <Link to="https://www.facebook.com/ViZalGroup">
        <AiOutlineFacebook className={style.socialIcon} />
      </Link>
    </div>
  );
}
