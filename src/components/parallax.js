import React, { useState } from "react";
import BackgroundImage from "gatsby-background-image";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";

import ReactHtmlParser from "react-html-parser";

import { useWindowSize } from "../utils/hooks";

const StyledContent = styled(Container)`
  justify-content: space-around;
  color: white;
  padding-top: ${rhythm(4)};
  padding-bottom: ${rhythm(4)};
  .nmb {
    margin-bottom: 0 !important;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column !important;
  }
  h1 {
    margin-bottom: ${rhythm(2)};
    &.big {
      font-size: ${rhythm(1.8)};
    }
  }
  h1,
  h2,
  h3 {
    text-align: center;
    font-weight: 300;
  }
  p {
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
    justify-content: center;
    align-items: center;
    margin-top: ${rhythm(3)};
    margin-bottom: ${rhythm(3)};
    @media screen and (max-width: 425px) {
      flex-direction: column !important;
    }
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
          {ReactHtmlParser(props.content)}
        </StyledContent>
      )}
    </BackgroundImage>
  );
};

export default Parallax;
