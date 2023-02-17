// Importation de la banier et de l'accordéon
// Importation du titre
// Importation du css
import { Accordion, Banner, Cards } from "../../Routes/ComponentsRoutes";
// import { DynamicTitle } from "../../components/DynamicTitle/DynamicTitle.jsx";
import "./About.css";

// Importation du fichier json contenant les information de la page Apropos
// L'utilisation d'un fichier json va permettre la simplification des mises à jour du site
// L'administrateur pourra ajouter et retirer des éléments sans toucher au code
const aboutData = require("../../Data/AboutData.json");

export default function About() {
  // Modification du titre de l'onglet
  //   DynamicTitle("Kasa - À Propos");

  return (
    <main className="body about">
      <div className="about__banner--container">
        {/* Injection de la banière */}
        <Banner content="About Us" />
      </div>
      {/* Utilisation de .map pour boucler la récupation du titre et du contenu, pour un ajout simplifié par les gérants du site  */}
      <div className="accordion-about-container">
        {aboutData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
      <div className="discography--container">
        <h2 className="discography--title">Discography</h2>
        <Cards />
      </div>
    </main>
  );
}
