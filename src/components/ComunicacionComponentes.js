import React from "react";

export default class ComunicacionComponentes extends React.Component {
  state = {
    contador: 0,
  };

  incrementarContador = e => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <p>Contador: {this.state.contador}</p>
        <Hijo
          msg="Mensaje para el hijo 1"
          incrementarContador={this.incrementarContador}
        />
        <Hijo
          msg="Mensaje para el hijo 2"
          incrementarContador={this.incrementarContador}
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h4>{props.msg}</h4>
      <button onClick={props.incrementarContador}>+1</button>
    </>
  );
}
