import React from "react";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import ReactHtmlParser from "react-html-parser";
const StyledHeading = styled.section`
  text-align: center;
  padding: ${rhythm(4)} 0 ${rhythm(3)};
  .title {
    font-weight: 300;
    margin-bottom: ${rhythm(2)};
    @media (min-width: 1355px) {
      width: 80%;
    }
  }
  p {
    color: #555;
    @media (min-width: 1355px) {
      width: 80%;
    }
  }
`;
const Heading = props => {
  return (
    <StyledHeading>
      <Container
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
