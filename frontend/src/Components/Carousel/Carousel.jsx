import "./Carousel.css";

export default function Carousel(props) {
  return (
    <div className="carousel-container">
      {/* Bouclage avec .map sur les images pour toute les envoyer dans l'espace carousel */}
      {props.pictures.map((picture) => (
        <img
          className="carousel-container-img"
          alt="Pochette de l'album"
          src={picture}
          key={picture}
        />
      ))}
      {/* Espace des contrôles du carousel: Gauche <=> Droite */}
    </div>
  );
}
