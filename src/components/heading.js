import React from "react";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import ReactHtmlParser from "react-html-parser";
const StyledHeading = styled.section`
  .maps {
    display: flex;
    list-style: none;
    width: 100%;
    margin-top: ${rhythm(2)};
    margin-left: 0;
    margin-bottom: 0;
    @media screen and (max-width: 850px) {
      flex-direction: column;
    }
    li {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      align-items: center;
      width: 100%;
      margin: 0 auto;
      max-width: 300px;
      margin-bottom: ${rhythm(1)} !important;
      i {
        font-size: 220px;
      }
      span {
        margin-bottom: ${rhythm(1)};
      }
      .dv-content-number {
        font-family: Bebas Neue Bold;
        color: #91c508;
        ${scale(1.5)};
        margin-bottom: 0;
        line-height: 1;
      }
      .dv-content {
        text-transform: uppercase;
        ${scale(0.25)};
        font-family: Roboto, sans-serif;
        font-weight: 300;
        margin-bottom: 0;
        color: #222;
      }
      .dv-content-country {
        color: #222;
        margin: 0 auto;
        font-family: Bebas Neue Bold;
        ${scale(0.75)};
        line-height: normal !important;
        max-width: 160px;
        margin: auto;
      }
    }
  }
  &.dark {
    background-color: #222;
    p,
    .title {
      color: white;
    }
  }
  .bebas {
    ${scale(1.35)};
    font-weight: bold;
    letter-spacing: 2px;
  }
  .thin {
    font-weight: 300;
    ${scale(0.2)};
  }
  text-align: center;
  padding: ${rhythm(4)} 0 ${rhythm(3)};
  .title {
    font-weight: 300;
    margin-bottom: ${rhythm(2)};
    .icon {
      font-size: 52px;
      background: black;
      border-radius: 50%;
      padding: 10px;
    }
    @media (min-width: 1355px) {
      width: 80%;
    }
  }
  p {
    color: #555;
    @media (min-width: 1355px) {
      width: 80%;
    }
    &.small {
      ${scale(-0.15)}
    }
  }
`;
const Heading = (props) => {
  return (
    <StyledHeading
      style={props.color && { background: props.color }}
      className={props.className}
    >
      <Container
        color={props.color}
        justifyConten="center"
        alignItem="center"
        flexDirection="column"
      >
        {ReactHtmlParser(props.content)}
      </Container>
    </StyledHeading>
  );
};

export default Heading;
