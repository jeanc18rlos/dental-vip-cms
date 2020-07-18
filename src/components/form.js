import React, { useState } from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Container } from "../Elements/Container";
import ReactHtmlParser from "react-html-parser";
import * as yup from "yup";
import { navigate } from "gatsby";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import Axios from "axios";

const StyledForm2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 calc(5vw - 10px);
  padding-bottom: ${rhythm(2)} !important;
  flex-direction: column;
  align-self: flex-start;
  label {
    padding: 0;
    display: flex;
    color: red;
    text-transform: capitalize;
    font-weight: bold;
  }
  .submit-group {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 8px;
    display: block;
    margin: auto;
    margin-right: 6px;
    @media screen and (max-width: 1024px) {
      align-self: center !important;
      margin-right: auto !important;
    }
  }
  p {
    margin-top: ${rhythm(3)};
    text-align: center;
  }
  .button {
    padding: 10px 50px !important;
    font-size: 24px;
    font-family: Bebas Neue Bold;
    background: #91c508;
    min-width: 170px;
    color: white;
    width: 100%;
    outline: none !important;
    margin-top: 10px !important;
    margin: 0 auto;
    margin-right: 10px !important;
    border: none !important;
    &:hover {
      background: #222;
    }
  }
  hr {
    display: flex;
    width: 100%;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    .main {
      width: 100%;
    }
    .half {
      @media screen and (min-width: 1025px) {
        flex-basis: 50%;
      }
    }
    .captcha {
      margin-top: ${rhythm(0.5)};
    }
    button {
      padding: 10px 50px !important;
      font-size: 24px;
      font-family: Bebas Neue Bold;
      background: #91c508;
      width: 100%;
      color: white;
      outline: none !important;
      margin-top: 10px !important;
      margin: 0 auto;
      border: none !important;
      min-width: 170px;
      &:hover {
        background: #222;
      }
    }
    span {
      padding: 10px;
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
      .button,
      input,
      optgroup,
      select,
      textarea {
        width: 100%;
        background: #fff;
        color: #555;
        width: 100%;
        font-weight: 400;
        padding: 10px;
        border: 1px solid #555;
        outline: none;
        &:focus {
          outline: 2px solid #91c508;
        }
      }
    }
  }
