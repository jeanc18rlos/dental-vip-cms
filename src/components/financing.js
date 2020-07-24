import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import ReactHtmlParser from "react-html-parser";
import Img from "gatsby-image";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { navigateTo } from "gatsby";
const StyledModal = styled.div`
  background: white;
  height: fit-content;
  padding: 5% 16px;
  max-width: 600px;
  border-radius: 15px;
  margin: auto;
  h1 {
    font-weight: 300;
    color: #91c508;
  }
  p {
    margin: auto;
    margin-bottom: ${rhythm(1)};
    color: #555;
    text-align: center !important;
    max-width: 480px;
  }
  button {
    background: none !important;
    border: none;
    h1 {
      ${scale(1.25)}
      margin-bottom: 0 !important
    }
  }
`;

const StyledSection = styled.section`
  text-align: center;
  padding: 0 0 ${rhythm(3)};
  .title {
    font-weight: 300;
    margin-bottom: ${rhythm(2)};
    @media (min-width: 1355px) {
      width: 80%;
    }
  }
  .calculator {
    margin-top: ${rhythm(1)};
    max-width: 800px;
    table {
      border: none !important;
      select {
        border: none;
        background: white;
        border-bottom: 1px solid;
        min-width: 43%;
        width: 70%;
      }
      span,
      p {
        font-weight: bold;
        margin-bottom: 0;
      }
      input {
        width: 70%;
        border: none;
        border-bottom: 1px solid;
        margin-right: 16px;
      }
      button {
        color: white;
        background: #222;
        min-width: 170px;
        padding: 0.5em 1em;
        border: solid 1px white;
      }
      td,
      th {
        border: solid 1px #555 !important;
        padding-right: 1.11067rem !important;
        padding-left: 1.11067rem !important;
      }
    }
    .warning,
    .advise {
      color: grey;
    }
    .advise {
      text-align: center;
    }
  }
  .banner {
    width: 100%;
    max-width: 800px;
    margin-bottom: ${rhythm(2)};
    img {
      object-fit: contain !important;
    }
  }
  p {
    color: #555;
    text-align: left;
  }
  .small {
    ${scale(-0.25)}
  }
`;
const Financing = (props) => {
  const [calc, setCalc] = useState(false);
  const [modal, setModal] = useState(false);
  const openPopupbox = () => {
    const content = (
      <StyledModal>
        {ReactHtmlParser(props.modal.content)}
        <button
          type="button"
          onClick={() => {
            setModal(false);
            PopupboxManager.close();
            navigateTo("/")
          }}
          className="close"
        >
          <h1 style={{ fontFamily: "Bebas Neue Bold" }}>
            {props.modal.placeholder}
          </h1>
        </button>
      </StyledModal>
    );
    PopupboxManager.open({ content });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (props.modal.display && !modal) {
        setModal(true);
        openPopupbox();
      }
    }, props.modal.interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledSection>
      <PopupboxContainer />
      <Container
        justifyConten="center"
        alignItem="center"
        flexDirection="column"
      >
        <Img critical={true}
          className="banner"
          fluid={props.banner.childImageSharp.fluid}
        ></Img>
        {ReactHtmlParser(props.content)}

        <div className="calculator">
          {ReactHtmlParser(props.calculator.warning)}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              let principal = e.target.amount.value;
              let interest = e.target.rate.value / 100 / 12;
              let payments = e.target.time.value;
              let x = Math.pow(1 + interest, payments);
              let monthly = (principal * x * interest) / (x - 1);
              if (
                !isNaN(monthly) &&
                monthly != Number.POSITIVE_INFINITY &&
                monthly != Number.NEGATIVE_INFINITY
              ) {
                setCalc(Math.round(monthly * 100) / 100);
              }
              // Otherwise, the user's input was probably invalid, so don't
              // display anything.
              else {
                setCalc(false);
              }
            }}
            name="calculator"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    {ReactHtmlParser(props.calculator.placeholders.amount)}
                  </td>
                  <td>
                    <input type="number" id="amount" />
                    {ReactHtmlParser(props.calculator.placeholders.currency)}
                  </td>
                </tr>
                <tr>
                  <td>{ReactHtmlParser(props.calculator.placeholders.time)}</td>
                  <td>
                    <select id="time">
                      <option value="0"></option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                      <option value="48">48 </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>{ReactHtmlParser(props.calculator.placeholders.rate)}</td>
                  <td>
                    <input type="number" id="rate" value="24" readOnly={true} />
                    <span>%</span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ textAlign: "center" }}
                    colSpan={2}
                    align="center"
                  >
                    <button name="btn" type="submit">
                      {ReactHtmlParser(props.calculator.placeholders.calculate)}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {calc && (
              <div className="result">
                <h1>
                  {ReactHtmlParser(props.calculator.placeholders.result)} {calc}{" "}
                  {ReactHtmlParser(props.calculator.placeholders.currency)}
                </h1>
              </div>
            )}
          </form>
          {ReactHtmlParser(props.calculator.advise)}
        </div>
      </Container>
    </StyledSection>
  );
};

export default Financing;
