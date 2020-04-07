import React, { useState } from "react";
import { Container } from "../Elements/Container";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";
import { Link } from "gatsby";
import Img from "gatsby-image";

const StyledBoxes = styled.section`
  color: #555;
  .gatsby-image-wrapper {
    -webkit-transition: -webkit-filter 1s;
    transition: -webkit-filter 1s;
    transition: filter 1s;
    transition: filter 1s, -webkit-filter 1s;
  }
  .title {
    font-weight: 300;
    width: 100%;
    color: #333;
    text-align: center;
    margin-bottom: ${rhythm(1)};
  }
  .animated {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.42, 0, 0.35, 0.93);
    transition: -webkit-transform 1s cubic-bezier(0.42, 0, 0.35, 0.93);
    transition: transform 1s cubic-bezier(0.42, 0, 0.35, 0.93);
    transition: transform 1s cubic-bezier(0.42, 0, 0.35, 0.93),
      -webkit-transform 1s cubic-bezier(0.42, 0, 0.35, 0.93);
  }
  .grid-grow {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    margin: auto;
    @media (max-width: 1024px) {
      .grid-item {
        flex-basis: 50% !important;
      }
    }
    @media (max-width: 1024px) {
      .grid-item {
        flex-basis: 50% !important;
      }
    }
    @media (max-width: 680px) {
      .grid-item {
        flex-basis: 100% !important;
      }
    }
    .grid-item {
      flex-basis: 33.33%;
      -ms-flex: auto;
      position: relative;
      padding: ${rhythm(0.5)};
      box-sizing: border-box;
      z-index: 1;
      a {
        border: 1px solid hsla(0, 0%, 60%, 0.5);
        max-width: 480px;
        text-decoration: none;
        display: flex;
        margin: ${rhythm(0.5)} auto;
        flex-direction: column;
        color: #555;
        text-align: center;
        &.long {
          max-width: 530px;
        }
        &.box-wrapper {
          -webkit-transition: -webkit-transform 1s
            cubic-bezier(0.42, 0, 0.35, 0.93);
          transition: -webkit-transform 1s cubic-bezier(0.42, 0, 0.35, 0.93);
          transition: transform 1s cubic-bezier(0.42, 0, 0.35, 0.93);
          transition: transform 1s cubic-bezier(0.42, 0, 0.35, 0.93),
            -webkit-transform 1s cubic-bezier(0.42, 0, 0.35, 0.93);
          &.deselected {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          &.selected {
            -webkit-transform: translate3d(0, ${rhythm(-1)}, 0);
            transform: translate3d(0, ${rhythm(-1)}, 0);
            .gatsby-image-wrapper {
              -webkit-filter: brightness(0.5);
              filter: brightness(0.5);
            }
            .indicator {
              i {
                background: #91c508;
              }
            }
          }
        }
        &:hover {
          box-shadow: 0 0 19px 0 hsla(0, 0%, 68.6%, 0.8);
        }
        h5 {
          margin-bottom: ${rhythm(0.5)};
          margin-top: ${rhythm(0.5)};
          text-transform: uppercase;
          font-weight: 400;
          color: #333;
        }
        .title {
          letter-spacing: 1px;
          color: #9a9a9a;
          text-transform: uppercase;
        }
        .indicator {
          margin-bottom: ${rhythm(0.5)};
          display: flex;
          justify-content: center;
          i {
            -webkit-transition: background 1s
              cubic-bezier(0.42, 0, 0.35, 0.93);
            transition: background 1s cubic-bezier(0.42, 0, 0.35, 0.93);
            background: #222;
            padding: 5px;
            border-radius: 50%;
            color: #fff;
          }
        }
      }
    }
  }
`;

const StyledBox = styled.div``;

const arr = ["", "", ""];

const Boxes = (props) => {
  const [toggle, setActiveToggle] = useState(false);
  const length = arr.length;
  return (
    <StyledBoxes>
      <Container
        style={{
          padding: `${rhythm(4)} calc(5vw - ${rhythm(1)} ) ${rhythm(3)}`,
        }}
        justifyConten="center"
        alignItem="center"
        flexDirection="column"
      >
        <h1 className="title">Procedimientos Destacados</h1>
        <div className="grid-grow">
          {arr.map((i, k) => {
            const key = `wrapper-${k}`;
            return (
              <div key={k} className="grid-item">
                <Link
                  to={"/"}
                  className={`animated box-wrapper ${
                    toggle === key ? "selected" : "deselected"
                  } ${length <= 3 && "long"}`}
                  onMouseEnter={() => {
                    setActiveToggle(key);
                  }}
                  onMouseLeave={() => {
                    setActiveToggle(false);
                  }}
                >
                  <div>
                    <h5>Prótesis sobre implantes</h5>
                    <span className="indicator">
                      <i className="icon-plus" />
                    </span>
                    <Img fluid={props.img.childImageSharp.fluid}></Img>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </StyledBoxes>
  );
};

export default Boxes;