`;

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
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    ${scale(-0.2)}
    margin-bottom: ${rhythm(0.5)};
    &.text-left {
      align-self: flex-start;
    }
  }
  .submit-group{
    width: fit-content;

    display: block;
    margin: 0 0 0 auto;
    @media screen and (max-width: 1024px) {
      display: block;
    margin: 0 auto;
    }
  }
 
  form {
    display: flex;

   
    width: 100%;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
    aside{
      flex-direction: column !important;
    }
    main{
      flex-direction: row !important;

        flex-flow: row wrap;
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
      label{
        padding: 0;
        display: flex;
        color: red;
       text-transform: capitalize;
       font-weight: bold;
      }
      span{
        flex-direction:column;
        height: fit-content;
        max-height: fit-content;
        flex-basis: 100%;
        &.half {
      @media screen and (min-width: 1025px) {
        flex-basis: 50%;
      }
    }
      }
      button{
        margin: 17px;
    width: calc(100% - 35px);
      }
      span, .captcha {
        padding: 10px 15px !important;
        margin-top: 0;
        display: flex;

        input,
        textarea,
        select {
          display: flex;
          padding-left: 5px;
          background: rgba(51, 51, 51, 1);
          border: 1px solid #777676;
          padding: 10px 15px !important;
          font-size: 16px;
          width: 100%;
          color: white !important;
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
  const messages = {
    isRequired: () => {
      return props.language === "es"
        ? "* Este campo es requerido"
        : "* This field is required";
    },
    notDefault: () => {
      return props.language === "es"
        ? "* El valor de este campo no puede ser el valor por defecto"
        : "* The value of this field cannot be the default one";
    },
    validEmail: () => {
      return props.language === "es" ? "* Email no valido" : "* Invalid Email";
    },
    validPhone: () => {
      return props.language === "es"
        ? "* Telefono no valido, EJ: 00584121234567"
        : "* Invalid Phone, EX: 00584121234567";
    },
  };
  const schema = yup.object().shape({
    subject: yup.string().required(messages.isRequired()),
    name: yup.string().required(messages.isRequired()),
    lastName: yup.string().required(messages.isRequired()),
    email: yup
      .string()
      .email(messages.validEmail())
      .required(messages.isRequired()),
    phone: yup
      .string()
      .notOneOf(["default"], messages.notDefault())
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        messages.validPhone()
      )
      .required(messages.isRequired()),
    city: yup.string().required(messages.isRequired()),
    country: yup.string().required(messages.isRequired()),
    message: yup.string().required(messages.isRequired()),
  });
  const schema2 = yup.object().shape({
    referredBy: yup
      .string()
      .notOneOf(["default"], messages.notDefault())
      .required(messages.isRequired()),
    specialty: yup
      .string()
      .notOneOf(["default"], messages.notDefault())
      .required(messages.isRequired()),

    gender: yup
      .string()
      .notOneOf(["default"], messages.notDefault())
      .required(messages.isRequired()),
    subject: yup.string().required(messages.isRequired()),
    name: yup.string().required(messages.isRequired()),
    lastName: yup.string().required(messages.isRequired()),
    email: yup
      .string()
      .email(messages.validEmail())
      .required(messages.isRequired()),
    phone: yup
      .string()
      .notOneOf(["default"], messages.notDefault())
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        messages.validPhone()
      )
      .required(messages.isRequired()),
    city: yup.string().required(messages.isRequired()),
    country: yup.string().required(messages.isRequired()),
    message: yup.string().required(messages.isRequired()),
  });
  const { register, handleSubmit, watch, errors } = useForm({
    validationSchema: props.type === "extended" ? schema2 : schema,
  });
  const [recaptcha, setRecaptcha] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = (data) => {
    if (!recaptcha) {
      setError(true);
      return null;
    }
    const body = { ...data, time: Date.now() };

    Axios.post("https://us-central1-dentalvip.cloudfunctions.net/submit", body)
      .then(() => {
        navigate(
          `${
            props.language === "es"
              ? "/gracias-por-contactarnos/"
              : "/en/thank-you/"
          }`
        );
      })
      .catch((error) => {
       return error;
      });
  };

  return props.type === "extended" ? (
    <BackgroundImage
      className="parallax"
      Tag="section"
      fluid={props.img.childImageSharp.fluid}
    >
      <StyledContent flexDirection="column" color="none">
        {ReactHtmlParser(props.title)}
        <p>
          <i style={{color:"red"}} className="icon-instagram"></i>{" "}
          {ReactHtmlParser(props.data.warning)}
        </p>
        <br></br>
        <form
          name="Specialties Form"
          onSubmit={handleSubmit(onSubmit)}
          className="row"
        >
          <main>
            {props.data.fields.map((i, k) => {
              return (
                <>
                  {i.type === "select" && (
                    <span key={k}>
                      <select name={i.name} ref={register}>
                        <option selected={true} value={"default"}>
                          {i.placeholder}
                        </option>
                        ;
                        {i.options.items.map((opt, key) => {
                          return <option key={key} value={opt.value}>{opt.value}</option>;
                        })}
                      </select>
                      {errors[i.name] && (
                        <label>{errors[i.name].message}</label>
                      )}
                    </span>
                  )}

                  {i.type !== "textarea" && i.type !== "select" && (
                    <span className={i.name !== "subject" && "half"}>
                      {" "}
                      <input
                        type={i.type}
                        name={i.name}
                        placeholder={i.placeholder}
                        ref={register}
                      />{" "}
                      {errors[i.name] && (
                        <label>{errors[i.name].message}</label>
                      )}
                    </span>
                  )}
                </>
              );
            })}
          </main>
          <aside>
            {props.data.fields.map((i, k) => {
              return (
                i.type === "textarea" && (
                  <span key={k}>
                    <textarea
                      placeholder={i.placeholder}
                      rows="6"
                      cols="40"
                      name={i.name}
                      ref={register}
                    ></textarea>
                    {errors[i.name] && <label>{errors[i.name].message}</label>}
                  </span>
                )
              );
            })}
            <div className="submit-group">
              <ReCAPTCHA
                className="captcha"
                theme={"Dark"}
                Badge="inline"
                /*size="compact"*/
                sitekey="6LfMI6YZAAAAAO1akvBG2ILmPfl8mEmZoHl4KWNS"
                onChange={() => {
                  setRecaptcha(true);
                }}
              />
              {error && !recaptcha && (
                <label style={{ padding: "0 15px" }}>
                  {props.language === "es"
                    ? "Debe confirmar que no es un robot"
                    : "You need to confirm that you are not a robot"}
                </label>
              )}

              <button type="submit">
                {props.language === "es" ? "ENVIAR" : "SEND"}
              </button>
            </div>
          </aside>
        </form>
      </StyledContent>
    </BackgroundImage>
  ) : (
    <StyledForm2>
      <hr className="border-form" />
      <p>
        <i className="icon-exclamation-circle" />
        {ReactHtmlParser(props.data.warning)}
      </p>
      <form
        name="Specialties Form"
        onSubmit={handleSubmit(onSubmit)}
        className="row"
      >
        {props.data.fields.map((i, k) => {
          return (
            <>
              {i.type !== "textarea" && i.type !== "select" ? (
                <span key={k} className={i.name === "subject" ? " " : "half"}>
                  {" "}
                  <input
                    type={i.type}
                    name={i.name}
                    placeholder={i.placeholder}
                    ref={register}
                  />{" "}
                  {errors[i.name] && <label>{errors[i.name].message}</label>}
                </span>
              ) : (
                <span>
                  <textarea
                    placeholder={i.placeholder}
                    rows="6"
                    cols="40"
                    name={i.name}
                    ref={register}
                  ></textarea>
                  {errors[i.name] && <label>{errors[i.name].message}</label>}
                </span>
              )}
            </>
          );
        })}
        <div className="submit-group">
          <ReCAPTCHA
            className="captcha"
            sitekey="6LfMI6YZAAAAAO1akvBG2ILmPfl8mEmZoHl4KWNS"
            onChange={() => {
              setRecaptcha(true);
            }}
          />
          {error && !recaptcha && (
            <label style={{ padding: "0 15px" }}>
              {props.language === "es"
                ? "Debe confirmar que no es un robot"
                : "You need to confirm that you are not a robot"}
            </label>
          )}

          <button type="submit">
            {props.language === "es" ? "ENVIAR" : "SEND"}
          </button>
        </div>
      </form>
    </StyledForm2>
  );
};

export default Form;
