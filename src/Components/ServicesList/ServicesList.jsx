import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import style from "./ServicesList.module.css";
import imgDesign from "../Img/graphicDesign.png";
import imgCorporative from "../Img/webCorporativa.jpg";
import imgCrm from "../Img/imgCrm.avif";
import imgProfessionalContact from "../Img/professionalContact.jpg";
import imgWorkPortafolio from "../Img/workPortafolio.avif";
import imgSeo from "../Img/seo.jpg";
import imgInstitute from "../Img/institute.jpg";
import imgPyme from "../Img/pyme.jpg";
import { Link } from "react-router-dom";

export default function ServicesList({ selectedLanguage, onLanguageChange }) {
  const graphicDesign = {
    es: "Diseño Grafico 🎨✨",
    en: "Graphic Design 🎨✨",
    fr: "Design Graphique 🎨✨",
  };

  const graphicDesignText = {
    es: "Mejora la apariencia de tu sitio web con nuestro servicio de diseño gráfico. Creamos experiencias visuales atractivas y funcionales que cautivan a tus visitantes.",
    en: " Improve the appearance of your website with our graphic design service. We create attractive and functional visual experiences that captivate your visitors.",
    fr: "Améliorez l'apparence de votre site Web grâce à notre service de conception graphique. Nous créons des expériences visuelles attrayantes et fonctionnelles qui captivent vos visiteurs.",
  };

  const corporateApp = {
    es: "Aplicaciones Web Corporativas 📊💼",
    en: "Corporate web applications 📊💼",
    fr: "Applications Web d'entreprise 📊💼",
  };

  const corporateAppText = {
    es: "Impulsa la eficiencia de tu empresa con soluciones personalizadas. Nuestras aplicaciones web corporativas optimizan procesos y mejoran la colaboración interna.",
    en: "Boost the efficiency of your company with personalized solutions. Our corporate web applications optimize processes and improve internal collaboration.",
    fr: "Boostez l’efficacité de votre entreprise avec des solutions personnalisées. Nos applications Web d'entreprise optimisent les processus et améliorent la collaboration interne.",
  };

  const crmText = {
    es: "Estrecha relaciones con tus clientes. Creamos sistemas de Gestión de Relaciones con el Cliente personalizados (CRM) que te ayudan a comprender y atender mejor las necesidades de tus clientes.",
    en: "Build relationships with your customers. We create customized Customer Relationship Management (CRM) systems that help you understand and better address your customers' needs.",
    fr: "Établissez des relations avec vos clients. Nous créons des systèmes de gestion de la relation client (CRM) personnalisés qui vous aident à mieux comprendre et à mieux répondre aux besoins de vos clients.",
  };

  const professionalContactPage = {
    es: "Página para Profesionales de Contacto 📞👤",
    en: "Professional Contact Page 📞👤",
    fr: "Page de Contact Professionnelle 📞👤",
  };

  const professionalContactPageText = {
    es: "Deja una impresión duradera en línea. Creamos páginas de contacto para profesionales que facilitan a los visitantes conectarse contigo de manera efectiva.",
    en: "Leave a lasting impression online. We create contact pages for professionals that make it easy for visitors to connect with you effectively.",
    fr: "Laissez une impression durable en ligne. Nous créons des pages de contact pour les professionnels qui facilitent la connexion efficace des visiteurs avec vous.",
  };

  const pymeSoftware = {
    es: "Software Web para Pequeñas y Medianas Empresas 🌐💼",
    en: "Web Software for Small and Medium Enterprises 🌐💼",
    fr: "Logiciel Web pour les Petites et Moyennes Entreprises 🌐💼",
  };

  const pymeSoftwareText = {
    es: "Software web a medida. Diseñamos aplicaciones que optimizan tus operaciones, desde la gestión de ventas hasta el seguimiento de inventario. Facilita la toma de decisiones y mejora la eficiencia en tu empresa, adaptándonos a tus necesidades únicas. 🚀📊",
    en: "Custom web software. We design applications that optimize your operations, from sales management to inventory tracking. Facilitate decision-making and improve efficiency in your company, tailoring to your unique needs. 🚀📊",
    fr: "Logiciel web sur mesure. Nous concevons des applications qui optimisent vos opérations, de la gestion des ventes au suivi des stocks. Facilitez la prise de décision et améliorez l'efficacité de votre entreprise, en vous adaptant à vos besoins uniques. 🚀📊",
  };

  const workPortfolios = {
    es: "Portafolios de Trabajo 📂✨",
    en: "Work Portfolios 📂✨",
    fr: "Portfolios de Travail 📂✨",
  };

  const workPortfoliosText = {
    es: "Muestra tu talento al mundo. Diseñamos portafolios atractivos que resaltan tus logros y habilidades, ayudándote a destacar en tu campo.",
    en: "Showcase your talent to the world. We design attractive portfolios that highlight your accomplishments and skills, helping you stand out in your field.",
    fr: "Mettez en valeur votre talent devant le monde. Nous concevons des portfolios attrayants qui mettent en avant vos réalisations et compétences, vous aidant à vous démarquer dans votre domaine.",
  };

  const googlePositioning = {
    es: "Posicionamiento en Google 🌐🔍",
    en: "Google Positioning 🌐🔍",
    fr: "Positionnement sur Google 🌐🔍",
  };

  const googlePositioningText = {
    es: "Sé visible en línea. Nuestro servicio de posicionamiento en Google aumenta tu visibilidad, asegurando que tu negocio sea encontrado por quienes buscan tus productos o servicios. Busca ViZal Group en Google y mira dónde estamos.",
    en: "Be visible online. Our Google positioning service increases your visibility, ensuring that your business is found by those searching for your products or services. Search for ViZal Group on Google and see where we are.",
    fr: "Soyez visible en ligne. Notre service de positionnement sur Google augmente votre visibilité, garantissant que votre entreprise soit trouvée par ceux qui recherchent vos produits ou services. Recherchez ViZal Group sur Google et voyez où nous nous trouvons.",
  };

  const institutionWebsites = {
    es: "Páginas Web para Instituciones 🏛️🌐",
    en: "Websites for Institutions 🏛️🌐",
    fr: "Sites Web pour les Institutions 🏛️🌐",
  };

  const institutionWebsitesText = {
    es: "Comunica tu mensaje con claridad a través de una página web profesional para tu institución. Ya sea para publicar información relevante o mantener a tus usuarios actualizados, creamos sitios que son intuitivos y atractivos. Llega a tu audiencia de manera efectiva. 📣✨",
    en: "Communicate your message clearly through a professional website for your institution. Whether it's publishing relevant information or keeping your users updated, we create sites that are intuitive and attractive. Reach your audience effectively. 📣✨",
    fr: "Communiquez votre message en toute clarté grâce à un site Web professionnel pour votre institution. Que ce soit pour publier des informations pertinentes ou tenir vos utilisateurs informés, nous créons des sites intuitifs et attrayants. Atteignez efficacement votre public. 📣✨",
  };

  return (
    <div className={style.container}>
      <Card className={style.card}>
      {/* <Link to="https://www.behance.net/tamarazaslavsky" className={style.link}> */}
        <Card.Img variant="top" src={imgDesign} />
        <Card.Body>
          <Card.Title>{graphicDesign[selectedLanguage]}</Card.Title>
          <Card.Text>{graphicDesignText[selectedLanguage]}</Card.Text>
        </Card.Body>
      {/* </Link> */}
      </Card>
      <Card className={style.card}>
        <Card.Img variant="top" src={imgCorporative} />
        <Card.Body>
          <Card.Title>{corporateApp[selectedLanguage]} </Card.Title>
          <Card.Text>{corporateAppText[selectedLanguage]}</Card.Text>
        </Card.Body>
      </Card>
      <Card className={style.card}>
        <Card.Img variant="top" src={imgCrm} />
        <Card.Body>
          <Card.Title>CRM 🤝🔍</Card.Title>
          <Card.Text>{crmText[selectedLanguage]}</Card.Text>
        </Card.Body>
      </Card>
      <Card className={style.card}>
      {/* <Link to="/professionalPage" className={style.link}> */}
        <Card.Img variant="top" src={imgProfessionalContact} />
        <Card.Body>
          <Card.Title>{professionalContactPage[selectedLanguage]}</Card.Title>
          <Card.Text>{professionalContactPageText[selectedLanguage]}</Card.Text>
        </Card.Body>
      {/* </Link> */}
      </Card>
      <Card className={style.card}>
        <Card.Img variant="top" src={imgPyme} />
        <Card.Body>
          <Card.Title>{pymeSoftware[selectedLanguage]}</Card.Title>
          <Card.Text>{pymeSoftwareText[selectedLanguage]}</Card.Text>
        </Card.Body>
      </Card>
      <Card className={style.card}>
        <Card.Img variant="top" src={imgWorkPortafolio} />
        <Card.Body>
          <Card.Title>{workPortfolios[selectedLanguage]}</Card.Title>
          <Card.Text>{workPortfoliosText[selectedLanguage]}</Card.Text>
        </Card.Body>
      </Card>

      <Card className={style.card}>
        <Card.Img variant="top" src={imgSeo} />
        <Card.Body>
          <Card.Title>{googlePositioning[selectedLanguage]}</Card.Title>
          <Card.Text>{googlePositioningText[selectedLanguage]}</Card.Text>
        </Card.Body>
      </Card>
      <Card className={style.card}>
        <Card.Img variant="top" src={imgInstitute} />
        <Card.Body>
          <Card.Title>{institutionWebsites[selectedLanguage]}</Card.Title>
          <Card.Text>{institutionWebsitesText[selectedLanguage]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
