import React from "react";
import { rhythm, scale } from "../utils/typography";
import logo from "../css/icons/svg/logo.svg";
import { colors } from "../styles";
import styled, { css } from "styled-components";
import { Container } from "../Elements/Container";

const BrandLogo = styled.a`
  display: flex;
  img {
    max-width: 150px;
    width: 150px;
  }
`;
const StyledSection = styled.section`
  color: #999999;
  p {
    color: #555;
    @media (min-width: 768px) {
      width: 80vw;
    }
    @media (min-width: 1024px) {
      width: 70vw;
    }
    @media (min-width: 1355px) {
      width: 60vw;
    }
  }
  .light {
    text-transform: uppercase;
    font-weight: 400;
  }
  hr {
    margin-left: auto;
    margin-right: auto;
    background: #9a9a9a;
    width: 100%;
    @media (min-width: 768px) {
      width: 65vw;
    }
    @media (min-width: 1024px) {
      width: 55vw;
    }
    @media (min-width: 1355px) {
      width: 45vw;
    }
  }
  a {
    cursor: pointer;
    text-transform: uppercase;
    &.contact {
      color: white;
      text-decoration: underline;
    }
  }
  p {
    text-align: center;
  }
  .partners-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      &:before {
        display: none;
      }
    }
  }
  .partners {
    max-width: 160px;
    background: #fff;
    padding: 0 30px;
  }
`;

const Brand = (props) => {
  return (
    <StyledSection>
      <Container
        color={colors.white}
        justifyContent="space-between"
        style={{
          display: "flex",

          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: `${rhythm(4)} 0`,
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BrandLogo>
              <img src="https://dental-vip-stagging.netlify.com/static/37783f5afb8f7fa7d19d20dc780d81c6/673cf/logo.png"></img>
            </BrandLogo>
            <h4 className="light">Innovacion y prestigio en odontologi</h4>
            <div style={{ maxWidth: "80vw" }}>
              <hr></hr>
              <p>¡Bienvenidos a nuestro espacio en la red!</p>
              <p>
                En DENTAL VIP ponemos a su disposición la experiencia del mejor
                equipo de Odontólogos Especialistas, las más modernas y cómodas
                instalaciones y la última tecnología a nivel mundial.
              </p>
              <p>
                Somos un grupo humano verdaderamente comprometido con lo que
                hace, capaz de brindar un servicio de salud integral,
                personalizado y de alto valor científico; enfocado siempre en la
                ética, responsabilidad y sentido social de nuestra labor.
              </p>
            </div>
          </div>

          <div
            className="partners-wrapper"
            style={{
              marginTop: `${rhythm(1)}`,
              marginBottom: `${rhythm(1.5)}`,
            }}
          >
            <img className="partners" src={logo}></img>
            <img className="partners" src={logo}></img>
            <img className="partners" src={logo}></img>
          </div>

          <div>
            <h4 style={{ margin: 0, fontWeight: 400 }}>USO DE COOKIES</h4>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};

export default Brand;
