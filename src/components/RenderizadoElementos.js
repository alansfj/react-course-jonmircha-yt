import React from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blanck" rel="noopener">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ["Primavea", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <ul>
          {this.state.season.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <h3>Frameworks Frontend</h3>
        <ul>
          {data.frameworks.map(el => {
            return <ElementoLista el={el} key={el.id} />;
          })}
        </ul>
      </div>
    );
  }
}
