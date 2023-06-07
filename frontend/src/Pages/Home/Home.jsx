import { DynamicTitle } from '../../Adds/DynamicTitle';
import './Home.css';
import { useState } from 'react';

// Importation du fichier json contenant les information de la page Apropos
// L'utilisation d'un fichier json va permettre la simplification des mises à jour du site
// L'administrateur pourra ajouter et retirer des éléments sans toucher au code

export default function Home() {
  const [msg, setMsg] = useState('');
  const handleClick = async () => {
    const data = await window.fetch('/api/home');
    const json = await data.json();
    console.log(json);
  };
  // Modification du titre de l'onglet
  DynamicTitle('Cult Of Occult || Home');
  return (
    <main className="body body-home">
      <div className="home__container">
        <button onClick={handleClick}>Dis bonjour</button>
        <p>{msg}</p>
      </div>
    </main>
  );
}
