import React from "react";
import { Container } from "../../Elements/Container";
import { colors } from "../../styles";
import styled from "styled-components";
import "flag-icon-css/css/flag-icon.min.css";
import logo from "../../css/icons/svg/logo.svg";
import { rhythm, scale } from "../../utils/typography";
import ReactHtmlParser from "react-html-parser";

const Brand = styled.a`
  display: flex;
  img {
    max-width: 100px;
    width: 100px;
  }
`;

const StyledFooter = styled.footer`
  color: #999999;
  .dv-legal-links {
    text-align: center;
    a {
      ${scale(-0.2)};
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
    max-width: 400px;
    width: 100%;
  }
  .bebas {
    letter-spacing: 2px;
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
      margin-bottom: 1.666rem;
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
    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      &:before {
        display: none;
      }
    }
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
    max-width: 160px;
    background: #222;
    padding: 0 30px;
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
            <img
              className="dds"
              alt="dds"
              src="https://dental-vip-stagging.netlify.com/static/1631907276ecaa86c964a8c1ee86a8df/497c6/teeth-logo.png"
            ></img>
            <Brand>
              <img alt="DentalVip" src={logo}></img>
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
                return <img alt={i.alt} className="partners" src={logo}></img>;
              })}
          </div>
          <a
            className="contact"
            to={contact && contact.link}
            style={scale(0.1)}
          >
            <b>{contact && contact.text}</b>
          </a>
        </div>
      </Container>
      <Container
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
        <div class="dv-legal-links">
          {props.data.footer.legal.map((i, k) => {
            return [
              <a>{i.title}</a>,

              k !== props.data.footer.legal.length - 1 && <span> - </span>,
            ];
          })}
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
