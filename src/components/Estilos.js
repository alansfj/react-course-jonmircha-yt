import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hoja CSS externa</h3>
      <h3 style={{ backgroundColor: "grey" }}>Estilos en linea</h3>
      <h3 className={moduleStyles.style}>Estilos en Modulos</h3>
    </section>
  );
}
