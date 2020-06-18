import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { Container } from "../Elements/Container";
import Img from "gatsby-image";
import { Link } from "gatsby";
import ReactHtmlParser from "react-html-parser";

const SyledFeatures = styled.section`
  text-align: center;
  padding: ${rhythm(4)} 0 ${rhythm(3)};
  h1.title {
    font-weight: 300;
    margin-bottom: ${rhythm(2)};
  }
  p {
    color: #555;
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
      padding: 10px;
      box-sizing: border-box;
      z-index: 1;
      a {
        padding: 1em;
        max-width: 350px;
        text-decoration: none;
        display: flex;
        margin: ${rhythm(1)} auto;
        flex-direction: column;
        -webkit-transition: box-shadow 0.5s;
        transition: box-shadow 0.5s;
        box-shadow: 0 0 0 0 transparent;
        .features-image {
          position: relative;
          overflow: hidden;
          max-width: 225px;
          display: flex;
          justify-self: center;
          align-self: center;
          width: 100%;
          margin-bottom: ${rhythm(1)};
        }
        &:hover {
          box-shadow: 0 0 19px 0 hsla(0, 0%, 68.6%, 0.8);
        }
        .title {
          letter-spacing: 1px;
          color: #9a9a9a;
          text-transform: uppercase;
        }
        .middle-line {
          position: relative;
          width: 100%;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          i {
            background: white;
            padding: 0 1em;
            color: #9a9a9a;
          }
          &:before {
            content: "";
            position: absolute;
            border-bottom: 1px hsla(0, 0%, 0%, 0.2) solid;
            height: 100%;
            width: 100%;
            -webkit-transform: translateY(calc(-50%));
            -ms-transform: translateY(calc(-50%));
            transform: translateY(calc(-50%));
            z-index: -1;
          }
        }
      }
    }
  }
`;
const Features = (props) => {
  return (
    <SyledFeatures>
      <Container
        justifyConten="center"
        alignItem="center"
        flexDirection="column"
      >
        {ReactHtmlParser(props.title)}
        {ReactHtmlParser(props.description)}
        <div className="grid-grow">
          {props.features.map((i, k) => {
            return (
              <div key={k} className="grid-item">
                <Link to={i.to}>
                  <Img
                    className="features-image"
                    fluid={i.img.childImageSharp.fluid}
                  />
                  {ReactHtmlParser(i.title)}
                  <hr />
                  {ReactHtmlParser(i.description)}
                  <span className="middle-line">
                    <i className="icon-plus" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </SyledFeatures>
  );
};

export default Features;
