import React, { useState } from "react";
import BackgroundImage from "gatsby-background-image";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";

import ReactHtmlParser from "react-html-parser";

import { useWindowSize } from "../utils/hooks";

const StyledContent = styled(Container)`
  padding: 0;
  hr {
    display: none;
  }
  @media screen and (max-width: 768px) {
    hr {
      display: none !important;
    }
  }
  .paragraph-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    &:nth-of-type(1) {
      hr {
        position: absolute;
        width: calc(50% - 10vw);
        margin: 0;
        &.top {
          display: block;
          top: 0;
        }
      }
    }
    &:nth-last-of-type(1) {
      hr {
        position: absolute;
        width: calc(50% - 10vw);
        margin: 0;
        &.bottom {
          display: block;
          bottom: 0;
        }
      }
    }

    &:nth-of-type(odd) {
      flex-direction: row-reverse !important;
      @media screen and (max-width: 768px) {
        flex-direction: column !important;
      }
    }
    @media screen and (max-width: 768px) {
      &:nth-last-of-type(1n) {
        padding-bottom: ${rhythm(2)} !important;
      }
      padding: 0 5vw !important;
      flex-direction: column !important;

      .content-wrapper {
        padding: 0 !important;
        max-width: 100% !important;
        h2 {
          margin-top: ${rhythm(2)};
          span {
            height: 35px !important;
            width: 35px !important;
            font-size: 1.5em !important;
            margin-right: 10px !important;
          }
        }
      }
      .image {
        min-height: 250px !important;
        .content-wrapper {
          display: none !important;
        }
      }
    }
    .image {
      width: 100%;
      min-height: 50vh;
      @media screen and (min-width: 1024px) {
        min-height: 70vh;
      }
      .content-wrapper {
        margin-top: ${rhythm(2)};
        margin-bottom: ${rhythm(1)};
        display: block;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        max-width: 100%;
        pointer-events: none;
      }
    }
    .content-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 5vw;
      max-width: 50%;
      h2 {
        display: flex;
        align-items: center;
        span {
          color: #91c508;
          height: 70px;
          width: 70px;
          display: flex;
          float: left;
          justify-content: center;
          align-items: center;
          font-size: 2em;
          margin-right: 15px;
          border-radius: 50%;
        }
      }
    }
  }
`;
const Paragraph = (props) => {
  return (
    <StyledContent flexDirection="column" color="none">
      {props.items.map((i, k) => {
        return (
          <div className="paragraph-item">
            <BackgroundImage
              className="image"
              fluid={i.img.childImageSharp.fluid}
            >
              <div className="content-wrapper">
                {ReactHtmlParser(i.content)}
              </div>
            </BackgroundImage>
            <div className="content-wrapper">
              {props.top && <hr className="top"></hr>}
              {ReactHtmlParser(i.content)}
              {props.bottom && <hr className="bottom"></hr>}
            </div>
          </div>
        );
      })}
    </StyledContent>
  );
};

export default Paragraph;
