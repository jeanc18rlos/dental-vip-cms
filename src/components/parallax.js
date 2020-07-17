import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import { Link } from "gatsby";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";

const StyledContent = styled(Container)`
  justify-content: space-around;
  color: white;
  padding-top: ${rhythm(4)};
  padding-bottom: ${rhythm(4)};
  max-width: 1250px;
  margin: auto;
  .nmb {
    margin-bottom: 0 !important;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column !important;
  }
  .bold {
    font-weight: bold;
    text-shadow: 0px 0px 17px black;
  }
  h1 {
    margin-bottom: ${rhythm(2)};
    &.big {
      font-size: ${rhythm(1.8)};
    }
    &.mt-1 {
      margin-top: ${rhythm(1)};
    }
  }
  ul {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    &.cols-2 {
      @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-flow: row wrap;
        li {
          display: flex;
          flex-basis: 50%;
          span {
            word-break: break-word;
          }
        }
      }
    }
    list-style: none;
    li {
      position: relative;
      padding-left: 20px;
      padding-right: 20px;

      .circle {
        position: absolute;
        left: -3px;
        top: 3px;
        color: #90c508;
      }
    }
  }
  h1,
  h2,
  h3 {
    text-align: center;
    font-weight: 300;
  }
  p {
    ${scale(0.2)}
    &.text-left {
      align-self: flex-start;
    }
    &:nth-last-of-type() {
      margin-bottom: ${rhythm(2)};
    }
  }
  .social-links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    margin-top: ${rhythm(3)};
    margin-bottom: ${rhythm(3)};

    @media screen and (max-width: 600px) {
      margin-top: ${rhythm(2)} !important;
      margin-bottom: ${rhythm(2)} !important;

      .social-item {
        margin-left: ${rhythm(0.5)} !important;
        margin-right: ${rhythm(0.5)} !important;
        a {
          height: 90px !important;
          width: 94px !important;
          font-size: 2em !important;
        }
      }
      @media screen and (max-width: 425px) {
        .social-item {
          a {
            height: 60px !important;
            width: 59px !important;
          }
          h3 {
            font-size: 13px;
          }
        }
      }
    }

    .social-item {
      margin-left: ${rhythm(1)};
      margin-right: ${rhythm(1)};
      a {
        background: #222;
        color: #91c508;
        font-size: 2.5em;
        text-decoration: none;
        height: 110px;
        width: 110px;
        justify-content: center;
        align-items: center;
        display: flex;
        margin-bottom: ${rhythm(1)};
        border-radius: 50%;
        &:hover {
          color: #999;
        }
        h3 {
          color: #aaa !important;
          font-weight: 400 !important;
        }
      }
    }
  }
  a.link {
    ${scale(-0.2)};
    text-transform: uppercase;
    font-weight: 700;
    background: #222;
    min-width: 170px;
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
          {ReactHtmlParser(props.content, {
            transform: (node) => {
              if (
                node.type === "tag" &&
                node.name === "a" &&
                !node.attribs.rel
              ) {
                return (
                  <Link className="link" to={node.attribs.href}>
                    {node.children[0].data}
                  </Link>
                );
              }
            },
          })}
        </StyledContent>
      )}
    </BackgroundImage>
  );
};

export default Parallax;
