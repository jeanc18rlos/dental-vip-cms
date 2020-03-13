import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import DVTitle from "../components/DV-Title";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import showdown from "showdown";
import "flag-icon-css/css/flag-icon.min.css";
const converter = new showdown.Converter();

export const DentalTourismPageTemplate = ({
  language,
  hero,
  sidePanel,
  heading,
  routes,
  prices,
  procedures,
  blocksDescription,
  parallaxTitle,
  gallerySteps,
  form
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && heading.display && <DVTitle {...heading} />}
      <section className="section-prices row">
        {prices.rows.map(i => {
          return (
            <div className="prices col-md-6 col-sm-12">
              <div>
                <header>{i.title}</header>
                <div className="icon-header">
                  <Img fluid={i.icon.childImageSharp.fluid} />
                </div>
                {i.rows.map(i => {
                  return (
                    <div className="price-row row">
                      <span className="col-md-6 procedure">{i.procedure}</span>
                      <span className="col-md-6 price">
                        {i.price}
                        <span> {i.currency}</span>
                      </span>
                    </div>
                  );
                })}
                <div className="link-row">
                  <a className="price-link">{i.link.title}</a>
                </div>
              </div>
            </div>
          );
        })}
        <div className="converter">
          <div
            className="title"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(prices.footer.title)
            }}
          ></div>
          <a href={prices.footer.to}>
            <Img
              className="converter-img"
              fluid={prices.footer.image.childImageSharp.fluid}
            />
          </a>
        </div>
      </section>
      <BackgroundImage
        className="dv-slogan"
        fluid={parallaxTitle.img.childImageSharp.fluid}
        Tag="section"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <h2
            style={{
              textShadow: "1px 1px 7px #0a0a0a",
              fontSize: "40px !important"
            }}
            className="dv-slogan-title"
          >
            {parallaxTitle.title}
          </h2>
          <p
            style={{
              textShadow: "1px 1px 7px #0a0a0a",
              fontSize: "26px",
              fontWeight: 500
            }}
            className="dv-slogan-dsc"
          >
            {parallaxTitle.subTitle}
          </p>
        </div>
      </BackgroundImage>
      <section className="departures">
        <div
          className="title"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(routes.title)
          }}
        />
        <Img
          className="departures-logo main"
          fluid={routes.image.childImageSharp.fluid}
        />

        <div className="col-md-12 row">
          {routes.departures.map(i => {
            return (
              <div className="row col-md-6 departure">
                <div className="col-md-3 departures-logo">
                  <span class={`flag-icon flag-icon-${i.flag}`}></span>
                </div>
                <div className="row col-md-9">
                  <p className="col-md-12 ">{i.from}</p>
                  <p className="row col-md-12 dep-info">
                    <div className="col-md-6">
                      <Img
                        className="departures-logo-clock"
                        fluid={routes.icons.clock.childImageSharp.fluid}
                      />
                      <span>{i.time}</span>
                    </div>
                    <div className="col-md-6">
                      <Img
                        className="departures-logo-currency"
                        fluid={routes.icons.currency.childImageSharp.fluid}
                      />
                      <span>{i.cost}</span>
                    </div>
                  </p>
                </div>
                <p className="col-md-12 visa">{i.visa}</p>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="message">{routes.footer}</div>
      </section>
      <section className="gallery-steps">
        <h1>{gallerySteps.title}</h1>
        <div className="row">
          {" "}
          {gallerySteps.steps.map((i, k) => {
            return (
              <div className="col-md-4 step">
                <h2>{i.title}</h2>
                <span>{k + 1}</span>
                <Img fluid={i.image.childImageSharp.fluid} />
              </div>
            );
          })}
        </div>
      </section>
      {sidePanel.display && (
        <section className="dv-sp-int-white dv-sp-int-white-mob dv-sp-int-white-dds-mob">
          <div className="container-fluid dv-main-menu">
            <section className="left-aligned dv-specialties-srv">
              {sidePanel.sections.map((i, k) => {
                return (
                  <div key={`side-${k}`} className="row">
                    <BackgroundImage
                      className="col-xs-12 col-sm-6 dv-sp-srv-img-dds"
                      fluid={i.img.childImageSharp.fluid}
                    />
                    <div
                      className="col-xs-12 col-sm-6 dv-sp-srv-txt dv-no-padding"
                      dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(i.section)
                      }}
                    ></div>
                  </div>
                );
              })}
            </section>
          </div>
        </section>
      )}
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

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="row"
        >
          <input type="hidden" name="form-name" value="contact" />
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
                  name="phone"
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
      <section className="row list-paragraph">
        <div className="col-md-6 paragraph">
          <div
            className="title"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(blocksDescription.sections.left.title)
            }}
          />
          <hr></hr>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(blocksDescription.sections.left.cuerpo)
            }}
          />
          <Img
            className="icon"
            fluid={blocksDescription.sections.left.image.childImageSharp.fluid}
          />
        </div>
        <div className="col-md-6 list">
          {blocksDescription.sections.right.map(i => {
            return (
              <div className="item">
                <Img className="icon" fluid={i.icon.childImageSharp.fluid} />
                <hr />
                <div
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(i.title)
                  }}
                />
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
      </section>
      {procedures && procedures.display && <Procedures {...procedures} />}
    </div>
  );
};

const AnexedPage = ({ data }) => {
  const {
    templateKey,
    language,
    form,
    gallerySteps,
    prices,
    title,
    heading,
    redirects,
    parallaxTitle,
    routes,
    sidePanel,
    hero,
    blocksDescription,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang link={redirects} language={language} />
      <DentalTourismPageTemplate
        {...{
          templateKey,
          heading,
          prices,
          blocksDescription,
          routes,
          language,
          title,
          redirects,
          gallerySteps,
          sidePanel,
          parallaxTitle,
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
  query DentalTourismPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "dental-tourism" } }
    ) {
      frontmatter {
        language
        title
        redirects
        hero {
          display
          type
          title
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
        gallerySteps {
          title
          steps {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        parallaxTitle {
          img {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subTitle
        }
        heading {
          display
          classname
          title
          content
        }
        blocksDescription {
          sections {
            left {
              title
              cuerpo
              image {
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            right {
              icon {
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              content
            }
          }
        }
        prices {
          footer {
            title
            to
            image {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          rows {
            title
            icon {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            rows {
              procedure
              price
              currency
            }
            link {
              title
              to
            }
          }
        }
        sidePanel {
          display
          sections {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            section
          }
        }
        routes {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          icons {
            clock {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            currency {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          footer
          departures {
            from
            flag
            time
            cost
            visa
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
