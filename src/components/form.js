import React, { useState } from "react";
import BackgroundImage from "gatsby-background-image";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import ReactHtmlParser from "react-html-parser";
import { useWindowSize } from "../utils/hooks";

const StyledContent = styled(Container)`
  padding-left: calc(5vw - 15px);
  padding-right: calc(5vw - 15px);
  justify-content: space-around;
  color: white;
  padding-top: ${rhythm(4)};
  padding-bottom: ${rhythm(3)};

  margin: auto;
  .nmb {
    margin-bottom: 0 !important;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column !important;
  }
  h1 {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: ${rhythm(2)};
    &.big {
      font-size: ${rhythm(1.8)};
    }
    &.mt-1 {
      margin-top: ${rhythm(1)};
    }
  }

  h1,
  h2,
  h3 {
    text-align: center;
    font-weight: 300;
  }
  p {
    padding-left: 15px;
    padding-right: 15px;
    ${scale(-0.2)}
    margin-bottom: ${rhythm(0.5)};
    &.text-left {
      align-self: flex-start;
    }
  }

  form {
    display: flex;
    width: 100%;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
    main,
    aside {
      display: flex;
      flex-direction: column;
      width: 100%;
      button {
        padding: 10px 50px !important;
        font-size: 24px;
        font-family: Bebas Neue Bold;
        background: #91c508;
        width: fit-content;
        color: white;
        outline: none !important;
        margin-top: 10px !important;
        margin: 0 auto;
        border: none !important;
        &:hover {
          background: #222;
        }
      }
      span {
        padding: 10px 15px !important;
        display: flex;

        input,
        textarea,
        select {
          display: flex;
          padding-left: 5px;
          background: rgba(51, 51, 51, 0.39);
          border: 1px solid #777676;
          padding: 10px 15px !important;
          font-size: 16px;
          width: 100%;
          color: #b7b7b7 !important;
          font-family: Roboto, sans-serif;
          font-weight: 300 !important;
          &:focus {
            outline: 1px solid #91c508;
          }
          &.half {
            margin-right: 20px;
          }
        }
        select {
          background: rgba(51, 51, 51);
        }
      }
    }
  }
`;

const Form = (props) => {
  return (
    <BackgroundImage
      className="parallax"
      Tag="section"
      fluid={props.img.childImageSharp.fluid}
    >
      <StyledContent flexDirection="column" color="none">
        <h1>Consult Us Right Now!</h1>
        <p>
          <i class="fas fa-exclamation-circle"></i>To send a message it is
          mandatory to fill in all the fields of the form.
        </p>
        <br></br>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="row"
        >
          <main>
            <span>
              <input type="text" name="firstName" placeholder="First name" />
            </span>
            <span>
              <input placeholder="Last name" name="lastName" type="text" />
            </span>
            <span>
              <input type="email" name="email" placeholder="Email" />
            </span>
            <span>
              <input type="text" name="city" placeholder="City" />
            </span>
            <span>
              <input type="text" name="country" placeholder="Country" />
            </span>
            <span>
              <select  name="refered">
                <option value="">How did you know us?</option>
                <option value="By a Dentist">By a Dentist</option>
                <option value="By a Friend">By a Friend</option>
                <option value="On Instagram">On Instagram</option>
                <option value="On Facebook">On Facebook</option>
                <option value="On Google">On Google</option>
              </select>
            </span>
            <span>
              <select className="half" name="gender">
                <option value="">Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>

              <input type="tel" name="phone" placeholder="Phone Number" />
            </span>
            <span>
              <select
                name="specialty"
                aria-required="true"
                aria-invalid="false"
              >
                <option value="">Specialty of interest</option>
                <option value="Oral Surgery">Oral Surgery</option>
                <option value="Endodontics">Endodontics</option>
                <option value="Oral Surgery">Oral Surgery</option>
                <option value="Implants">Implants</option>
                <option value="General Dentistry">General Dentistry</option>
                <option value="Orthodontics">Orthodontics</option>
                <option value="Periodontics">Periodontics</option>
                <option value="Prosthesis">Prosthesis</option>
              </select>
            </span>
          </main>
          <aside>
            <span>
              <textarea
                placeholder="Describe your case. Please, include all relevant details, and as soon as possible, you will receive our reply."
                aria-invalid="false"
                aria-required="true"
                rows="6"
                cols="40"
                name="message"
              ></textarea>
            </span>

            <button type="submit">Send</button>
          </aside>
        </form>
      </StyledContent>
    </BackgroundImage>
  );
};

export default Form;
