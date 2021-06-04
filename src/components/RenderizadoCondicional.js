import React from "react";

function Login() {
  return <p>Login</p>;
}

function Logout() {
  return <p>Logout</p>;
}

export default class RenderizadoCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sesion: true,
    };
  }
  render() {
    return (
      <div>
        <h2>RenderizadoCondicional</h2>
        <h3>{this.state.sesion ? <Login /> : <Logout />}</h3>
      </div>
    );
  }
}
