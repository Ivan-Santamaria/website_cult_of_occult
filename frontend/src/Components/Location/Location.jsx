import "./Location.css";

export default function Location(props) {
  return (
    <div>
      <div className="location-container">
        {/* Utilisation de props pour la récupération de la localisation de l'annonce */}
        <div className="location">{props.location}</div>
      </div>
    </div>
  );
}
