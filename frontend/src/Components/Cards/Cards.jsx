// Importation de link a partir de react router dom
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards(props) {
  // Importation des données de logements sur le fichier .json
  const discography = require("../../Data/AlbumInformation.json");

  return (
    <div className="div-cards">
      {/* bouclage avec .map() pour afficher les albums grâce a l'id
      ainsi que la photo de couverture de l'album  et son titre */}
      {discography.map((album) => (
        <Link className="links" to={"/discography/" + album.id} key={album.id}>
          <ul
            className="cards card-home"
            style={{ backgroundImage: `url(${album.cover})` }}
          >
            <li className="li">
              <div className="text-shadow">{album.title}</div>
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
}
