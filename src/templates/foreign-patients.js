import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import showdown from "showdown";
const converter = new showdown.Converter();

export const ForeignPatientsPageTemplate = ({
  language,
  hero,
  columns,
  titleSection,
  hostSection,
  procedures,
  slogan,
  form
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      <section className="dv-phases-sections">
        <div
          className="container-fluid dv-main-menu"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(columns.title)
          }}
        ></div>
        <div className="dv-phases col-xs-12">
          <div className="row dv-main-menu">
            {columns.columns.map(i => {
              return (
                <div className="dv-phase-one text-center col-xs-12 col-sm-6">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(i.head)
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(i.body)
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`dv-title-section ${titleSection.classname}`}>
        <div className="container-fluid dv-main-menu">
          <h1
            className="dv-page-title"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(titleSection.title)
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(titleSection.content)
            }}
          ></div>
          <div className="dv-title-blocks row">
            {titleSection.blocks.map((i, k) => {
              return (
                <div className="col-md-4">
                  <Img className="image" fluid={i.img.childImageSharp.fluid} />
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(i.content)
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <BackgroundImage
        className="dv-slogan"
        fluid={slogan.img.childImageSharp.fluid}
        Tag="section"
      >
        <div>
          <h2 className="dv-slogan-title">{slogan.title}</h2>
          <p className="dv-slogan-dsc">{slogan.description}</p>
          {slogan.link.display && (
            <Link className="slogan-btn" to={slogan.link.to}>
              {slogan.link.text}
            </Link>
          )}
        </div>
      </BackgroundImage>
      <BackgroundImage
        fluid={hostSection.bg.childImageSharp.fluid}
        tag="section"
        className="dv-host"
      >
        <div className="row container">
          <div
            className="col-xs-12 col-sm-6 dv-title-hotel"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(hostSection.title)
            }}
          />
          <div
            className="col-xs-12 col-sm-6 col-sm-offset-6 dv-content-hotel"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(hostSection.body)
            }}
          />
          <div className="content-items row col-md-12">
            {hostSection.columns.map((i, k) => {
              return (
                <a
                  href={i.link}
                  className="col-xs-12 col-sm-6 dv-hotel-href"
                  target="_blank"
                >
                  <BackgroundImage
                    className="dv-hotel-item col-xs-12 col-sm-12"
                    fluid={i.img.childImageSharp.fluid}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(i.title)
                      }}
                      href={i.link}
                      target="_blank"
                    ></div>
                  </BackgroundImage>
                </a>
              );
            })}
          </div>
        </div>
      </BackgroundImage>
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

const ForeignPatientsPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    titleSection,
    columns,
    redirects,
    slogan,
    form,
    hero,
    hostSection,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang link={redirects} language={language} />
      <ForeignPatientsPageTemplate
        {...{
          templateKey,
          language,
          columns,
          title,
          redirects,
          form,
          hostSection,
          hero,
          titleSection,
          procedures,
          slogan
        }}
      />
    </Layout>
  );
};

export default ForeignPatientsPage;

export const pageQuery = graphql`
  query ForeignPatientsPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "foreign-patients" } }
    ) {
      frontmatter {
        language
        title
        redirects

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

        slogan {
          link {
            display
            to
            text
          }
          img {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
        }
        columns {
          title
          columns {
            head
            body
          }
        }
        hostSection {
          bg {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          body
          columns {
            title
            link
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        titleSection {
          display
          classname
          title
          content
          blocks {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            content
          }
        }
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
