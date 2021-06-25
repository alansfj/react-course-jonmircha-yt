/* eslint-disable no-unused-vars */
import React from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados";

function App() {
  return (
    <>
      <h1>Ejercicios React</h1>
      <hr />
      <h2>SelectsAnidados (comentado)</h2>
      {/* <SelectsAnidados /> */}
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
