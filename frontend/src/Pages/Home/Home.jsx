import { DynamicTitle } from '../../Adds/DynamicTitle';
import { Shows, Banner } from '../../Routes/ComponentsRoutes';
import './Home.css';

export default function Home() {
  // Modification du titre de l'onglet
  DynamicTitle('Cult Of Occult || Home');
  return (
    <main className="body body-home">
      {' '}
      <div className="home__banner--container">
        <Banner content="" />
      </div>
      <Shows />
    </main>
  );
}
