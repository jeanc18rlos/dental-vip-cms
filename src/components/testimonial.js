import React from "react";
import { Container } from "../Elements/Container";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";
import Img from "gatsby-image";
const StyledQuote = styled.section`
  padding: ${rhythm(3)} 0 ${rhythm(3)};
  background: ${(props) => props.color};
  .icon-quotes-open {
    color: #c2c2c2 !important;
    align-self: center;
    font-size: 1.5em;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: calc(${rhythm(2)});
    &:before {
      color: #c2c2c2 !important;
    }
  }
  .pt {
    display: none;
    max-width: 400px;
  }
  .ld {
    max-width: 700px;
    margin: auto;
  }
  @media screen and (orientation: portrait) and (max-width: 550px) {
    .ld {
      display: none !important;
    }
    .pt {
      display: block !important;
    }
  }
  blockquote {
    text-align: center;
    color: white;
    font-weight: 300;
    .content {
      font-size: ${rhythm(1.25)};
      line-height: 1.3;
      font-family: "Bebas Neue Bold";
      color: #333;
      margin-bottom: calc(${rhythm(2)});
    }
    @media screen and (min-width: 769px) {
      max-width: 70vw;
    }
    @media screen and (max-width: 769px) {
      margin-right: ${rhythm(0.5)};
      margin-left: ${rhythm(0.5)};
    }
  }
`;

const Testimonial = (props) => {
  return (
    <StyledQuote color={props.color}>
      <Container color={props.color}>
        <blockquote>
          <span>
            <i className="icon-quotes-open"></i>
          </span>
          {ReactHtmlParser(props.content)}
          <Img critical={true}
            className="pt"
            fluid={props.images.portrait.childImageSharp.fluid}
          ></Img>
          <Img critical={true}
            className="ld"
            fluid={props.images.landscape.childImageSharp.fluid}
          ></Img>
        </blockquote>
      </Container>
    </StyledQuote>
  );
};

export default Testimonial;
