import React from "react";
import { Container } from "../../Elements/Container";
import { colors } from "../../styles";
import styled from "styled-components";
import { rhythm, scale } from "../../utils/typography";
import ReactHtmlParser from "react-html-parser";
import Img from "gatsby-image";
import { Link } from "gatsby";

const Brand = styled.a`
  display: flex;
  img {
    max-width: 100px;
    width: 100px;
  }
`;

const StyledFooter = styled.footer`
  color: #999999;
  .copyright {
    .flag-icon {
      font-size: 12px;
    }
    p {
      ${scale(-0.4)}
      margin-bottom: 0
    }
  }
  .dv-legal-links {
    text-align: center;
    a {
      white-space: nowrap;
      ${scale(-0.4)}
      color: #999999;
      text-decoration: none;
      &:hover {
        color: white;
      }
    }
  }
  .dds {
    @media screen and (min-width: 769px) {
      display: none;
    }
    margin-bottom: ${rhythm(1)};
    max-width: 400px;
    width: 70%;
  }
  .bebas {
    letter-spacing: 2px;

    ${scale(0.2)}
  }
  hr {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background: #3a3a3a;
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
  .social {
    display: flex;
    flex-direction: row;
    a {
      background: #222;
      padding: 0.5em;
      color: #91c508;
      display: flex;
      justify-content: center;
      margin: 0 0.12em;
      margin-bottom: ${rhythm(1)};
      text-decoration: none;
      &:hover {
        background: #91c508;
        color: #222;
      }
    }
  }
  .partners-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    &:before {
      content: "";
      position: absolute;
      border-bottom: 1px #3a3a3a solid;
      height: 100%;
      width: 100%;
      transform: translateY(calc(-50% - 0.833rem));
      z-index: -2;
    }
  }
  .dv-phone-div {
    @media screen and (min-width: 769px) {
      display: none !important;
    }
    max-width: 380px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    .circle {
      display: flex;
      justify-content: center;
      width: fit-content;
      flex-direction: column;
      margin: 1.666rem 0;
      a {
        text-decoration: none;
        color: #999;
        font-size: 1.5em;
        padding: 0.5em;
        display: flex;
        border-radius: 50%;
        border: solid #999 1px;
      }
    }
  }

  .partners {
    max-width: 444px;
    width: 100%;
    background: #222;
    padding: 0 25px;
    margin-bottom: ${rhythm(1)};

    img {
      object-fit: contain !important;
    }
  }
`;

const Footer = (props) => {
  const {
    contact,
    copyright,
    partners,
    slogan,
    address,
    phones,
  } = props.data.footer;
  return (
    <StyledFooter>
      <Container
        color={colors.mineShaft}
        justifyContent="space-between"
        style={{
          display: "flex",
          zIndex: 1,
          position: "sticky",
          bottom: 0,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: `${rhythm(1.5)} 0`,
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
            <Img critical={true}
              className="dds"
              alt="dds"
              fluid={props.data.footer.teethLogo.childImageSharp.fluid}
            ></Img>

            <Brand>
              <img alt="DentalVip" src={props.data.footer.logo.publicURL}></img>
            </Brand>
            {slogan && ReactHtmlParser(slogan)}
            <div>
              <hr></hr>
              {address && ReactHtmlParser(address)}
            </div>
          </div>
          <div className="dv-phone-div">
            {phones &&
              phones.map((i, k) => {
                return (
                  <div key={k} className="circle">
                    <a href={`tel:${i.number}`}>
                      <i className="icon-phone"></i>
                    </a>
                    {k + 1}
                  </div>
                );
              })}
          </div>

          <div className="partners-wrapper">
            {partners &&
              partners.map((i, k) => {
                return (
                  <Img critical={true}
                    key={`partner-${k}`}
                    alt={i.alt}
                    className="partners"
                    fluid={i.img.childImageSharp.fluid}
                  ></Img>
                );
              })}
          </div>
          <Link
            className="contact"
            to={contact && contact.link}
            style={scale(-0.4)}
          >
            <b>{contact && contact.text}</b>
          </Link>
        </div>
      </Container>
      <Container
        className="copyright"
        color={colors.codGrayLight}
        justifyContent="space-between"
        style={{
          padding: `${rhythm(1)} 5vw`,
          flexDirection: "column",
        }}
      >
        <div className="social">
          {props.data.footer.social.map((i, k) => {
            return ReactHtmlParser(i.item);
          })}
        </div>
        {copyright && ReactHtmlParser(copyright)}
        <div className="dv-legal-links">
          {props.data.footer.legal.map((i, k) => {
            return [
              <Link key={`link-${k}`} to={i.link}>
                {i.title}
              </Link>,

              k !== props.data.footer.legal.length - 1 && (
                <span key={`separator-${k}`}> - </span>
              ),
            ];
          })}
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
