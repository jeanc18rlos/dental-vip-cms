import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";

const SyledList = styled.section`
  p {
    color: #555;
  }
  h4 {
    color: #333;
  }
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding: 0 5vw;
  padding-bottom: ${rhythm(1)};
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
    margin-bottom: ${rhythm(2)};
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
    .number-icon {
      background: none;
      display: flex;
      color: black;
      min-width: 50px;
      height: fit-content;
      overflow: hidden;
      width: fit-content;
      margin-right: ${rhythm(1)};
      i {
        height: 50px;
        width: 50px;
        font-size: 50px;
      }
    }
  }
`;

const List = props => {
  return (
    <SyledList>
      {props.items.map((i, k) => {
        return (
          <div key={k} className="grid-item">
            <span className="number-icon">
              <i className={`icon-${k+1}`}></i>
            </span>
            <div className="content">{ReactHtmlParser(i.content)}</div>
          </div>
        );
      })}
    </SyledList>
  );
};

export default List;