import './Shows.css';

export default function Shows(props) {
  // Importation des données de logements sur le fichier .json
  const showsData = require('../../Data/show.json');

  return (
    <div className=" upcoming-show show-card">
      <h2 className="show-title">Tour 2023</h2>
      <div className="showlist__container">
        {showsData.map((show) => (
          <li className="showlist">
            <a href={show.linktovenue} key={show.title} className="linktovenue">
              {show.info}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
