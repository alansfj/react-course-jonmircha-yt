import React, { useState, useEffect } from "react";

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

export default function AjaxHooks(props) {
  const [pokemons, setPokemons] = useState([]);

  // fetch SIN async-await

  //   useEffect(() => {
  //     let url = "https://pokeapi.co/api/v2/pokemon/";
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(json => {
  //         json.results.forEach(pokemon => {
  //           fetch(pokemon.url)
  //             .then(res => res.json())
  //             .then(json => {
  //               // console.log(json);
  //               let pokemonsObj = {
  //                 id: json.id,
  //                 name: json.name,
  //                 img: json.sprites.front_default,
  //               };

  //               setPokemons(pokemons => [...pokemons, pokemonsObj]);
  //             });
  //         });
  //       });
  //   }, []);

  // fetch CON async-await
  useEffect(() => {
    const getPokemons = async url => {
      let res = await fetch(url);
      let json = await res.json();

      json.results.forEach(async el => {
        let res = await fetch(el.url);
        let json = await res.json();

        let pokemonsObj = {
          id: json.id,
          name: json.name,
          img: json.sprites.front_default,
        };

        setPokemons(pokemons => [...pokemons, pokemonsObj]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h2>Peticiones asíncronas con Hooks</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {pokemons.length === 20 ? (
          pokemons.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h3>Cargando...</h3>
        )}
      </div>
    </>
  );
}
