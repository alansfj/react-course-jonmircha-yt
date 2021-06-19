/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createRef, useRef, useState } from "react";

export default function Referencias() {
  // Para componentes clase
  // let refMenu = createRef()

  // Para componentes funcionales
  let refMenuBtn = useRef();
  let refMenu = useRef();

  // console.log(refMenu, refMenuBtn)

  const handleClick = e => {
    // SIN REFERENCIA
    // const menu = document.getElementById("menu");

    // if (e.target.textContent === "Menu") {
    //   e.target.textContent = "Cerrar";
    //   menu.style.display = "block";
    // } else {
    //   e.target.textContent = "Menu";
    //   menu.style.display = "none";
    // }

    // CON REFERENCIA
    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleClick}>
        Menu
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
      </nav>
    </>
  );
}
