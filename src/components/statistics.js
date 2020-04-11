import React, { useState } from "react";
import BackgroundImage from "gatsby-background-image";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import ProgressBar from "react-customizable-progressbar";
import AnimatedNumber from "react-animated-number";
import ReactHtmlParser from "react-html-parser";
import Fade from "react-reveal/Fade";

const StyledContent = styled(Container)`
  justify-content: space-around;
  color: white;
  padding-top: ${rhythm(4)};
  padding-bottom: ${rhythm(4)};
  @media screen and (max-width: 1024px) {
    flex-direction: column !important;
  }
  h1 {
    margin-bottom: ${rhythm(2)};
  }
  h1,
  h2,
  h3 {
    text-align: center;
    font-weight: 300;
  }
  a {
    ${scale(-0.2)};
    text-transform: uppercase;
    font-weight: 700;
    background: #222;
    color: #91c508;
    padding: 10px 20px;
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
    text-decoration: none;
    &:hover {
      background: #91c508;
      color: #222;
    }
  }
  @media screen and (max-width: 1024px) {
    .statistics {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 300px;
      span {
        font-family: "Bebas Neue Bold";
        font-size: 62px;
      }
      h1 {
        text-shadow: black 2px 4px 9px;
        margin: 0px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
  .statistics {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    span {
      font-family: "Bebas Neue Bold";
      font-size: 62px;
    }
    h1 {
      text-shadow: black 2px 4px 9px;
      margin: 0px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: ${rhythm(1)};
    }
  }
`;
const Statistics = props => {
  const [progress, setProgress] = useState(0);
  return (
    <BackgroundImage
      className="parallax"
      Tag="section"
      fluid={props.image.childImageSharp.fluid}
      style={props.nocontent && { minHeight: "100vh" }}
    >
      {!props.nocontent && (
        <StyledContent flexDirection="row" color="none">
          {props.items.map((i, k) => {
            return (
              <Fade key={`item-${k}`} onReveal={() => setProgress(100)}>
                <div className="statistics">
                  <ProgressBar
                    radius={100}
                    progress={progress}
                    strokeWidth={18}
                    strokeColor="#91c508"
                    strokeLinecap="square"
                    trackStrokeWidth={18}
                    transition="3s ease 0.5s"
                    trackTransition="0s ease"
                  >
                    <div className="count-indicator">
                      <div>
                        <span>+</span>
                        {progress > 0 && (
                          <AnimatedNumber
                            component="text"
                            value={i.number}
                            style={{
                              transition: "0.8s ease-out",
                              fontSize: 70,
                              fontFamily: "Bebas Neue Bold",
                              transitionProperty: "opacity"
                            }}
                            frameStyle={perc => (perc === 100 ? {} : {})}
                            formatValue={n => Math.trunc(n)}
                            duration={3000}
                          />
                        )}
                      </div>
                    </div>
                  </ProgressBar>
                  {ReactHtmlParser(i.title)}
                </div>
              </Fade>
            );
          })}
        </StyledContent>
      )}
    </BackgroundImage>
  );
};

export default Statistics;
