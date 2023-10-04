import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineGlobal,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlinePhone,
  AiFillEnvironment,
} from "react-icons/ai";
import style from "./ProfessionalPage.module.css";
import profile from "../Img/Profile.jpg";
import Image from "react-bootstrap/Image";

export default function ProfessionalPage({
  selectedLanguage,
  onLanguageChange,
}) {
  const name = "< Alejandro Villamayor />";
  const aboutMe = {
    es: "Sobre Mi",
    en: "About me",
    fr: "À propos de moi",
  };

  const contactInformation = {
    es: "Datos de contacto",
    en: "Contact information",
    fr: "Informations de contact",
  };

  const location = {
    es: "Ubicación",
    en: "Location",
    fr: "Emplacement",
  };

  const professionalExperience = {
    es: "Experiencia profesional",
    en: "Professional experience",
    fr: "Experience Professionnelle",
  };

  const cofounder = {
    es: "Cofundador de ViZal Group",
    en: "Co-founder of ViZal Group",
    fr: "Co-fondateur du ViZal Group",
  };

  const experience = {
    es: "Mi experiencia como cofundador de Vizal Group desde agosto de 2023 ha sido una oportunidad increíble para aplicar y desarrollar una amplia gama de habilidades. Mi enfoque en el liderazgo, la organización, la gestión de proyectos, el emprendimiento, la programación y el servicio al cliente ha sido esencial para el crecimiento y el éxito continuo de nuestra empresa en la industria del desarrollo de software.",
    en: "My experience as co-founder of Vizal Group since August 2023 has been an incredible opportunity to apply and develop a wide range of skills. My focus on leadership, organization, project management, entrepreneurship, programming, and customer service has been essential to the growth and continued success of our company in the software development industry.",
    fr: "Mon expérience en tant que co-fondateur de Vizal Group depuis août 2023 a été une incroyable opportunité d'appliquer et de développer un large éventail de compétences. Mon accent sur le leadership, l'organisation, la gestion de projet, l'entrepreneuriat, la programmation et le service client a été essentiel à la croissance et au succès continu de notre entreprise dans le secteur du développement de logiciels.",
  };

  const healthExperience = {
    es: "Técnico en laboratorio clínico e histopatologia",
    en: "Clinical laboratory and histopathology technician",
    fr: "Technicien de laboratoire clinique et d'histopathologie",
  };

  const healthDescription = {
    es: "Mi trayectoria como técnico en laboratorio clínico adquiere una dimensión especial en mi perfil como profesional en desarrollo de software. Comencé a trabajar en este campo justo al inicio de la pandemia por COVID-19, lo que moldeó profundamente mi enfoque y valores. Desde el mundo de la salud, aprendí a centrarme en las personas. Colaboré estrechamente con diversos equipos en situaciones críticas y de gran incertidumbre. Esta experiencia me ha inculcado la importancia de la empatía y la comprensión en cualquier proyecto que emprendo. Mis soluciones siempre buscan simplificar la vida del usuario, sin perder de vista la excelencia técnica. Esta perspectiva única, basada en mis años de servicio en el sector de la salud, aporta una valiosa sensibilidad a mis proyectos de desarrollo de software. Mi trabajo se traduce en soluciones que son tanto funcionales como humanas, uniendo lo mejor de ambos mundos para crear experiencias de usuario excepcionales.",
    en: "My background as a clinical laboratory and histopathology technician takes on a special dimension in my profile as a software development professional. I began working in this field at the onset of the COVID-19 pandemic, which deeply shaped my focus and values. From the realm of healthcare, I learned to center my efforts around people. I closely collaborated with diverse teams in critical and highly uncertain situations. This experience has instilled in me the importance of empathy and understanding in every project I undertake. My solutions always aim to simplify the user's life while maintaining a high technical standard. This unique perspective, based on my years of service in the healthcare sector, brings valuable sensitivity to my software development projects. My work translates into solutions that are both functional and human, bridging the best of both worlds to create exceptional user experiences.",
    fr: "Mon parcours en tant que technicien de laboratoire clinique et d'histopathologie revêt une dimension particulière dans mon profil en tant que professionnel du développement logiciel. J'ai commencé à travailler dans ce domaine au début de la pandémie de COVID-19, ce qui a profondément influencé ma vision et mes valeurs. Issu du domaine de la santé, j'ai appris à mettre l'accent sur les personnes. J'ai collaboré étroitement avec diverses équipes dans des situations critiques et très incertaines. Cette expérience m'a inculqué l'importance de l'empathie et de la compréhension dans chaque projet que j'entreprends. Mes solutions visent toujours à simplifier la vie de l'utilisateur tout en maintenant un haut niveau technique. Cette perspective unique, basée sur mes années de service dans le secteur de la santé, apporte une sensibilité précieuse à mes projets de développement logiciel. Mon travail se traduit par des solutions à la fois fonctionnelles et humaines, unissant le meilleur des deux mondes pour créer des expériences utilisateur exceptionnelles.",
  };

  const education = {
    es: "Educación",
    en: "Education",
    fr: "Éducation",
  };

  const soyHenry = {
    es: "Soy Henry es el bootcamp mas grande de latinoamerica de entrenamiento intensivo donde crecí y aprendí de forma intensiva diferentes tecnologías para manejar desde principio a fin el desarrollo de proyectos de forma integral desde la base de datos hasta lo renderizado que va ser visto por el usuario final.",
    en: "Soy Henry is the largest bootcamp in Latin America for intensive training where I grew up and intensively learned different technologies to manage the development of projects from start to finish in a comprehensive manner, from the database to the rendering that will be seen by the end user.",
    fr: "Soy Henry est le plus grand bootcamp d'Amérique Latine pour une formation intensive où j'ai grandi et appris intensivement différentes technologies pour gérer le développement de projets du début à la fin de manière globale, de la base de données au rendu qui sera vu par l'utilisateur final.",
  }

   

  return (
    <div className={style.container}>
      <div className={style.containerName}>
        <h1 className={style.name}>{name}</h1>
        <h2 className={style.subtitle}>
          Full Stack Developer | React | Redux | NodeJS | JavaScript |
          PostgreSQL | HTML | CSS | MongoDB | SendGrid | MySQL | PHP | EmailJS |
          Bootstrap
        </h2>
      </div>

      <Container>
        <h2 className="mt-5 mb-4">{aboutMe[selectedLanguage]}</h2>
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">
                  {contactInformation[selectedLanguage]}
                </Card.Title>
                <Card.Text>
                  <AiOutlineWhatsApp /> WhatsApp:{" "}
                  <a href="https://api.whatsapp.com/send?phone=3512079515">
                    +54 9 351 2079-515
                  </a>
                </Card.Text>
                <Card.Text>
                  <AiOutlineMail /> E-Mail:{" "}
                  <a href="mailto:avillamayor720@gmail.com">
                    avillamayor720@gmail.com
                  </a>
                </Card.Text>
                <Card.Text>
                  <AiFillLinkedin /> LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/alejandro-villamayor-7089ba1a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alejandro Villamayor
                  </a>
                </Card.Text>
                <Card.Text>
                  <AiFillGithub /> GitHub:{" "}
                  <a
                    href="https://github.com/Alejandrov98"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alejandrov98
                  </a>
                </Card.Text>
                <Card.Title className="mb-4">
                  {location[selectedLanguage]}
                </Card.Title>
                <Card.Text>
                  <AiFillEnvironment />{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ciudad+de+Villa+Allende,Córdoba,Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Villa Allende
                  </a>
                  , Córdoba, Argentina
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">
                  {professionalExperience[selectedLanguage]}
                </Card.Title>
                <h5>{cofounder[selectedLanguage]}</h5>
                <Card.Text className={style.textJustify}>
                  {experience[selectedLanguage]}
                </Card.Text>
                <Card.Title className="mb-4">
                  {healthExperience[selectedLanguage]}
                </Card.Title>
                <Card.Text className={style.textJustify}>
                  {healthDescription[selectedLanguage]}
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">
                  {education[selectedLanguage]}
                </Card.Title>
                  <Card.Text><h6>
                    "Soy Henry"
            </h6>
            {soyHenry[selectedLanguage]}
            <Card.Title>
              <br />
            
            </Card.Title>

                  </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col xs={12} md={6}>
            <Image src={profile} thumbnail />
            <br />
            <br />
            <Card>
              <Card.Body>
              <Card.Title className="mb-4">
              <h6>Fundación Santa María la Real</h6>
              </Card.Title>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </div>
  );
}
