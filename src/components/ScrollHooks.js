import React, { useState, useEffect } from "react";

export default function ScrollHooks(props) {
  const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //     console.log('Fase de Actialización')
  // },[variable que sufre cambio])

  useEffect(() => {
    // console.log("Fase de Actualización");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  //  useEffect(() => {
  //    console.log("Fase de Montaje");
  //  }, []);

  useEffect(() => {
    // console.log("Fase de Montaje");
  }, []);

  // useEffect(() => {
  //   return () => {
  //     console.log("Fase de Desmontaje");
  //   };
  // });

  useEffect(() => {
    return () => {
      //   console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY} px</p>
    </>
  );
}
