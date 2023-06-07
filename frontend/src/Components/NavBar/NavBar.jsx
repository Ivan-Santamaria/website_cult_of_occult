import React from 'react';
import './NavBar.css';
import Logo from '../../img/cult_of_occult_mandala_alt.jpeg';
import { FaBandcamp } from 'react-icons/fa';
import NameLogo from '../../img/cult_of_occult_banner.png';
import { useState } from 'react';

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <div className="navbar__logomandala--container">
        <img
          src={Logo}
          alt="Logo d'en tête du site du groupe de Doom Sludge Cult Of Occult"
          className="logo-navbar--mandala"
        />
      </div>
      <div className="navbar__logobandname--container">
        <img
          src={NameLogo}
          alt="Logo d'en tête du site du groupe de Doom Sludge Cult Of Occult"
          className="logo-navbar--name"
        />
      </div>
      <nav className="navbar__links--container">
        <ul className="navbar__links">
          <li className="navbar__item slideInDown-1">
            <a href="/" className="navbar__link">
              Home
            </a>
          </li>
          <li className="navbar__item slideInDown-3">
            <a
              href="https://cultofoccult.bandcamp.com/merch"
              className="navbar__link"
            >
              Music Store <FaBandcamp />
            </a>
          </li>
          <li className="navbar__item slideInDown-4">
            <a href="/discography" className="navbar__link">
              Discography
            </a>
          </li>
          <li className="navbar__item slideInDown-5">
            <a href="/contact" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>
        <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </header>
  );
}
