import React from "react";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";

const StyledHeading = styled.section`
  text-align: center;
  padding: ${rhythm(4)} 0 ${rhythm(3)};
  .title {
    font-weight: 300;
    margin-bottom: ${rhythm(2)};
    @media (min-width: 1355px) {
      width: 80%;
    }
  }
  p {
    color: #555;
    @media (min-width: 1355px) {
      width: 80%;
    }
  }
`;
const Heading = (props) => {
  return (
    <StyledHeading>
      <Container
        justifyConten="center"
        alignItem="center"
        flexDirection="column"
      >
        <h1 className="title">Estamos para Servirle</h1>

        <p>
          Si necesita información adicional, desea realizar una consulta, hacer
          sugerencias o reservar espacio en agenda; podemos atenderle vía
          telefónica, mediante el uso del formulario contiguo o enviando un
          mensaje de correo electrónico a&nbsp;
          <a
            href="mailto:contacto@dentalvip.com.ve"
            style={{ color: "#91c508" }}
          >
            contacto@dentalvip.com.ve
          </a>
        </p>
      </Container>
    </StyledHeading>
  );
};

export default Heading;
