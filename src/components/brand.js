import React from "react";
import { rhythm } from "../utils/typography";
import { colors } from "../styles";
import styled from "styled-components";
import { Container } from "../Elements/Container";
import ReactHtmlParser from "react-html-parser";
import Img from "gatsby-image";

const BrandLogo = styled.a`
  display: flex;
  .img {
    max-width: 150px;
    width: 150px;
  }
`;
const StyledSection = styled.section`
  color: #999999;
  p {
    color: #555;
    @media (min-width: 768px) {
      width: 80vw;
    }
    @media (min-width: 1024px) {
      width: 70vw;
    }
    @media (min-width: 1355px) {
      width: 60vw;
    }
  }
  .light {
    text-transform: uppercase;
    font-weight: 400;
  }
  hr {
    margin-left: auto;
    margin-right: auto;
    background: #9a9a9a;
    width: 100%;
    @media (min-width: 768px) {
      width: 65vw;
    }
    @media (min-width: 1024px) {
      width: 55vw;
    }
    @media (min-width: 1355px) {
      width: 45vw;
    }
  }
  a {
    cursor: pointer;
    text-transform: uppercase;
    &.contact {
      color: white;
      text-decoration: underline;
    }
  }
  p {
    text-align: center;
  }
  .partners-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
   
  }
  .partners {
    max-width: 444px;
    padding: 0 25px;
    width: 100%;
    background: #fff;
    margin-bottom: ${rhythm(.5)};

    img {
      object-fit: contain !important;
    }
  }
`;

const Brand = (props) => {
  return (
    <StyledSection>
      <Container
        color={colors.white}
        justifyContent="space-between"
        style={{
          display: "flex",

          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: `${rhythm(4)} 0`,
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BrandLogo>
              <img
                alt="DentalVIP"
                className="img"
                src={props.logo.publicURL}
              ></img>
            </BrandLogo>
            {ReactHtmlParser(props.title)}
            <div style={{ maxWidth: "80vw" }}>
              <hr></hr>
              {ReactHtmlParser(props.main)}
            </div>
          </div>

          <div
            className="partners-wrapper"
            style={{
              marginTop: `${rhythm(1)}`,
              marginBottom: `${rhythm(1.5)}`,
            }}
          >
            {props.partners.map((i, k) => {
              return (
                <Img
                  key={`${k}-${i.alt}`}
                  className="partners"
                  fluid={i.image.childImageSharp.fluid}
                  alt={i.alt}
                ></Img>
              );
            })}
          </div>

          <div>
            <h4 style={{ margin: 0, fontWeight: 400 }}>{props.footer}</h4>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};

export default Brand;
