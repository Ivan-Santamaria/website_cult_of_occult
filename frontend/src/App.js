import { NavBar, Footer, ScrollToTop } from "./Routes/ComponentsRoutes.jsx";
import { About, NotFound } from "./Routes/PagesRoutes.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  // DynamicTitle("Kasa");
  return (
    <div className="App">
      <NavBar />
      {/* <Header />  */}
      {/* <main className="main">
        <h1 className="title">Acceuil</h1>
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>{" "}
        <p className="paragraphe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestiae nisi odit, error deserunt culpa. Officiis voluptatem iure,
          ab delectus quasi quibusdam eos cupiditate minima quo ea quam pariatur
          error?
        </p>
      </main> */}
      <Routes>
        <Route path="about" element={<About />} />s
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
