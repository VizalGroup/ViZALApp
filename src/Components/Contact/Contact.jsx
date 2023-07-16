import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import emailConfig from "./config";
import style from "./Contact.module.css";

const Contact = () => {
  const serviceId = emailConfig.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = emailConfig.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = emailConfig.REACT_APP_EMAILJS_USER_ID;
  const form = useRef();

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

  return (
    <div className={style.background}>
      <div className={style.container}>
        <h2 className={style.title}>Contact Us</h2>
        <form className={style.direction} ref={form} onSubmit={sendEmail}>
          <input
            className={style.input}
            type="text"
            placeholder="Full name / Company name"
            name="name"
            required
          />
          <input
            className={style.input}
            type="email"
            placeholder="Email"
            name="client_email"
            required
          />
          <input
            className={`${style.input} ${style.noSpinner}`}
            type="number"
            placeholder=" +1 "
            name="client_tel"
            min="0"
            pattern="\d+"
          />
          <label>Descripcion de la propuesta</label>
          <textarea
            placeholder="Dinos lo que necesitas, ¿En que te podemos ayudar?"
            className={style.project}
            name="message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
