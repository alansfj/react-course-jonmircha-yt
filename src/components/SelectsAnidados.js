/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SelectList from "./SelectList";

export default function SelectsAnidados() {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  const token = "66a23139-1de6-4799-a191-988296aca69f";

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${token}`}
        handleChange={e => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${token}`}
          handleChange={e => {
            setTown(e.target.value);
          }}
        />
      )}

      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${token}`}
          handleChange={e => {
            setSuburb(e.target.value);
          }}
        />
      )}
    </div>
  );
}
