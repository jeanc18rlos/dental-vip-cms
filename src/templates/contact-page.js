import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import FolowUs from "../components/FollowUs";
import BasicContent from "../components/BasicContent";

export const ContactPageTemplate = ({ hero, heading, amenities, social }) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && <BasicContent {...heading} />}
      <section className="dv-section-form row container">
        <div className="dv-contact-info col-xs-12 col-md-5 dv-npl">
          <div className="dv-main-menu-left">
            <h3 className="dv-company">DENTAL VIP, Especialidades Odontológicas s.c.</h3>
            <h3><i className="icon-phone phone" /><span>Teléfonos</span></h3>
            <p>+58 <em>(212)</em> 261.5251 <br />
              +58 <em>(212)</em> 261.3732 <br />
              +58 <em>(212)</em> 261.3331</p>
            <h3><i className="icon-map-marker-alt" /><span>Dirección</span></h3>
            <p>Multicentro Empresarial del Este, Torre Miranda, <br className="hidden-xs hidden-sm visible-md visible-lg" />Núcleo A, Piso 14, Oficina 143-A, Chacao, Caracas,<br className="hidden-xs hidden-sm visible-md visible-lg" /> Venezuela. C.P. 1060</p>
            <h3><i className="icon-clock" /><span>Horario de atención</span></h3>
            <p>Lunes a Viernes</p>
            <p>8:00 am - 5:00 pm</p>
            <p className="dv-underline">PREVIA CITA</p>
            <img src="https://dentalvip.com.ve/wp-content/uploads/2018/08/qdc-contacto.jpg" />
          </div>
        </div>
        <div className="dv-contact-form col-xs-12 col-md-7">
          <div className="dv-form-content dv-main-menu-right dv-npr">
            <hr className="border-form" />
            <div role="form" className="wpcf7" id="wpcf7-f1907-o1" lang="en-US" dir="ltr">
              <div className="screen-reader-response" />
              <form action="/contacto/#wpcf7-f1907-o1" method="post" className="wpcf7-form" noValidate="novalidate">
                <div style={{ display: 'none' }}>
                  <input type="hidden" name="_wpcf7" defaultValue={1907} />
                  <input type="hidden" name="_wpcf7_version" defaultValue="5.0.3" />
                  <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f1907-o1" />
                  <input type="hidden" name="_wpcf7_container_post" defaultValue={0} />
                </div>
                <div className="dv-contactform-error-msg col-xs-12 text-center">
                  <i className="icon-exclamation-circle" />Para enviar un mensaje, es obligatorio rellenar todos los campos del formulario.
          </div>
                <div className="col-xs-12 col-md-12 col-sm-12 contact-form-contacto dv-npr">
                  <div className="row">
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Nombre" /></span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-right-mobile ">
                      <span className="wpcf7-form-control-wrap your-lastname"><input type="text" name="your-lastname" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Apellido" /></span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Correo electrónico" /></span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-right-mobile ">
                      <span className="wpcf7-form-control-wrap tel-617"><input type="tel" name="tel-617" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" placeholder="Número de teléfono" /></span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap city"><input type="text" name="city" defaultValue size={40} className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Ciudad" /></span>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-right-mobile">
                      <span className="wpcf7-form-control-wrap country"><input type="text" name="country" defaultValue size={40} className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="País" /></span>
                    </div>
                    <div className="col-xs-12 col-md-12 col-sm-12 dv-no-padding-right-mobile dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap asunto"><input type="text" name="asunto" defaultValue size={40} className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Asunto" /></span>
                    </div>
                    <div className="col-xs-12 col-md-12 col-sm-12 dv-no-padding-right-mobile dv-no-padding-left-mobile">
                      <span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols={40} rows={6} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Escriba su mensaje" defaultValue={""} /></span>
                    </div>
                    <div className="col-xs-12 dv-captcha">
                      <div className="wpcf7-form-control-wrap"><div data-sitekey="6LeteaEUAAAAAIWEnMu_DbYk4fP4qaD53ACkWYy9" className="wpcf7-form-control g-recaptcha wpcf7-recaptcha"><div style={{ width: '304px', height: '78px' }}><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeteaEUAAAAAIWEnMu_DbYk4fP4qaD53ACkWYy9&co=aHR0cHM6Ly9kZW50YWx2aXAuY29tLnZlOjQ0Mw..&hl=es&v=TYDIjJAqCk6g335bFk3AjlC3&size=normal&cb=b7pyjvfj848" width={304} height={78} role="presentation" name="a-487y45gr9yt2" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }} defaultValue={""} /></div></div>
                      
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 col-sm-offset-6 col-md-offset-6 dv-no-padding-right-mobile dv-no-padding-left-mobile">
                      <input type="submit" defaultValue="Enviar" className="wpcf7-form-control wpcf7-submit" />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="row">
                    <div className="wpcf7-response-output wpcf7-display-none" />
                  </div>
                </div>
              </form></div>      </div>
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
