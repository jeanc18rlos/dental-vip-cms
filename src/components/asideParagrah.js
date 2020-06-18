import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { Container } from "../Elements/Container";
import { Link } from "gatsby";
import ReactHtmlParser from "react-html-parser";

const StyledContent = styled(Container)`
  ${(props) =>
    props.contained &&
    `
    padding-top: ${rhythm(4)}!important;  
    padding-bottom: ${rhythm(0)}!important;
   
    @media screen and (min-width: 768px) {
      .paragraph-item{
        &.odd {
        padding-left: 5vw;
      }
      &.even {
        padding-right: 5vw;
      }
      }
      
    
      padding-top: ${rhythm(2)}!important;
      padding-bottom: ${rhythm(2)}!important;
      .small {
        min-height: 50vh !important;
        &:before {
          background-size: 170% !important;
          background-position: center !important;
        }
        &:after {
          background-size: 170% !important;
          background-position: center !important;
        }
      }
    }
    @media screen and (min-width: 1200px) {
      .small {
        &:before {
          background-size: contain !important;
        }
        &:after {
          background-size: contain !important;
        }
      }
    }
  `}
  ${(props) =>
    props.enforce &&
    ` ${
      props.contained &&
      props.enforce &&
      `
      
      .small {
        .content-wrapper {
          opacity: 0;
        }
        &:before {
          background-size: contain !important;
        }
        &:after {
          background-size: contain !important;
        }
      }`
    }`}
  padding: 0;
  .link-box {
    display: flex;
    flex-flow: wrap;
  }
  .link {
    white-space: nowrap;
    text-align: center;
    width: fit-content;
    cursor: pointer;
    font-weight: 700;
    padding: 10px 20px;
    color: #222 !important;
    border: 1px solid #222;
    text-transform: uppercase;
    background-color: #fff;
    text-decoration: none !important;
    margin-bottom: ${rhythm(1)} !important;
    &:hover {
      background-color: #222 !important;
      color: #fff !important;
    }
  }
  .icon {
    width: 100%;
    padding-bottom: 40px;
    margin-bottom: ${rhythm(1)} !important;
    &:before,
    :after {
      background-size: contain !important;
      background-position: left !important;
    }
  }
  ul {
    margin-left: 0;
    li {
      &.nl {
        padding-left: 0;
      }
      padding-left: ${rhythm(2)};
      position: relative;
      list-style: none;
      i {
        position: absolute;
        left: 0;
        top: 0.1em;
        color: white;
        background: #91c508;
        padding: 4px;
        border-radius: 50%;
      }
    }
  }
  .boxed {
    width: fit-content;
    padding: 5px 5px 0px 5px;
    letter-spacing: 2px;
    background: #333;
    color: #fff;
  }
  .light {
    font-weight: 300;
  }
  .bebas {
    font-family: "Bebas Neue Bold";
  }
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
        padding-bottom: ${rhythm(3)} !important;
      }
      padding: 0 5vw !important;
      flex-direction: column !important;

      .content-wrapper {
        padding: 0 !important;
        max-width: 100% !important;
        h2,
        h1 {
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
      display: flex;

      @media screen and (min-width: 1024px) {
        min-height: ${(props) => (!props.small ? "70vh" : "40vh")};
      }
      @media screen and (min-width: 1024px) {
        .content-wrapper {
          margin-top: ${rhythm(3)} !important;
          margin-bottom: ${rhythm(2)} !important;
        }
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
      h2,
      h1 {
        display: flex;
        align-items: center;
        margin-top: ${rhythm(1)};
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
    <StyledContent
      small={props.small}
      contained={props.contained}
      flexDirection="column"
      color="none"
      enforce={props.enforce}
    >
      {props.items.map((i, k) => {
        return (
          <div
            key={k}
            className={`${
              props.contained && (k + 1) % 2 === 0 ? "odd" : "even"
            } paragraph-item`}
          >
            <BackgroundImage
              className={`image ${props.contained && "small"} `}
              fluid={i.img.childImageSharp.fluid}
            >
              <div className="content-wrapper">
                {ReactHtmlParser(i.content)}
              </div>
            </BackgroundImage>
            <div className="content-wrapper">
              {props.top && <hr className="top"></hr>}
              {ReactHtmlParser(i.content)}
              {i.footer && i.footer.icon.display && (
                <BackgroundImage
                  fluid={i.footer.icon.img.childImageSharp.fluid}
                  className="icon"
                />
              )}
              {i.footer && i.footer.link.display && (
                <Link to={i.footer.link.to} className="link">
                  {ReactHtmlParser(i.footer.link.placeholder)}
                </Link>
              )}
              {props.bottom && <hr className="bottom"></hr>}
            </div>
          </div>
        );
      })}
    </StyledContent>
  );
};

export default Paragraph;
