import PropTypes from "prop-types";

export const Props = props => {
  return (
    <div>
      <h3>
        Uso del objeto <code>props</code>
      </h3>
      <ul>
        <li>{props.valor}</li>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "true" : "false"}</li>
        <li>{props.array.join(", ")}</li>
        <li>
          {props.object.name} - {props.object.age}
        </li>
        <li>{props.reactElement}</li>
        <li>{props.array.map(props.function).join(", ")}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
};

Props.defaultProps = {
  valor: "Valor por defecto",
};

Props.propTypes = {
  number: PropTypes.number.isRequired,
};
