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

const ServicesList = () => {
  return (
    <div className={style.container}>
      <Card
        style={{
          width: "18rem",
          background: "rgba(255, 255, 255, 0.8)",
          margin: "10px",
        }}
      >
        <Card.Img variant="top" src={imgDesign} />
        <Card.Body>
          <Card.Title>Diseño Grafico🎨✨</Card.Title>
          <Card.Text>
            Mejora la apariencia de tu sitio web con nuestro servicio de diseño
            gráfico. Creamos experiencias visuales atractivas y funcionales que
            cautivan a tus visitantes.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          background: "rgba(255, 255, 255, 0.8)",
          margin: "10px",
        }}
      >
        <Card.Img variant="top" src={imgCorporative} />
        <Card.Body>
          <Card.Title>Aplicaciones Web Corporativas 📊💼</Card.Title>
          <Card.Text>
            Impulsa la eficiencia de tu empresa con soluciones personalizadas.
            Nuestras aplicaciones corporativas optimizan procesos y mejoran la
            colaboración interna.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          background: "rgba(255, 255, 255, 0.8)",
          margin: "10px",
        }}
      >
        <Card.Img variant="top" src={imgCrm} />
        <Card.Body>
          <Card.Title>CRM 🤝🔍</Card.Title>
          <Card.Text>
            Estrecha relaciones con tus clientes. Nuestro sistema de Gestión de
            Relaciones con el Cliente (CRM) te ayuda a comprender y atender
            mejor las necesidades de tus clientes.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          background: "rgba(255, 255, 255, 0.8)",
          margin: "10px",
        }}
      >
        <Card.Img variant="top" src={imgProfessionalContact} />
        <Card.Body>
          <Card.Title>Página Profesional de Contacto 📞👤</Card.Title>
          <Card.Text>
            Deja una impresión duradera en línea. Creamos páginas de contacto
            profesionales que facilitan a los visitantes conectarse contigo de
            manera efectiva.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          background: "rgba(255, 255, 255, 0.8)",
          margin: "10px",
        }}
      >
        <Card.Img variant="top" src={imgWorkPortafolio} />
        <Card.Body>
          <Card.Title>Portafolios de Trabajo 📂✨</Card.Title>
          <Card.Text>
            Muestra tu talento al mundo. Diseñamos portafolios atractivos que
            resaltan tus logros y habilidades, ayudándote a destacar en tu
            campo.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "18rem",
          background: "rgba(255, 255, 255, 0.8)",
          margin: "10px",
        }}
      >
        <Card.Img variant="top" src={imgSeo} />
        <Card.Body>
          <Card.Title>Posicionamiento en Google 🌐🔍</Card.Title>
          <Card.Text>
            Sé visible en línea. Nuestro servicio de posicionamiento en Google
            aumenta tu visibilidad, asegurando que tu negocio sea encontrado por
            quienes buscan tus productos o servicios.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesList;
