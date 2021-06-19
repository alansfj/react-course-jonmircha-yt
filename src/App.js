import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Component from "./components/Component";
import { Props } from "./components/Props";
import State from "./components/State";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApsi from "./components/AjaxApis";
import HookUseState from "./components/HookUseState";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        {/* Codigo mio */}
        <section>
          <Component />
          <hr />
          <Props
            string="string"
            number={4}
            boolean={true}
            array={[1, 2, 3]}
            object={{ name: "Alan", age: 23 }}
            reactElement={<i>Elemento de react</i>}
            function={num => num * num}
            reactComponent={<Component />}
          />
          <hr />
          <State />
          <p>Estado heredado del componente Padre</p>
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApsi />
          <hr />
          <HookUseState />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
        </section>
      </header>
    </div>
  );
}

export default App;
