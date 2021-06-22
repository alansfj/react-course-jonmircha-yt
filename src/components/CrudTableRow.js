import React from "react";

export default function CrudTableRow({ el, deleteData, setDataToEdit }) {
  const { nombre, constelacion, id } = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{constelacion}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
}
