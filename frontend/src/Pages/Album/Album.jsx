import { Navigate, useParams } from 'react-router-dom';
import {
  AlbumTitle,
  AlbumSongs,
  BuyAlbum,
  Carousel,
} from '../../Routes/ComponentsRoutes';
import { DynamicTitle } from '../../Adds/DynamicTitle';
import './Album.css';

export default function Album() {
  // Utilisation de useParams afin de récupérer les paramètres dans l'URL
  let params = useParams();
  // Récupération des logements dans le fichier json
  const albums = require('../../Data/AlbumInformation.json');

  // Utilisation de .find() pour trouver l'information désirée dans le fichier json
  // Utilisation de params pour cibler la recherche avec l'id correspondant
  const album = albums.find((x) => x.id === params.id);

  // Si aucun élément correspondant n'est trouvé => page 404 avec Navigate
  if (!album) {
    return <Navigate to="/notfound" />;
  }
  // Récupération du nom donné à l'annonce, et injection dans le titre de l'onglet.
  DynamicTitle('Cult Of Occult || ' + album.title);
  return (
    <main className="body body-album">
      {' '}
      {/* Récupération des images de l'annonce */}
      <Carousel pictures={album.imageUrl} />
      <div className="album-informations">
        {' '}
        <AlbumTitle title={album.title} />{' '}
        <ol className="album-songs">
          {album.songs.map((song) => (
            <AlbumSongs title={song} key={song} />
          ))}
        </ol>
        <BuyAlbum title={album.bandcamp} />
      </div>
    </main>
  );
}
