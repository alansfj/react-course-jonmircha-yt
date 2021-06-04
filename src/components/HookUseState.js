import React from "react";

export default function HookUseState(props) {
  const [contador, setContador] = React.useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Hook - Use State</h2>
      <button onClick={sumar}>+1</button>
      <button onClick={restar}>-1</button>
      <h5>Contador: {contador}</h5>
    </div>
  );
}
