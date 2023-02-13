import "./App.css";
import Personajes from "./components/Personajes/index";
import Episodios from "./components/Episodios";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import DetallesPersonajes from "./components/DetallesPersonaje";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <h1 className="title">Rick and Morty</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route
          path="/personajes/detalles/:idPersonajes"
          element={<DetallesPersonajes />}
        />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
