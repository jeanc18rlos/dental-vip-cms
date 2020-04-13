import React, { useState } from "react";
import { Container } from "../Elements/Container";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";
import BackgroundImage from "gatsby-background-image";
import Fade from "react-reveal/Fade";

const StyledHero = styled.section`
  .bg {
    display: flex;
    height: calc(100vh - (58px + 70px));
    min-height: 250px;
    max-width: 100vw;
    overflow: hidden;
    @media screen and (max-width: 1023px) {
      height: calc(100vh - (70px)) !important;
    }
    .captions {
      @media screen and (min-width: 1024px),
        screen and (min-height: 768px) and (min-width: 560px) {
        h1 {
          ${scale(1.25)}
        }
        h2 {
          ${scale(1)}
        }
        h3 {
          ${scale(0.75)}
        }
      }

      padding: 0 5vw;
      color: white;
      text-shadow: 1px 1px 7px #0a0a0a;
      &.bottom {
        align-self: flex-end;
        justify-self: flex-end;
        @media screen and (min-height: 768px) {
          margin-bottom: 15vh;
        }
      }
      &.top {
        align-self: flex-start;
        justify-self: flex-start;
      }
      &.center {
        align-self: center;
        justify-self: center;
      }
      .bebas {
      }
      .no-mob {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      .black {
        color: #333;
        text-shadow: 1px 1px 7px #fff;
      }
      .wrapped {
        background: #00000082;
        border-left: 6px solid #91c508;
        padding: 6px;
        width: fit-content;
      }
    }

    &:before {
      transform: ${props => (props.scale ? "scale(1.2)" : "none")} !important;
      transition: transform 5s linear !important;
      ${props => props.isParallax && "background-attachment: fixed"}
    }
  }
`;

const Hero = props => {
  const [scale, setScale] = useState(false);
  return (
    <StyledHero
      height={props.height}
      indicator={props.indicator}
      portraitPosition={props.portraitPosition}
      isParallax={props.background.isParallax}
      scale={props.background.scaleOnReveal && scale}
    >
      <BackgroundImage
        className="bg"
        Tag="div"
        fluid={props.background.img.childImageSharp.fluid}
      >
        <Fade
          right
          onReveal={() => {
            props.background.scaleOnReveal && setScale(true);
          }}
        >
          <div className={`captions ${props.content.position}`}>
            <h2 className="wrapped">Salud, Belleza y Función</h2>
            <h3 className="no-mob">¡Una Especialidad para Cada Tratamiento!</h3>
            <h1>INNOVACIÓN Y PRESTIGIO EN ODONTOLOGÍA</h1>
          </div>
        </Fade>
      </BackgroundImage>
    </StyledHero>
  );
};

export default Hero;
