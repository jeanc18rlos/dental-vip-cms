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

import Form from "../components/form";
const StyledForm = styled.section`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .dv-contact-info {
      max-width: 100% !important;
    }
  }

  .dv-contact-info {
    width: 100%;
    align-items: center;
    background: #202020;
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

export const ContactPageTemplate = ({
  hero,
  language,
  amenities,
  parallax,
  forms,
  heading,
}) => {
  return (
    <div>
      <Hero className="center single half" {...hero}></Hero>
      <Heading {...heading} />
      <StyledForm>
        <div className="dv-contact-info">
          <div className="dv-main-menu-left">
            <h2 className="dv-company">
              DENTAL VIP, Especialidades Odontológicas s.c.
            </h2>
            <br></br>
            <h2>
              <i className="icon-phone phone" />
              <span>{language === "es" ? "Teléfonos" : "Phones"} </span>
            </h2>
            <p>
              +58 <em>(212)</em> 261.5251 <br />
              +58 <em>(212)</em> 261.3732 <br />
              +58 <em>(212)</em> 261.3331
            </p>
            <br></br>
            <h2>
              <i className="icon-map-marker-alt" />
              <span>{language === "es" ? "Dirección" : "ADDRESS"}</span>
            </h2>
            <p>
              Multicentro Empresarial del Este, Torre Miranda,{" "}
              <br className="hidden-xs hidden-sm visible-md visible-lg" />
              {language === "es"
                ? "Núcleo A, Piso 14, Oficina 143-A, Chacao, Caracas,"
                : "Tower, Nucleus A, 14th Floor, Office 143-A, Chacao, Caracas,"}
              <br className="hidden-xs hidden-sm visible-md visible-lg" />
              {language === "es"
                ? "Venezuela. C.P. 1060"
                : "Venezuela. P.C. 1060"}
            </p>
            <br></br>
            <h3>
              <i className="icon-clock" />
              <span>
                {language === "es"
                  ? "Horario de atención"
                  : "CUSTOMER SERVICE HOURS"}
              </span>
            </h3>
            <p>
              {language === "es" ? "Lunes a Viernes" : "Monday to Friday"}
              <br></br>
              8:00 am - 5:00 pm<br></br>
              <span class="dv-underline">
                {language === "es" ? "PREVIA CITA" : "BY APPOINTMENT"}
              </span>
            </p>
            <br></br>
            <img src={contactImg} />
          </div>
        </div>
        <Form language={language} data={forms.contact}></Form>
      </StyledForm>

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
                fluid(srcSetBreakpoints: [1500], quality: 90) {
                  ...GatsbyImageSharpFluid
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
              fluid(srcSetBreakpoints: [1900], quality: 100) {
                ...GatsbyImageSharpFluid
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
                fluid(srcSetBreakpoints: [550], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
