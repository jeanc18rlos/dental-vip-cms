import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import Heading from "../components/heading";
import { graphql } from "gatsby";
import Parallax from "../components/parallax";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import contactImg from "../img/qdc-contacto.jpg";
const Form = styled.section`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .dv-contact-info {
      max-width: 100% !important;
    }
  }
  .dv-contact-form {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 calc(5vw - 10px);
    padding-bottom: ${rhythm(3)} !important;
    flex-direction: column;
    align-self: flex-start;
    p {
      margin-top: ${rhythm(3)};
      text-align: center;
    }
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
      display: flex;
      flex-direction: column;
      flex-flow: row wrap;
      .half {
        @media screen and (min-width: 1025px) {
          flex-basis: 50%;
        }
      }
      span {
        padding: 10px;
        flex-basis: 100%;
        display: flex;
        button,
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
  }
  .dv-contact-info {
    width: 100%;
    align-items: center;
    background: #222;
    color: white;
    padding: ${rhythm(4)} calc(5vw) ${rhythm(3)};
    display: flex;
    max-width: 600px;
    h3,
    h2 {
      font-family: "Bebas Neue Bold";
    }
    i {
      color: #999;
      margin-right: 10px;
    }
    .dv-underline {
      text-decoration: underline;
    }
    p {
      margin-left: ${rhythm(2)};
    }
  }
`;

const Map = styled.section`
  iframe {
    width: 100%;
    min-height: 60vh;
    border: none;
    margin-bottom: 0;
    @media screen and (max-width: 850px) {
      min-height: 70vh;
    }
  }
`;

export const ContactPageTemplate = ({ hero, amenities, parallax, heading }) => {
  return (
    <div>
      <Hero className="center single half" {...hero}></Hero>
      <Heading {...heading} />
      <Form>
        <div className="dv-contact-info">
          <div className="dv-main-menu-left">
            <h2 className="dv-company">
              DENTAL VIP, Especialidades Odontológicas s.c.
            </h2>
            <br></br>
            <h2>
              <i className="icon-phone phone" />
              <span>Teléfonos </span>
            </h2>
            <p>
              +58 <em>(212)</em> 261.5251 <br />
              +58 <em>(212)</em> 261.3732 <br />
              +58 <em>(212)</em> 261.3331
            </p>
            <br></br>
            <h2>
              <i className="icon-map-marker-alt" />
              <span>Dirección</span>
            </h2>
            <p>
              Multicentro Empresarial del Este, Torre Miranda,{" "}
              <br className="hidden-xs hidden-sm visible-md visible-lg" />
              Núcleo A, Piso 14, Oficina 143-A, Chacao, Caracas,
              <br className="hidden-xs hidden-sm visible-md visible-lg" />
            </p>
            <br></br>
            <h3>
              <i className="icon-clock" />
              <span>Horario de atención </span>
            </h3>
            <p>
              Lunes a Viernes<br></br>
              8:00 am - 5:00 pm<br></br>
              <span class="dv-underline">PREVIA CITA</span>
            </p>
            <br></br>
            <img src={contactImg} />
          </div>
        </div>
        <div className="dv-contact-form">
          <hr className="border-form" />
          <p>
            <i className="icon-exclamation-circle" />
            Para enviar un mensaje, es obligatorio rellenar todos los campos del
            formulario.
          </p>
          <form method="post" name="Contact Form">
            <span className="half">
              <input
                type="text"
                name="your-name"
                size={40}
                aria-required="true"
                aria-invalid="false"
                placeholder="Nombre"
              />
            </span>
            <span className="half">
              <input
                type="text"
                name="your-lastname"
                size={40}
                aria-required="true"
                aria-invalid="false"
                placeholder="Apellido"
              />
            </span>
            <span className="half">
              <input
                type="email"
                name="your-email"
                size={40}
                aria-required="true"
                aria-invalid="false"
                placeholder="Correo electrónico"
              />
            </span>
            <span className="half">
              <input
                type="tel"
                name="tel-617"
                size={40}
                aria-invalid="false"
                placeholder="Número de teléfono"
              />
            </span>
            <span className="half">
              <input
                type="text"
                name="city"
                size={40}
                aria-invalid="false"
                placeholder="Ciudad"
              />
            </span>
            <span className="half">
              <input
                type="text"
                name="country"
                size={40}
                aria-invalid="false"
                placeholder="País"
              />
            </span>
            <span>
              <input
                type="text"
                name="asunto"
                size={40}
                aria-invalid="false"
                placeholder="Asunto"
              />
            </span>
            <span>
              <textarea
                name="your-message"
                cols={40}
                rows={6}
                aria-invalid="false"
                placeholder="Escriba su mensaje"
              />
            </span>
            <button type="submit">Send</button>
          </form>
        </div>
      </Form>

      <Map>
        <iframe src="https://snazzymaps.com/embed/72109" />
      </Map>
      {parallax.display && <Parallax {...parallax} />}
      <Boxes content={true} {...amenities}></Boxes>
    </div>
  );
};

const ContactPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    hero,
    amenities,
    parallax,
    heading,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <ContactPageTemplate
        {...{
          templateKey,
          language,
          parallax,
          title,
          redirects,
          hero,
          amenities,
          heading,
        }}
      />
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "contact-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
        heading {
          display
          content
        }
        hero {
          background {
            scaleOnReveal
            img {
              childImageSharp {
                fluid(quality: 100, srcSetBreakpoints: [1500]) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            isParallax
          }
          anim {
            display
            type
          }
          height
          indicator
          portraitPosition
          content {
            position
            body
          }
        }

        parallax {
          display
          portraitPosition
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 75) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          content
        }

        amenities {
          title
          procedures {
            title
            to
            content
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [550], quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
