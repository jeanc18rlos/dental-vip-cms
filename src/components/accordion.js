import React, { useState } from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";
import SmoothCollapse from "react-smooth-collapse";
const StyledAccordion = styled.section`
  padding: ${rhythm(3)} 5vw ${rhythm(3)};

  a {
    display: flex;
    cursor: pointer;
    &:hover {
      h4 {
        color: #91c508;
      }
      span {
        background: #91c508;
      }
    }
  }
  p,
  ul,
  ol {
    color: #555;

    margin-left: calc(20px + ${rhythm(1)});
  }
  h4 {
    color: #333;
    margin-top: ${rhythm(1)};
  }
  h1 {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    font-weight: 300;
    margin-bottom: ${rhythm(2)};
  }
  span {
    margin-top: ${rhythm(1)};
    margin-right: ${rhythm(1)};
    background: black;

    justify-content: center;
    align-items: center;
    display: flex;
    width: fit-content;
    height: fit-content;

    padding: 5px;
    font-size: 10px;
    color: #fff;
    border-radius: 50%;
    -webkit-transition: -webkit-transform 0.2s linear;
    transition: -webkit-transform 0.2s linear;
    transition: transform 0.2s linear;
    transition: transform 0.2s linear, -webkit-transform 0.2s linear;
    &.active {
      transform: rotate(45deg);
    }
  }
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    .grid-item {
      flex-basis: 100% !important;
    }
  }
  .grid-item {
    display: flex;
    flex-basis: 50%;
    -ms-flex: auto;
    position: relative;
    box-sizing: border-box;
    z-index: 1;
    &:last-of-type,
    :nth-last-of-type(2) {
      .content {
        border-bottom: 1px solid #ccc;
      }
    }
    &:nth-last-of-type(2) {
      .content {
        @media (max-width: 768px) {
          border-bottom: 0px solid #ccc;
        }
      }
    }
    .content {
      width: 100%;
      border-top: 1px solid #ccc;
    }
    &:nth-of-type(odd) {
      @media (min-width: 769px) {
        padding-right: ${rhythm(1)};
      }
    }
    &:nth-of-type(even) {
      @media (min-width: 769px) {
        padding-left: ${rhythm(1)};
      }
    }
  }
`;

const Accordion = (props) => {
  const [active, setActive] = useState(false);
  return (
    <StyledAccordion>
      <h1>Frequently Asked Questions</h1>
      {props.items.map((i, k) => {
        return (
          <div key={k} className="grid-item">
            <div className="content">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (active === k) {
                    setActive(false);
                  } else {
                    setActive(k);
                  }
                }}
              >
                <span className={active === k ? "active" : ""}>
                  <i className="icon-plus"></i>
                </span>{" "}
                {ReactHtmlParser(i.title)}
              </a>
              <SmoothCollapse expanded={active === k}>
                {ReactHtmlParser(i.content)}
              </SmoothCollapse>
            </div>
          </div>
        );
      })}
    </StyledAccordion>
  );
};

export default Accordion;
