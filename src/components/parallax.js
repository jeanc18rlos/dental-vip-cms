import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import Img from "gatsby-image";
import { Link } from "gatsby";
import ReactHtmlParser from "react-html-parser";

const StyledContent = styled(Container)`
  color: white;
  padding-top: ${rhythm(4)};
  padding-bottom: ${rhythm(4)};
  h1 {
    margin-bottom: ${rhythm(2)};
  }
  h1,
  h2,
  h3 {
    text-align: center;
    font-weight: 300;
  }
  a {
    ${scale(-0.2)};
    text-transform: uppercase;
    font-weight: 700;
    background: #222;
    color: #91c508;
    padding: 10px 20px;
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
    text-decoration: none;
    &:hover {
      background: #91c508;
      color: #222;
    }
  }
`;
const Parallax = (props) => {
  return (
    <BackgroundImage
      className="parallax"
      Tag="section"
      fluid={props.img.childImageSharp.fluid}
      style={props.nocontent && { minHeight: "100vh" }}
    >
      {!props.nocontent && (
        <StyledContent flexDirection="column" color="none">
          <h1>¿Vive Fuera de Venezuela?</h1>
          <p class="dv-subtitle text-center text-white">
            ¡También somos una opción!{" "}
          </p>
          <p class="text-left dv-subtitle">
            En la actualidad nuestro país se ha convertido en un importante
            destino de Turismo Dental y ya son muchos los pacientes foráneos que
            nos visitan para recibir una Atención Sanitaria de Primer Nivel.
          </p>{" "}
          <p class="text-left dv-subtitle">
            Nuestra reconocida Calidad Asistencial y la posibilidad de Ahorrar
            Grandes Sumas de Dinero en tratamientos bucodentales de complejidad
            son dos ventajas competitivas difíciles de ignorar.
          </p>{" "}
          <p class="text-left dv-subtitle">
            Para su comodidad contamos con una privilegiada ubicación y dos
            excelentes infraestructuras hoteleras situadas a menos de 50 metros
            de la clínica. CHACAO SUITES y SHELTER SUITES disponen de lindas y
            confortables habitaciones, estacionamiento, restaurantes y demás
            servicios que facilitarán y harán agradable su breve estadía en la
            ciudad de Caracas.
          </p>{" "}
          <h1>¿Pensando en viajar y visitarnos?</h1>
          <h3>Conozca Más Acerca de Nuestro Protocolo Clínico de Actuación.</h3>
          <a href="/pacientes-del-exterior/">Más Información</a>
        </StyledContent>
      )}
    </BackgroundImage>
  );
};

export default Parallax;
