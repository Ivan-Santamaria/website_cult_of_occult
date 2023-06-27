import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  AlbumTitle,
  AlbumSongs,
  BuyAlbum,
} from '../../Routes/ComponentsRoutes';
import { DynamicTitle } from '../../Adds/DynamicTitle';
import './Album.css';

export default function Album() {
  const { id } = useParams();
  const [albumDetail, setAlbumDetail] = useState([]);
  useEffect (() => {
     fetch(`http://localhost:3000/api/albums/${id}`)
      .then((response) =>  {
        return response.json();
      })
      .then((json) => setAlbumDetail(json))
      .catch((error) => console.error(error));
  }, [id]);

  // if (!albumDetailId) {
  //   console.log('adieu');
  //   return <Navigate to="/notfound" />;
  // }

  DynamicTitle('Cult Of Occult || ' + albumDetail.albumName);
  return (
    <main className="body body-album">
      <div className="carousel-container">
        <img
          className="carousel-container-img"
          alt={
            "Artwork de l'album " +
            albumDetail.albumName +
            ' par Cult Of Occult'
          }
          src={albumDetail.imageUrl}
          key={albumDetail.albumName}
        />
      </div>
      <div className="album-informations">
        <AlbumTitle title={albumDetail.albumName} />
        <ol className="album-songs">
          {albumDetail?.songs?.map((song) => (
            <AlbumSongs title={song} key={song} />
          ))}
        </ol>
        <BuyAlbum title={albumDetail.bandcamp} />
      </div>
    </main>
  );
}
