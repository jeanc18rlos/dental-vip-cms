import React, { useState } from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import ProgressBar from "react-customizable-progressbar";
import AnimatedNumber from "react-animated-number";
import ReactHtmlParser from "react-html-parser";
import Fade from "react-reveal/Fade";
import { useWindowSize } from "../utils/hooks";

const StyledContent = styled(Container)`
  justify-content: space-around;
  color: white;
  padding-top: ${rhythm(4)};
  padding-bottom: ${rhythm(4)};
  @media screen and (max-width: 768px) {
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
    min-width: 170px;
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

  .statistics {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    span {
      font-family: "Bebas Neue Bold";
      font-size: 58px;
    }
    h1 {
      text-shadow: black 2px 4px 9px;
      margin: 0px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: ${rhythm(1)};
    }
    @media screen and (max-width: 1023px) {
      max-width: 200px !important;
      span {
        font-size: 42px !important;
      }
      h1 {
        ${scale(0.5)};
      }
    }
    @media screen and (max-width: 768px) {
      max-width: 100% !important;
      flex-direction: row !important;
      &:nth-of-type(odd) {
        justify-content: flex-end;
      }
      .RCP {
        max-width: 180px;
      }
      span {
        font-size: 32px !important;
      }
      h1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ${scale(0.5)};
      }
      @media screen and (max-width: 450px) {
        .RCP {
          max-width: 135px;
        }
      }
      @media screen and (max-width: 355px) {
        h1 {
          ${scale(-0.125)};
        }
      }
    }
  }
`;
const Statistics = (props) => {
  const [progress, setProgress] = useState(0);
  const size = useWindowSize();
  return (
    <BackgroundImage critical={true}
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
                    strokeWidth={2}
                    pointerRadius={12}
                    pointerStrokeWidth={2}
                    pointerStrokeColor="#91c508"
                    radius={100}
                    progress={progress}
                    strokeColor="#91c508"
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
                              fontSize:
                                (size.width > 1023 && 65) ||
                                (size.width > 450 && size.width <= 768 && 45) ||
                                (size.width <= 450 && 35),
                              fontFamily: "Bebas Neue Bold",
                              transitionProperty: "opacity",
                            }}
                            frameStyle={(perc) => (perc === 100 ? {} : {})}
                            formatValue={(n) => Math.trunc(n)}
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
