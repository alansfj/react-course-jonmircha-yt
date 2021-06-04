import React from "react";

function ComponenteHijo(props) {
  return <p>{props.state}</p>;
}

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1,
    //   });
    // }, 1000);
  }
  render() {
    return (
      <div>
        <h2>State</h2>
        <h3>{this.state.contador}</h3>
        <ComponenteHijo state={this.state.contador} />
      </div>
    );
  }
}
