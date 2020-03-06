import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import FolowUs from "../components/FollowUs";
import DVTitle from "../components/DV-Title";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactPageTemplate = ({
  hero,
  heading,
  amenities,
  social,
  language
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && <DVTitle {...heading} />}
      <section className="dv-section-form row">
        <div className="dv-contact-info col-xs-12 col-md-5 dv-npl">
          <div className="dv-main-menu-left">
            <h3 className="dv-company">
              DENTAL VIP, Especialidades Odontológicas s.c.
            </h3>
            <h3>
              <i className="icon-phone phone" />
              <span>{language === "es" ? "Teléfonos" : "Phones"} </span>
            </h3>
            <p>
              +58 <em>(212)</em> 261.5251 <br />
              +58 <em>(212)</em> 261.3732 <br />
              +58 <em>(212)</em> 261.3331
            </p>
            <h3>
              <i className="icon-map-marker-alt" />
              <span>{language === "es" ? "Dirección" : "ADDRESS"}</span>
            </h3>

            {language === "es" ? (
              <p>
                Multicentro Empresarial del Este, Torre Miranda,{" "}
                <br className="hidden-xs hidden-sm visible-md visible-lg" />
                Núcleo A, Piso 14, Oficina 143-A, Chacao, Caracas,
                <br className="hidden-xs hidden-sm visible-md visible-lg" />
              </p>
            ) : (
              <p>
                Venezuela. C.P. 1060 Multicentro Empresarial del Este, Miranda
                <br className="hidden-xs hidden-sm visible-md visible-lg" />
                Tower, Nucleus A, 14th Floor, Office 143-A, Chacao, Caracas,
                <br className="hidden-xs hidden-sm visible-md visible-lg" />
                Venezuela. P.C. 1060
              </p>
            )}

            <h3>
              <i className="icon-clock" />
              <span>
                {language === "es"
                  ? "Horario de atención"
                  : "CUSTOMER SERVICE HOURS"}{" "}
              </span>
            </h3>
            <p>{language === "es" ? "Lunes a Viernes" : "Monday to Friday"}</p>
            <p>8:00 am - 5:00 pm</p>
            <p className="dv-underline">
              {language === "es" ? "PREVIA CITA" : "BY APPOINTMENT"}
            </p>
            <img src="https://dentalvip.com.ve/wp-content/uploads/2018/08/qdc-contacto.jpg" />
          </div>
        </div>
        <div className="dv-contact-form col-xs-12 col-md-7">
          <div className="dv-form-content dv-main-menu-right dv-npr">
            <hr className="border-form" />
            <div
              role="form"
              className="dv-form-wrapper"
              id="wpcf7-f1907-o1"
              lang="en-US"
              dir="ltr"
            >
              <div className="screen-reader-response" />

              <form
                data-netlify-recaptcha="true"
                action="/thank-you"
                name="Contact Form"
                method="POST"
                data-netlify="true"
                method="post"
              >
                <div className="dv-contactform-error-msg col-xs-12 text-center">
                  <i className="icon-exclamation-circle" />
                  {language === "es"
                    ? "Para enviar un mensaje, es obligatorio rellenar todos los campos del formulario."
                    : "To send a message it is mandatory to fill in all the fields of the form."}
                </div>
                <div className="col-xs-12 col-md-12 col-sm-12 contact-form-contacto dv-npr">
                  <div className="row">
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap your-name">
                        <input
                          type="text"
                          name="your-name"
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder={
                            language === "es" ? "Nombre" : "First name"
                          }
                        />
                      </span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-right-mobile ">
                      <span className="wpcf7-form-control-wrap your-lastname">
                        <input
                          type="text"
                          name="your-lastname"
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder={
                            language === "es" ? "Apellido" : "Last name"
                          }
                        />
                      </span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap your-email">
                        <input
                          type="email"
                          name="your-email"
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder={
                            language === "es" ? "Correo electrónico" : "E-mail"
                          }
                        />
                      </span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-right-mobile ">
                      <span className="wpcf7-form-control-wrap tel-617">
                        <input
                          type="tel"
                          name="tel-617"
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                          aria-invalid="false"
                          placeholder={
                            language === "es"
                              ? "Número de teléfono"
                              : "Phone Number"
                          }
                        />
                      </span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap city">
                        <input
                          type="text"
                          name="city"
                          size={40}
                          className="wpcf7-form-control wpcf7-text"
                          aria-invalid="false"
                          placeholder={language === "es" ? "Ciudad" : "City"}
                        />
                      </span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-right-mobile">
                      <span className="wpcf7-form-control-wrap country">
                        <input
                          type="text"
                          name="country"
                          size={40}
                          className="wpcf7-form-control wpcf7-text"
                          aria-invalid="false"
                          placeholder={language === "es" ? "País" : "Country"}
                        />
                      </span>
                    </div>
                    <div className="col-xs-12 col-md-12 col-sm-12 dv-no-padding-right-mobile dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap asunto">
                        <input
                          type="text"
                          name="asunto"
                          size={40}
                          className="wpcf7-form-control wpcf7-text"
                          aria-invalid="false"
                          placeholder={language === "es" ? "Asunto" : "Subject"}
                        />
                      </span>
                    </div>
                    <div className="col-xs-12 col-md-12 col-sm-12 dv-no-padding-right-mobile dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap your-message">
                        <textarea
                          name="your-message"
                          cols={40}
                          rows={6}
                          className="wpcf7-form-control wpcf7-textarea"
                          aria-invalid="false"
                          placeholder={
                            language === "es"
                              ? "Escriba su mensaje"
                              : "Comment or message"
                          }
                        />
                      </span>
                    </div>

                    <div className="col-md-12">
                      <ReCAPTCHA theme="dark" sitekey="6LfsKd8UAAAAAIU7U_ovQrnMnSJE-C2PWSP7J17i" />
                      <input
                        type="submit"
                        value={language === "es" ? "Enviar" : "Submit"}
                        className="form-submit"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="row">
                    <div className="wpcf7-response-output wpcf7-display-none" />
                  </div>
                </div>
              </form>
            </div>{" "}
          </div>
        </div>
      </section>

      <section className="dv-map">
        <iframe src="https://snazzymaps.com/embed/72109" />
      </section>

      {social && social.display && <FolowUs {...social} />}
      {amenities && amenities.display && <Procedures {...amenities} />}
    </div>
  );
};

const ContactPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    heading,
    hero,
    amenities,
    social
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang language={language} link={redirects} />
      <ContactPageTemplate
        {...{
          templateKey,
          heading,
          language,
          title,
          redirects,
          hero,
          amenities,
          social
        }}
      />
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "contact-page" } }
    ) {
      frontmatter {
        language
        redirects
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
          title
          indicator
          halfSize
        }
        social {
          display
          imgparallax {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
          additionalText
          icons {
            icon {
              img
              class
            }
            alt
            nameicon
            link {
              href
              target
              rel
            }
          }
        }
        heading {
          classname
          title
          content
        }
        amenities {
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
            info {
              image {
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              text
            }
          }
        }
      }
    }
  }
`;
