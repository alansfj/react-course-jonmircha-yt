import React from "react";

class Reloj extends React.Component {
  componentWillUnmount() {
    // console.log(
    //   3,
    //   "El componente ha sido eliminado del DOM (componentWillUnmount)"
    // );
  }
  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.timerID = null;
    this.isTimerRunning = false;

    // console.log(
    //   0,
    //   "El componente se inicializa, aún no esta en el DOM (Constructor)"
    // );
  }

  componentDidMount() {
    // console.log(1, "El componente ya esta en el DOM (componentDidMount)");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   2,
    //   "El estado o las props del componente han cambiado (componentDidUptdate)"
    // );
    // console.log(prevProps);
    // console.log(prevState);
  }

  changeState = () => {
    this.setState({ hora: new Date().toLocaleTimeString() });
  };

  tick = () => {
    this.setState({ visible: true });
    if (!this.isTimerRunning) {
      this.timerID = setInterval(this.changeState, 1000);
      this.isTimerRunning = true;
    }
  };

  inicia = () => {
    this.tick();
  };

  detener = () => {
    clearInterval(this.timerID);
    this.isTimerRunning = false;
    this.setState({ visible: false });
  };

  render() {
    // console.log(
    //   4,
    //   "El componente se renderiza (o se re-renderiza por algún cambio) en el DOM (Render)"
    // );
    return (
      <>
        <h2>Ciclo de vida de Componentes de Clase</h2>
        {this.state.visible ? <Reloj hora={this.state.hora} /> : ""}
        <button onClick={this.inicia}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
