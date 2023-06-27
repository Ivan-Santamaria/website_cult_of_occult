import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Cards.css';

export default function Cards(props) {
  //? ! En cas d'erreur fetch !
  // const discography = require('../../Data/AlbumInformation.json');
  //? ! En cas d'erreur fetch !

  const [discography, setDiscography] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/albums/')
      .then((response) => response.json())
      .then((json) => setDiscography(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="div-cards">
      {discography.map((album) => (
        <Link
          className="links"
          to={'/discography/' + album._id}
          key={album.albumName}
          alt={"Artworks de l'album " + album.albumName + ' par Cult Of Occult'}
        >
          <ul
            className="cards card-home"
            style={{ backgroundImage: `url(${album.imageUrl})` }}
          >
            <li className="li">
              <div className="text-shadow">{album.albumName}</div>
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
}
