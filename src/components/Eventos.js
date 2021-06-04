import React from "react";

export class EventosES6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  restar() {
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <button onClick={this.sumar}>+1</button>
        <button onClick={this.restar}>-1</button>
        <h5>Contador: {this.state.contador}</h5>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends React.Component {
  state = {
    contador: 0,
  };

  sumar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  restar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <button onClick={this.sumar}>+1</button>
        <button onClick={this.restar}>-1</button>
        <h5>Contador: {this.state.contador}</h5>
      </div>
    );
  }
}

// Componente Auxiliar
const BotonComponente = props => (
  <button onClick={props.myOnClick}>Boton Componente</button>
);

// Más sobre Eventos
export class MasSobreEventos extends React.Component {
  state = {
    showingMessage: "Presiona cualquier Boton",
  };

  handleClick = (e, myMessage) => {
    // console.log(e);                     Evento Sintetico de React
    // console.log(e.nativeEvent);         Evento Nativo de JS
    // console.log(e.target);              Target Sintetico de React
    // console.log(e.nativeEvent.target);  Target Nativo de JS

    this.setState({ showingMessage: myMessage });
  };

  render() {
    return (
      <div>
        <h2>Más sobre Eventos</h2>
        <button
          onClick={e => this.handleClick(e, "Presionaste el Boton Elemento")}
        >
          Boton Elemento
        </button>
        <BotonComponente
          myOnClick={e =>
            this.handleClick(e, "Presionaste el Boton Componente")
          }
        />
        <p>{this.state.showingMessage}</p>
      </div>
    );
  }
}
