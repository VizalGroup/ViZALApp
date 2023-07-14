import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import emailConfig from "./config";

const Contact = () => {
  const serviceId = emailConfig.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = emailConfig.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = emailConfig.REACT_APP_EMAILJS_USER_ID;
  const form = useRef();

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
    <section>
      <div>
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Full name / Company name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="client_email"
            required
          />
          <input type="number" placeholder="Tel" name="client_tel" />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
