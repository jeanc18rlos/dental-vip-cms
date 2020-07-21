import React, { useState } from "react";
import styled from "styled-components";
import { scale } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";
import BackgroundImage from "gatsby-background-image";
import Fade from "react-reveal/Fade";
import { useWindowSize } from "../utils/hooks";
const StyledHero = styled.section`
  .bg {
    display: flex;
    height: calc(100vh - 128px);
    min-height: 250px;
    max-height: ${(props) => props.maxHeight - 50}px;
    max-width: 100vw;
    overflow: hidden;

    -webkit-backface-visibility: visible;
    backface-visibility: visible;

    &.half {
      height: 60vh;
      max-height: 400px;
      &:before,
      :after {
        background-attachment: unset !important;
      }
    }
    @media screen and (max-width: 1024px) {
      height: calc(100vh - 70px) !important;
      &.half {
        height: 60vh !important;
      }
    }
    .indicator {
      position: absolute;
      bottom: 0;
      font-size: 50px;
      color: white;
      text-shadow: 1px 1px 7px #0a0a0a;
      animation: MoveUpDown 1.8s ease-in-out infinite;

      @keyframes MoveUpDown {
        0%,
        100% {
          bottom: 0;
        }
        50% {
          bottom: 25px;
        }
      }
    }
    &.single {
      .captions {
        h1 {
          ${scale(1.5)}
          &.bebas {
            ${scale(2)};
            line-height: 1 !important;
          }
        }
        @media screen and (min-width: 1024px),
          screen and (min-height: 700px) and (min-width: 560px) {
          h1 {
            ${scale(1.9)};
            &.bebas {
              ${scale(2.25)}
            }
          }
        }
      }
    }
    &.center {
      justify-content: center;
    }

    .captions {
      &.left-aligned {
        h1,
        h2,
        h3 {
          text-align: left !important;
        }
      }
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
        text-align: center;
      }

      .dark {
        color: #333;
        text-shadow: 1px 1px 7px #ffffff;
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
    &.parallax {
      &:before,
      :after {
        @media screen and (min-width: 1024px) {
          background-attachment: fixed;
        }
      }
    }

    &:before {
      transform: ${(props) => (props.scale ? "scale(1.2)" : "none")} !important;
      transition: transform 5s linear !important;
    }
    @media screen and (orientation: portrait) {
      &:before,:after {
        background-position: ${(props) =>
          props.portraitPosition && props.portraitPosition} !important;
      }
    }
  }
`;

const Hero = (props) => {
  const [scale, setScale] = useState(false);
  const size = useWindowSize();
  return (
    <StyledHero
      maxHeight={size.height}
      height={props.height}
      indicator={props.indicator}
      portraitPosition={props.portraitPosition}
      scale={props.background.scaleOnReveal ? scale : false}
    >
      <BackgroundImage
        className={`bg ${props.className} ${
          props.background.isParallax && "parallax"
        }`}
        Tag="div"
        fluid={props.background.img.childImageSharp.fluid}
      >
        {props.anim.display ? (
          <Fade
            {...{
              [props.anim.type]: true,
            }}
            onReveal={() => {
              props.background.scaleOnReveal && setScale(true);
            }}
          >
            <div className={`captions ${props.content.position}`}>
              {ReactHtmlParser(props.content.body)}
            </div>
          </Fade>
        ) : (
          <div className={`captions ${props.content.position}`}>
            {ReactHtmlParser(props.content.body)}
          </div>
        )}
        {props.indicator && (
          <div className="indicator">
            <span>
              <i className="icon-angle-down"></i>
            </span>
          </div>
        )}
      </BackgroundImage>
    </StyledHero>
  );
};

export default Hero;
