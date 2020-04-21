import React from "react";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import ReactHtmlParser from "react-html-parser";
const StyledHeading = styled.section`
  &.dark {
    background-color: #222;
    p,
    .title {
      color: white;
    }
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
    <StyledHeading className={props.className}>
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
