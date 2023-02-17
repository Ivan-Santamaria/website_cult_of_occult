// Importation de link a partir de react router dom
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards(props) {
  // Importation des données de logements sur le fichier .json
  const annonces = require("../../Data/AlbumInformation.json");

  return (
    <div className="div-cards">
      {/* bouclage avec .map() pour afficher les annonces grâce a l'id
      ainsi que la photo de couverture de l'annonce et son titre */}
      {annonces.map((annonce) => (
        <Link
          className="links"
          to={"/fichelogement/" + annonce.id}
          key={annonce.id}
        >
          <ul
            className="cards card-home"
            style={{ backgroundImage: `url(${annonce.cover})` }}
          >
            <li className="li">
              <div className="text-shadow">{annonce.title}</div>
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
}
