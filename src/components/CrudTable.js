import React from "react";
import CrudTableRow from "./CrudTableRow";

export default function CrudTable({ data, deleteData, setDataToEdit }) {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Contelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map(el => (
              <CrudTableRow
                key={el.id}
                el={el}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
