import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

export const Button = styled.div`
  right: 0.1em;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  position: fixed;
  z-index: 999;
  cursor: pointer;
  color: white;
  filter: blur(1px);
  &:hover {
    filter: blur(0px);
  }
  @media screen and (min-width: 1024px) {
    bottom: 1.5em;
    right: 0.5em;
  }
`;

export default function ScrollToTop() {
  // Le state du bouton n'est pas visible par default
  const [visible, setVisible] = useState(false);

  // Si le scroll est supérieur à 300px depuis le haut de page affiche le bouton, sinon il disparait "scroll manuel" ou n'apparait pas "par defaut"
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  // Renvoi vers le top de la page comportement => doux
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  // Envoi à l'utilisateur le logo
  return (
    <Button className="scroll-to-top-btn">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
}
