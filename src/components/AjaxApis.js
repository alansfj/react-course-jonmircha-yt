import React from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.pokemon.img} alt={props.pokemon.name} />
      <figcaption>
        Pokemons #{props.pokemon.id}
        <br />
        {props.pokemon.name}
      </figcaption>
    </figure>
  );
}

export default class AjaxApsi extends React.Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then(response => response.json())
      .then(json => {
        json.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(res => res.json())
            .then(json => {
              // console.log(json);
              let pokemonsObj = {
                id: json.id,
                name: json.name,
                img: json.sprites.front_default,
              };

              let pokemons = [...this.state.pokemons, pokemonsObj];

              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones asíncronas en Componentes de Clase</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {this.state.pokemons.length === 20 ? (
            this.state.pokemons.map(pokemon => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <h3>Cargando...</h3>
          )}
        </div>
      </>
    );
  }
}
