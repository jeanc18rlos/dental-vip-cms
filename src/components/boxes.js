import React, { useState } from "react";
import { Container } from "../Elements/Container";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";
import { Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
const StyledBoxes = styled.section`
  color: #555;
  .content {
    p {
      margin: 0;
      transition: 1s cubic-bezier(0.42, 0, 0.35, 0.93);
      background: #0000008f;
      color: white;
      padding: 1.6em 10px;
      visibility: hidden;
      opacity: 0;
      span {
        font-size: 50px;
        margin-bottom: 1.6em;
      }
      @media screen and (max-width: 768px) {
        background: #ffffff8f;
        color: black;
      }
    }
  }
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
    padding-left: 5vw;
    padding-right: 5vw;
    text-align: center;
    margin-bottom: ${rhythm(2)};
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
        max-width: 450px;
      }
    }
    .grid-item {
      flex-basis: 33.33%;
      -ms-flex: auto;
      position: relative;
      padding: ${rhythm(0.5)};
      box-sizing: border-box;
      &.long-nc {
        @media screen and (max-width: 1024px) {
          z-index: 1;
          max-height: 300px;
          overflow: hidden;
        }
      }
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
            p {
              opacity: 1 !important;
              visibility: visible !important;
            }

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

        h5 {
          margin-bottom: ${rhythm(1)};
          margin-top: ${rhythm(1)};
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
          margin-bottom: ${rhythm(1)};
          display: flex;
          justify-content: center;
          i {
            -webkit-transition: background 1s cubic-bezier(0.42, 0, 0.35, 0.93);
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

const arr = ["", "", ""];

const Boxes = (props) => {
  const [toggle, setActiveToggle] = useState(false);
  const length = arr.length;
  return (
    <StyledBoxes>
      <Container
        style={
          props.internal
            ? {
                padding: `0 calc(5vw - ${rhythm(0.5)} ) ${rhythm(3)}`,
              }
            : {
                padding: `${rhythm(4)} calc(5vw - ${rhythm(0.5)} ) ${rhythm(
                  3
                )}`,
              }
        }
        justifyConten="center"
        alignItem="center"
        flexDirection="column"
      >
        {!props.internal && ReactHtmlParser(props.title)}

        <div className="grid-grow">
          {props.procedures.map((i, k) => {
            const key = `wrapper-${k}`;
            return (
              <div
                key={k}
                className={`grid-item ${
                  length <= 3 && !props.content && "long-nc"
                }`}
              >
                {
                  !props.externalLink ?   <Link
                  to={i.to}
                  onClick={(e) => {
                    props.content && e.preventDefault();
                  }}
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
                    {ReactHtmlParser(i.title)}
                    <span className="indicator">
                      <i className="icon-plus" />
                    </span>
                    {props.content ? (
                      <BackgroundImage critical={true}
                        className={`content ${
                          toggle === key ? "selected" : "deselected"
                        }`}
                        fluid={i.img.childImageSharp.fluid}
                      >
                        {ReactHtmlParser(i.content)}
                      </BackgroundImage>
                    ) : (
                      <Img critical={true} fluid={i.img.childImageSharp.fluid}></Img>
                    )}
                  </div>
                </Link>
               : <a
               href={i.to}
               onClick={(e) => {
                 props.content && e.preventDefault();
               }}
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
                 {ReactHtmlParser(i.title)}
                 <span className="indicator">
                   <i className="icon-plus" />
                 </span>
                 {props.content ? (
                   <BackgroundImage critical={true}
                     className={`content ${
                       toggle === key ? "selected" : "deselected"
                     }`}
                     fluid={i.img.childImageSharp.fluid}
                   >
                     {ReactHtmlParser(i.content)}
                   </BackgroundImage>
                 ) : (
                   <Img critical={true} fluid={i.img.childImageSharp.fluid}></Img>
                 )}
               </div>
             </a>
                }
              
              </div>
            );
          })}
        </div>
      </Container>
    </StyledBoxes>
  );
};

export default Boxes;
