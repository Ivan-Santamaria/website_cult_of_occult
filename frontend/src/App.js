import { NavBar, Footer, ScrollToTop } from './Routes/ComponentsRoutes.jsx';
import {
  Home,
  Discography,
  NotFound,
  Album,
  Contact,
} from './Routes/PagesRoutes.jsx';
import { Routes, Route } from 'react-router-dom';
import { DynamicTitle } from '../src/Adds/DynamicTitle.jsx';
import './App.css';

const App = () => {
  DynamicTitle('Cult Of Occult');
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="discography" element={<Discography />} />
        <Route path="discography/:id" element={<Album />} />
        <Route path="*" element={<NotFound />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
