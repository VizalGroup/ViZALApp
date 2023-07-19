import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import emailConfig from "./config";
import style from "./Contact.module.css";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguague";

const Contact = ({ selectedLanguage, onLanguageChange }) => {
  const serviceId = emailConfig.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = emailConfig.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = emailConfig.REACT_APP_EMAILJS_USER_ID;
  const form = useRef();

  const ContactUs = {
    es: "Contactanos",
    en: "Contact us",
    fr: "Contactez-nous",
  };

  const Description = {
    es: "Descripción de la propuesta",
    en: "Proposal Description",
    fr: "Description de la proposition",
  };

  const fullName = {
    es: "Nombre completo o nombre de la empresa",
    en: "Full name or company name",
    fr: "Nom complet ou nom de l'entreprise",
  };

  const tellUs = {
    es: "Cuentanos que necesitas, ¿En que te podemos ayudar?",
    en: "Tell us what you need, how can we help you?",
    fr: "Dites-nous ce dont vous avez besoin, comment pouvons-nous vous aider ?",
  };

  const sendMessage = {
    es: "Enviar",
    en: "Send",
    fr: "Envoyer",
  };

  const telNumber = {
    es: "número de teléfono",
    en: "telephone number",
    fr: "numéro de téléphone",
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  const handleLanguageChange = (language) => {
    onLanguageChange(language);
  };

  return (
    <div className={style.background}>
      <div className={style.fixPosition}>
        <div className={style.container}>
          <h2 className={style.title}>{ContactUs[selectedLanguage]}</h2>
          <form className={style.direction} ref={form} onSubmit={sendEmail}>
            <input
              className={style.input}
              type="text"
              placeholder={fullName[selectedLanguage]}
              name="name"
              required
            />
            <input
              className={style.input}
              type="email"
              placeholder="email@email.com"
              name="client_email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
            />
            <input
              className={`${style.input} ${style.noSpinner}`}
              type="number"
              placeholder={telNumber[selectedLanguage]}
              name="client_tel"
              min="0"
              pattern="\d+"
            />
            <label>{Description[selectedLanguage]}</label>
            <textarea
              placeholder={tellUs[selectedLanguage]}
              className={style.project}
              name="message"
            ></textarea>
            <button className={style.button} type="submit">
              {sendMessage[selectedLanguage]}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;