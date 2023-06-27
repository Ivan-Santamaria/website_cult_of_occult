import './Shows.css';
import { useEffect, useState } from 'react';

export default function Shows(props) {
  //? ! En cas d'erreur fetch !
  // const data = require('../../Data/ShowInformation.json');
  //? ! En cas d'erreur fetch !

  // Faire une fonction permettant la récupération de la date
  // Comparer la date avec, la data actuelle
  // Si la date est passée l'envoyer dans les dates passées
  // Sinon la garder en avan

  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/shows/')
      .then((response) => response.json())
      .then((json) => setShows(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className=" upcoming-show show-card">
      <h2 className="show-title"> Events </h2>
      <div className="showlist__container">
        {shows.map((show) => (
          <li className="showlist" key={show._id}>
            <a href={show.linktovenue} key={show.name} className="linktovenue ">
              {show.info}
            </a>
          </li>
        ))}
        {console.log('🚀 ~ file: Shows.jsx:29 ~ Shows ~ data:', shows)}
      </div>
    </div>
  );
}
