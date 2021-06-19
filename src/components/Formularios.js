/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Formularios() {
  //   const [nombre, setNombre] = useState("");
  //   const [color, setColor] = useState("");
  //   const [lenguaje, setLenguaje] = useState("");
  //   const [terminos, setTerminos] = useState(false);

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     alert("El formulario se ha enviado");
  //   };

  //   return (
  //     <>
  //       <h2>Formularios</h2>
  //       <form onSubmit={handleSubmit}>
  //         <label htmlFor="nombre">Nombre:</label>
  //         <input
  //           type="text"
  //           id="nombre"
  //           name="nombre"
  //           value={nombre}
  //           onChange={e => setNombre(e.target.value)}
  //         />
  //         <p>Elije tu color favorito</p>
  //         <input
  //           type="radio"
  //           id="azul"
  //           name="color"
  //           value="azul"
  //           onChange={e => setColor(e.target.value)}
  //           defaultChecked
  //         />
  //         <label htmlFor="azul">Azul</label>
  //         <input
  //           type="radio"
  //           id="negro"
  //           name="color"
  //           value="negro"
  //           onChange={e => setColor(e.target.value)}
  //         />
  //         <label htmlFor="negro">Negro</label>
  //         <input
  //           type="radio"
  //           id="verde"
  //           name="color"
  //           value="verde"
  //           onChange={e => setColor(e.target.value)}
  //         />
  //         <label htmlFor="verde">Verde</label>
  //         <p>Elije tu lenguaje de programación favorito</p>
  //         <select
  //           name="lenguaje"
  //           onChange={e => setLenguaje(e.target.value)}
  //           defaultValue=""
  //         >
  //           <option value="">----</option>
  //           <option value="js">Javascript</option>
  //           <option value="py">Python</option>
  //           <option value="go">Go</option>
  //         </select>
  //         <br />
  //         <input
  //           type="checkbox"
  //           id="terminos"
  //           name="terminos"
  //           onChange={e => setTerminos(e.target.checked)}
  //         />
  //         <label htmlFor="terminos">Acepto términos y condiciones</label>
  //         <br />
  //         <input type="submit" />
  //       </form>
  //     </>
  //   );

  const [form, setForm] = useState({});

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elije tu color favorito</p>
        <input
          type="radio"
          id="azul"
          name="color"
          value="azul"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="azul">Azul</label>
        <input
          type="radio"
          id="negro"
          name="color"
          value="negro"
          onChange={handleChange}
        />
        <label htmlFor="negro">Negro</label>
        <input
          type="radio"
          id="verde"
          name="color"
          value="verde"
          onChange={handleChange}
        />
        <label htmlFor="verde">Verde</label>
        <p>Elije tu lenguaje de programación favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">----</option>
          <option value="js">Javascript</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
        </select>
        <br />
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
