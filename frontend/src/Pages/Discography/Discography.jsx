import { Accordion, Banner, Cards } from '../../Routes/ComponentsRoutes';
import { DynamicTitle } from '../../Adds/DynamicTitle';
import './Discography.css';

const aboutData = require('../../Data/AboutData.json');

export default function Discography() {
  DynamicTitle('Cult Of Occult || Discography');
  return (
    <main className="body body-discography">
      <div className="discography__banner--container">
        <Banner content="Discography" />
      </div>
      <div className="accordion-discography-container">
        {aboutData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
      <Cards />
    </main>
  );
}
