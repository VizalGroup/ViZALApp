import React from "react";
import style from "./Description.module.css";

export default function Description({ selectedLanguage, onLanguageChange }) {
  const titles = {
    es: "¡Bienvenido a ViZal Group!",
    en: "Welcome to ViZalGroup!",
    fr: "Bienvenue chez ViZal Group !",
  };

  const text = {
    es: (
      <>
        ViZal Group es un grupo de profesionales autónomos que cree en la
        sinergia como medio para lograr resultados de calidad para nuestros
        clientes, nos enfocamos en brindarte soluciones para tus necesidades del
        tipo emprendedoras, Contamos con un equipo de gestión de proyectos,
        desarrollo de software, diseño gráfico, experiencia de usuario (UX) y
        traducciones. <br />
        <br />
        ¡No dudes en contactarnos! <br />
        <br />
        <h3 className={style.subtitle}>¿Cómo Trabajamos?</h3>
        Nos enfocamos en entender tus necesidades de la manera más detallada
        posible. Para ello, te invitamos a comunicarte con nosotros por correo
        electrónico (vizalgroup0@gmail.com) y contarnos qué es lo que necesitas.
        Si lo prefieres, también podemos coordinar una videoconferencia para
        transmitirnos la idea de forma más directa. Para solicitar una cotización de tu proyecto haz
        click{" "}
        <a className={style.souligner} href="/contact">
          aquí
        </a>
        ! <br />
        <br />
        Una vez que entendemos tus requerimientos, trabajamos utilizando
        metodologías ágiles. Esto implica tener reuniones periódicas contigo,
        nuestro cliente, para mostrarte los avances del proyecto. Esta
        interacción constante nos permite amoldar el proyecto a tus necesidades
        y gustos a medida que avanzamos. <br />
        <br />
        Nuestro objetivo es proporcionar soluciones web de calidad que se
        adapten a tus expectativas. Durante todo el proceso, te invitamos a ser
        parte activa en la toma de decisiones y a modificar cualquier aspecto
        que consideres necesario. <br />
        <br />
        Estamos comprometidos en brindarte un servicio personalizado y
        transparente. Además, estableceremos un presupuesto para tu proyecto de
        manera rápida y eficiente. <br />
        <br />
        ¡Estamos entusiasmados por trabajar contigo y llevar tu proyecto web al
        siguiente nivel!
      </>
    ),
    en: (
      <>
        <p>
          ViZal Group is a group of freelance professionals who believe in
          synergy as a means to achieve quality results for our clients. We
          focus on providing solutions for your entrepreneurial needs, and we
          have a team dedicated to project management, software development,
          graphic design, user experience (UX), and translations.
        </p>

        <p>Don't hesitate to contact us!</p>

        <h3 className={style.subtitle}>How Do We Work?</h3>

        <p>
          We focus on understanding your needs in the most detailed way
          possible. To do so, we invite you to reach out to us via email
          (vizalgroup0@gmail.com) and tell us what you need. If you prefer, we
          can also arrange a video conference to directly convey the idea. To request a quote for your project, click{" "}
          <a className={style.souligner} href="/contact">
            here
          </a>
          !
        </p>

        <p>
          Once we understand your requirements, we work using agile
          methodologies. This involves having regular meetings with you, our
          client, to show you the progress of the project. This constant
          interaction allows us to tailor the project to your needs and
          preferences as we move forward.
        </p>

        <p>
          Our goal is to provide quality web solutions that meet your
          expectations. Throughout the process, we invite you to actively
          participate in decision-making and modify any aspect you deem
          necessary.
        </p>

        <p>
          We are committed to providing personalized and transparent service.
          Additionally, we will provide a budget for your project quickly and
          efficiently.
        </p>

        <p>
          We are excited to work with you and take your web project to the next
          level!
        </p>
      </>
    ),
    fr: (
      <>
        <p>
          ViZal Group est un groupe de professionnels indépendants qui croient
          en la synergie comme moyen d'obtenir des résultats de qualité pour nos
          clients. Nous nous concentrons sur la fourniture de solutions pour vos
          besoins entrepreneuriaux et nous disposons d'une équipe dédiée à la
          gestion de projet, au développement de logiciels, à la conception
          graphique, à l'expérience utilisateur (UX) et traductions.
        </p>

        <p>N'hésitez pas à nous contacter !</p>

        <h3 className={style.subtitle}>Comment travaillons-nous ?</h3>

        <p>
          Nous nous concentrons sur la compréhension de vos besoins de la
          manière la plus détaillée possible. Pour cela, nous vous invitons à
          nous contacter par e-mail (vizalgroup0@gmail.com) et à nous dire ce
          dont vous avez besoin. Si vous préférez, nous pouvons également
          organiser une visioconférence pour transmettre directement l'idée.
          Pour demander un devis pour votre projet, cliquez{" "}
          <a className={style.souligner} href="/contact">
            ici
          </a>{" "}
          !
        </p>

        <p>
          Une fois que nous comprenons vos exigences, nous travaillons en
          utilisant des méthodologies agiles. Cela implique d'avoir des réunions
          régulières avec vous, notre client, pour vous montrer l'avancement du
          projet. Cette interaction constante nous permet d'adapter le projet à
          vos besoins et préférences au fur et à mesure de notre avancée.
        </p>

        <p>
          Notre objectif est de fournir des solutions web de qualité qui
          répondent à vos attentes. Tout au long du processus, nous vous
          invitons à participer activement à la prise de décision et à modifier
          tout aspect que vous jugez nécessaire.
        </p>

        <p>
          Nous nous engageons à fournir un service personnalisé et transparent.
          De plus, nous établirons un budget pour votre projet de manière rapide
          et efficace.
        </p>

        <p>
          Nous sommes impatients de travailler avec vous et de faire passer
          votre projet web au niveau supérieur !
        </p>
      </>
    ),
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>{titles[selectedLanguage]}</h2>
      <p className={style.text}>{text[selectedLanguage]}</p>
    </div>
  );
}
