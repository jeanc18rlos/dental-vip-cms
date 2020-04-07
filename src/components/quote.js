import React from "react";
import { Container } from "../Elements/Container";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";

const StyledQuote = styled.section`
  padding: ${rhythm(4)} 0;
  background: #222;
  .icon-quotes-open {
    align-self: flex-start;
    font-size: 1.5em;
  }
  .icon-quotes-close {
    align-self: flex-end;
    font-size: 1.5em;
    margin-bottom: calc(${rhythm(1)} - 1px);
  }
  hr {
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    background: #999;
    width: 100%;
  }
  .author {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
    .author-name {
      ${scale(0.2)};
      color: white;
    }
    .author-title {
      ${scale(-0.2)}
      color: #9b9a9a;
      margin-bottom: 0;
    }
    @media screen and (min-width: 769px) {
      padding: 0 15vw;
    }
  }
  blockquote {
    text-align: center;
    color: white;
    font-weight: 300;
    ${scale(0.2)}
    @media screen  and (min-width: 769px) {
      max-width: 70vw;
    }
  }
`;

const Quote = (props) => {
  return (
    <StyledQuote>
      <Container color="#222">
        <i className="icon-quotes-open"></i>
        <blockquote>{ReactHtmlParser(props.body)}</blockquote>
        <i className="icon-quotes-close"></i>
      </Container>
      <Container className="author" color="#222">
        <hr />
        <p className="author-name">{ReactHtmlParser(props.footer.author)}</p>
        <p className="author-title">{ReactHtmlParser(props.footer.details)}</p>
      </Container>
    </StyledQuote>
  );
};

export default Quote;
