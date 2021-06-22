/* eslint-disable no-unused-vars */
import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093";
  let mainAlpha = "#db709380";

  const setTransitionTime = time => `all ${time} ease-in-out`;

  // ANIMACION
  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    `;

  // DEFINICION DE COMPONENTE
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${props => props.color || "#000"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("0.3s")};
    animations: ${fadeIn} 10s ease-out;

    ${"" /* CSS ADICIONAL PARA COMPONENTE CON PROP isButton */}
    ${props =>
      props.isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.35rem;
        font-size: 1.5rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainAlpha};
    }
  `;

  // DEFINICIONES DE TEMAS
  const light = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  // DEFINICION Y APLICACION DE TEMAS EN COMPONENTES
  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  // COMPONENTE CON ESTILOS HEREDADOS
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
    font-size: 1.3rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
    }
  `;

  return (
    <>
      {/* <GlobalStyle /> LOS ESTILOS GLOBALES SE APLICAS EN APP.JS O INDEX.JS */}
      <h2>Styled Components</h2>
      <MyH3>Soy un h3 con styled-components</MyH3>
      <MyH3 color="#61dafb">Soy un h3 con styled-components</MyH3>
      <MyH3 isButton>Soy un h3 estilizado como Boton</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy un div con tema light</Box>
        <BoxRounded>
          Soy un div con propiedades heredadas y borde redondeado con tema light
        </BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy un div con tema dark</Box>
        <BoxRounded>
          Soy un div con propiedades heredadas y borde redondeado con tema dark
        </BoxRounded>
      </ThemeProvider>
    </>
  );
}
