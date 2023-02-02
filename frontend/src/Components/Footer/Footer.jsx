// Importation de Link depuis react-router-dom
import { Link } from "react-router-dom";
// import "./Header.css";
import Logo from "../../img/cult_of_occult_banner.png";
import { FaBandcamp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-display">
        <div className="margin-top-bottom">
          {/* Renvoi vers la page d'acceuil */}
          <Link to="/" className="link link-footer">
            <img
              src={Logo}
              alt="Logo de pied de page du groupe Cult Of Occult"
              className="logo-footer"
            />
          </Link>
        </div>
        <div className="links-to-social-media">
          <div className="link-to-social-media-bandcamp">
            <Link
              to="https://cultofoccult.bandcamp.com/"
              className="link-to-bandcamp"
            >
              <FaBandcamp />
            </Link>
          </div>
          <div className="link-to-social-media-facebook">
            <Link
              to="https://fr-fr.facebook.com/cultofoccult/"
              className="link-to-facebook"
            >
              <FaFacebook />
            </Link>
          </div>
          <div className="link-to-social-media-instagram">
            <Link
              to="https://www.instagram.com/cult_of_occult/?hl=fr"
              className="link-to-facebook"
            >
              <FaInstagram />
            </Link>
          </div>
          <div className="link-to-social-media-youtube">
            <Link
              to="https://www.youtube.com/@cultofoccult"
              className="link-to-facebook"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="copyrights__container">
          <p className="copyrights">
            © 2023 Cult Of Occult. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
