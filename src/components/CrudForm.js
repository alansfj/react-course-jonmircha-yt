import React, { useState, useEffect } from "react";

const initialForm = {
  nombre: "",
  constelacion: "",
  id: null,
};

export default function CrudForm(props) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (props.dataToEdit) {
      setForm(props.dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [props.dataToEdit]);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.nombre || !form.constelacion) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      props.createData(form);
    } else {
      props.updateData(form);
    }

    handleReset();
  };

  const handleReset = e => {
    setForm(initialForm);
    props.setDataToEdit(null);
  };

  return (
    <div>
      <h3>{props.dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="constelacion"
          placeholder="Constellation"
          onChange={handleChange}
          value={form.constelacion}
        />
        <input type="submit" value="Agregar" />
        <input
          type="reset"
          value={form.id ? "Cancelar" : "Borrar"}
          onClick={handleReset}
        />
      </form>
    </div>
  );
}
