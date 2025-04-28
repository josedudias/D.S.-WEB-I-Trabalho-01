import "./App.css";
import React, { Suspense, useState } from "react";
import TypesBar from "./components/TypesBar";
import PokemonsContainer from "./components/PokemonsContainer";
import Modal from "./components/modal/Modal";
import { PokemonModalProvider } from "./context/PokemonModalProvider";
import Loader from "./components/Loader";

function App() {
  const [type, setType] = useState("ice");

  return (
    <Suspense fallback={<Loader />}>
      <PokemonModalProvider>
        <div className="wrapper">
          <h1 className="logo-pokemon">PokéCollector</h1>
          <TypesBar toggleType={setType} />
          <div className="main-content">
            <PokemonsContainer type={type} />
          </div>
          <footer className="footer">
            <p>
              &copy; {new Date().getFullYear()} Desenvolvido por José Eduardo
              Dias Rufino. Todos os direitos reservados.
            </p>
          </footer>
        </div>
        <Modal />
      </PokemonModalProvider>
    </Suspense>
  );
}

export default App;
