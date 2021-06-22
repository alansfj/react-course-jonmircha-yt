import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    nombre: "Seiya",
    constelacion: "Pegaso",
    id: 1,
  },
  {
    id: 2,
    nombre: "Shiryu",
    constelacion: "Dragon",
  },
  {
    id: 3,
    nombre: "Hyoga",
    constelacion: "Cisne",
  },
  {
    id: 4,
    nombre: "Ikki",
    constelacion: "Fenix",
  },
  {
    nombre: "Saga",
    constelacion: "Geminis",
    id: 5,
  },
];

export default function CrudApp() {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = data => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = data => {
    let newData = db.map(el => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = id => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el id '${id}'`
    );

    if (isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    } else return;
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
}
