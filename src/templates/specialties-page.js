import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import Quote from "../components/Quote";
import Quotes from "../components/Quotes";
import DVfaq from "../components/DV-Faq";
import DVexterior from "../components/DV-Exterior";
import Img from "gatsby-image";
import showdown from "showdown";
import Whitespace from "../components/Whitespace";

import BackgroundImage from "gatsby-background-image";
import Carousel from "../components/Carousel";
import DVsideContent from "../components/DV-SideContent";
const converter = new showdown.Converter();

export const SpecialtiesPageTemplate = ({
  hero,
  specialtiesHeading,
  procedures,
  faq,
  redirects,
  clinicCases,
  form,
  width,
  asides,
  lightQuote,
  paragraphSection,
  plainParallax,
  language,
  quote
}) => {
  const lazyLightBox = {
    display: clinicCases.lightbox.display,
    type: clinicCases.lightbox.type,
    placeholder: clinicCases.lightbox.placeholder,
    images: clinicCases.lightbox.images.map((i,k) => {
      return {
        renderItem: () => {
          return i.image.childImageSharp ? (
            <Img
              className="lightbox-lazy facilities"
              fluid={i.image.childImageSharp.fluid}
            />
          ) : (
            <img className="lightbox-lazy"  alt={`gallery-${k}`} src={i.image} />
          );
        }
      };
    })
  };
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {specialtiesHeading && specialtiesHeading.display && (
        <section className="dv-specialties-heading">
          <div className="container-fluid dv-main-menu">
            <Img
              className="image"
              fluid={specialtiesHeading.img.childImageSharp.fluid}
              alt="Prótesis Icon"
              style={{ borderRadius: "50%" }}
            />
            <p>{specialtiesHeading.content}</p>
          </div>
        </section>
      )}
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="dv-main-paragraph row"
      >
        <div className="image-wrap col-md-5 col-sm-12">
          <Img
            className="image"
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

      <Quotes {...quote} />
      <BackgroundImage
        className="dv-specialties-parallax"
        fluid={plainParallax.image.childImageSharp.fluid}
      />
      <DVfaq {...faq} />

      <Carousel {...lazyLightBox} {...clinicCases} type="responsive" />
      {width <= 850 && asides.display && <Whitespace bgColor="#fff" />}
      {asides.display && (
        <DVsideContent borderBottom={false} borderTop={false}  classname="specialties" width={width} {...asides} />
      )}
      {lightQuote && lightQuote.display && <Quote {...lightQuote} />}
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

      <DVexterior language={language} />
      {procedures && procedures.display && <Procedures {...procedures} />}
    </div>
  );
};

const SpecialtiesPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    clinicCases,
    asides,
    hero,
    faq,
    lightQuote,
    specialtiesHeading,
    plainParallax,
    paragraphSection,
    quote,
    form,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang language={language} link={redirects} />
      <SpecialtiesPageTemplate
        {...{
          templateKey,
          language,
          clinicCases,
          title,
          redirects,
          paragraphSection,
          specialtiesHeading,
          hero,
          plainParallax,
          faq,
          asides,
          lightQuote,
          form,
          quote,
          procedures
        }}
      />
    </Layout>
  );
};

export default SpecialtiesPage;

export const pageQuery = graphql`
  query SpecialtiesPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "specialties-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
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
          title
          indicator
          halfSize
        }
        specialtiesHeading {
          display
          img {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
        }
        paragraphSection {
          body
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        quote {
          title
          body
          author
          footer {
            position
            clinic
          }
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
        faq {
          title
          blocks {
            questions {
              question
              answer
            }
          }
        }
        clinicCases {
          title
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
          lightbox {
            placeholder
            type
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        asides {
          display
          sections {
            align
            title
            content
            image {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            footer {
              display
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                display
              }
              button {
                text
                to
                display
              }
            }
          }
        }

        lightQuote {
          color
          display
          img {
            ld {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pt {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          content
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
