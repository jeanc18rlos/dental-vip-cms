import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import BasicContent from "../components/BasicContent";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import BackgroundImage from "gatsby-background-image";
import showdown from "showdown";
const converter = new showdown.Converter();
export const AnexedPageTemplate = ({
  hero,
  procedures,
  form,
  language,
  heading,
  plainParallax,
  paragraphSection
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && heading.display && <BasicContent {...heading} />}
      <BackgroundImage
        className="dv-specialties-parallax"
        fluid={plainParallax.image.childImageSharp.fluid}
      />
      <div
        style={{
          display: "flex",
          flexDirection: `${paragraphSection.align === 'left' ? 'row' : 'row-reverse'}`,
          justifyContent: "center"
        }}
        className="dv-main-paragraph annexed row"
      >
        <div className="image-wrap col-md-5 col-sm-12">
          <Img
            className="image"
            style={{marginLeft: `${paragraphSection.align === 'left' ? '0' : '10vw'}`}}
            fluid={paragraphSection.image.childImageSharp.fluid}
            alt="Cirugía Bucal - Image description"
          />
        </div>
        <aside
          style={{ padding: 0 }}
          className="col-md-7 col-sm-12"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(paragraphSection.body)
          }}
        ></aside>
      </div>

      <BackgroundImage
        fluid={form.img.childImageSharp.fluid}
        tag="section"
        section
        className="dv-form"
      >
        <h1>{form.title}</h1>
        <div className="msg col-xs-12 text-center">
          <i className="fas fa-exclamation-circle" />
          {language !== "es"
            ? "To send a message it is mandatory to fill in all the fields of the form."
            : "Para enviar un mensaje, es obligatorio rellenar todos los campos del formulario."}
        </div>

        <form action="#" method="post" className="row">
          <main className=" row col-xs-12 col-md-12 col-lg-6 col-xl-6 col-sm-12">
            <div className=" col-xs-12 col-md-6 col-sm-6">
              <span>
                <input
                  type="text"
                  name="firstName"
                  placeholder={language === "es" ? "Nombre" : "First name"}
                />
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-6">
              <span>
                <input
                  placeholder={language === "es" ? "Apellido" : "Last name"}
                  name="lastName"
                  type="text"
                />
              </span>
            </div>
            <div className="col-xs-12 col-md-12 col-sm-12">
              <span>
                <input
                  type="email"
                  name="email"
                  placeholder={
                    language === "es" ? "Correo electrónico" : "Email"
                  }
                />
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-left dv-no-padding-right-mobile">
              <span>
                <input
                  type="text"
                  name="city"
                  placeholder={language === "es" ? "Ciudad" : "City"}
                />
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-6">
              <span>
                <input
                  type="text"
                  name="country"
                  placeholder={language === "es" ? "País" : "Country"}
                />
              </span>
            </div>
            <div className="col-xs-12 col-md-12 col-sm-12 select">
              <span>
                <select name="gender">
                  <option value="">
                    {language === "es" ? "Género" : "Gender"}
                  </option>
                  <option value={language === "es" ? "Femenino" : "Female"}>
                    {language === "es" ? "Femenino" : "Female"}
                  </option>
                  <option value={language === "es" ? "Masculino" : "Male"}>
                    {language === "es" ? "Masculino" : "Male"}
                  </option>
                </select>
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <span>
                <select
                  name="refered"
                  style={{ margin: "auto", padding: "5px" }}
                >
                  <option value="">
                    {language === "es"
                      ? "¿Cómo nos ha conocido?"
                      : "How did you know us?"}
                  </option>
                  <option
                    value={
                      language === "es" ? "Por un odontólogo" : "By a Dentist"
                    }
                  >
                    {language === "es" ? "Por un odontólogo" : "By a Dentist"}
                  </option>
                  <option
                    value={language === "es" ? "Por un amigo" : "By a Friend"}
                  >
                    {language === "es" ? "Por un amigo" : "By a Friend"}
                  </option>
                  <option
                    value={language === "es" ? "Por Instagram" : "On Instagram"}
                  >
                    {language === "es" ? "Por Instagram" : "On Instagram"}
                  </option>
                  <option
                    value={language === "es" ? "Por Facebook" : "On Facebook"}
                  >
                    {language === "es" ? "Por Facebook" : "On Facebook"}
                  </option>
                  <option
                    value={language === "es" ? "Por Google" : "On Google"}
                  >
                    {language === "es" ? "Por Google" : "On Google"}
                  </option>
                </select>
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-12 dv-no-padding-left dv-no-padding-right-mobile">
              <span>
                <input
                  type="tel"
                  name="telefono"
                  placeholder={
                    language === "es" ? "Número de teléfono" : "Phone Number"
                  }
                />
              </span>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-12"
              style={{ paddingLeft: "7px", paddingBottom: 0 }}
            >
              <span>
                <select
                  name="specialty"
                  aria-required="true"
                  aria-invalid="false"
                >
                  <option value="">
                    {language === "es"
                      ? "Especialidad de interés"
                      : "Specialty of interest"}
                  </option>
                  <option
                    value={language === "es" ? "Cirugía Bucal" : "Oral Surgery"}
                  >
                    {language === "es" ? "Cirugía Bucal" : "Oral Surgery"}
                  </option>
                  <option
                    value={language === "es" ? "Endodoncia" : "Endodontics"}
                  >
                    {language === "es" ? "Endodoncia" : "Endodontics"}
                  </option>
                  <option
                    value={
                      language === "es" ? "Estética Dental" : "Oral Surgery"
                    }
                  >
                    {language === "es" ? "Estética Dental" : "Oral Surgery"}
                  </option>
                  <option value={language === "es" ? "Implantes" : "Implants"}>
                    {language === "es" ? "Implantes" : "Implants"}
                  </option>
                  <option
                    value={
                      language === "es"
                        ? "Odontología General"
                        : "General Dentistry"
                    }
                  >
                    {language === "es"
                      ? "Odontología General"
                      : "General Dentistry"}
                  </option>
                  <option
                    value={language === "es" ? "Ortodoncia" : "Orthodontics"}
                  >
                    {language === "es" ? "Ortodoncia" : "Orthodontics"}
                  </option>
                  <option
                    value={language === "es" ? "Periodoncia" : "Periodontics"}
                  >
                    {language === "es" ? "Periodoncia" : "Periodontics"}
                  </option>
                  <option value={language === "es" ? "Prótesis" : "Prosthesis"}>
                    {language === "es" ? "Prótesis" : "Prosthesis"}
                  </option>
                </select>
              </span>
            </div>
          </main>
          <aside className="row col-xs-12 col-md-12 col-lg-6 col-xl-6 col-sm-12">
            <div className="col-xs-12 col-md-12 col-sm-12">
              <span>
                <textarea
                  placeholder={
                    language === "es"
                      ? "Describa su caso. Por favor, incluya todos los detalles posibles, y a la mayor brevedad, recibirá nuestra réplica."
                      : "Describe your case. Please, include all relevant details, and as soon as possible, you will receive our reply."
                  }
                  aria-invalid="false"
                  aria-required="true"
                  rows="6"
                  cols="40"
                  name="message"
                ></textarea>
              </span>
            </div>
            <div
              style={{ textAlign: "center" }}
              className="col-xs-12 col-md-12 col-sm-12"
            >
              <button type="submit">
                {language === "es" ? "Enviar" : "Send"}
              </button>
            </div>
          </aside>
        </form>
      </BackgroundImage>

      {procedures && procedures.display && <Procedures {...procedures} />}
    </div>
  );
};

const AnexedPage = ({ data }) => {
  const {
    templateKey,
    language,
    form,
    title,
    heading,
    redirects,
    plainParallax,
    paragraphSection,
    hero,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang link={redirects} etLang language={language} />
      <AnexedPageTemplate
        {...{
          templateKey,
          heading,
          language,
          plainParallax,
          title,
          redirects,
          paragraphSection,
          hero,
          form,
          procedures
        }}
      />
    </Layout>
  );
};

export default AnexedPage;

export const pageQuery = graphql`
  query AnexedPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "annexed-page" } }
    ) {
      frontmatter {
        language
        title
        hero {
          display
          type
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          parallax
          indicator
          halfSize
        }
        heading {
          display
          classname
          title
          content
        }
        plainParallax {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        paragraphSection {
          align
          body
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        form {
          title
          img {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        procedures {
          display
          title
          procedures {
            title
            to
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
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
