import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import DVsideContent from "../components/DV-SideContent";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import BasicContent from "../components/BasicContent";
import DVcards from "../components/DV-Cards";
import BackgroundImage from "gatsby-background-image";
export const ProfessionalsPageTemplate = ({
  width,
  hero,
  procedures,
  asides,
  heading,
  personal,
  form
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && <BasicContent {...heading} />}
      {asides && (
        <DVsideContent borderBottom={true} width={width} {...asides} />
      )}
      {personal && <DVcards {...personal} />}
      <BackgroundImage
        fluid={form.img.childImageSharp.fluid}
        tag="section"
        section
        className="dv-form"
      >
        <h1>{form.title}</h1>
        <div className="msg col-xs-12 text-center">
          <i className="fas fa-exclamation-circle" />
          Para enviar un mensaje, es obligatorio rellenar todos los campos del
          formulario.
        </div>

        <form action="#" method="post" className="row">
          <main className=" row col-xs-12 col-md-12 col-lg-6 col-xl-6 col-sm-12">
            <div className=" col-xs-12 col-md-6 col-sm-6">
              <span>
                <input type="text" name="nombre" placeholder="Nombre" />
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-6">
              <span>
                <input placeholder="Apellido" name="apellido" type="text" />
              </span>
            </div>
            <div className="col-xs-12 col-md-12 col-sm-12">
              <span>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                />
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-6 dv-no-padding-left dv-no-padding-right-mobile">
              <span>
                <input type="text" name="ciudad" placeholder="Ciudad" />
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-6">
              <span>
                <input type="text" placeholder="País" />
              </span>
            </div>
            <div className="col-xs-12 col-md-12 col-sm-12 select">
              <span>
                <select name="genero" aria-required="true" aria-invalid="false">
                  <option value="">Género</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                </select>
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <span>
                <select
                  name="como-nos-conoce"
                  aria-required="true"
                  aria-invalid="false"
                  style={{ margin: "auto", padding: "5px" }}
                >
                  <option value="¿Cómo nos ha conocido?">
                    ¿Cómo nos ha conocido?
                  </option>
                  <option value="Por un odontólogo">Por un odontólogo</option>
                  <option value="Por un amigo">Por un amigo</option>
                  <option value="Por Instagram">Por Instagram</option>
                  <option value="Por Facebook">Por Facebook</option>
                  <option value="Por Google">Por Google</option>
                </select>
              </span>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-12 dv-no-padding-left dv-no-padding-right-mobile">
              <span>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Número de teléfono"
                />
              </span>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-12"
              style={{ paddingLeft: "7px", paddingBottom: 0 }}
            >
              <span>
                <select
                  name="especialidad"
                  aria-required="true"
                  aria-invalid="false"
                >
                  <option value="Especialidad de interés">
                    Especialidad de interés
                  </option>
                  <option value="Cirugía Bucal">Cirugía Bucal</option>
                  <option value="Endodoncia">Endodoncia</option>
                  <option value="Estética Dental">Estética Dental</option>
                  <option value="Implantes">Implantes</option>
                  <option value="Odontología General">
                    Odontología General
                  </option>
                  <option value="Ortodoncia">Ortodoncia</option>
                  <option value="Periodoncia">Periodoncia</option>
                  <option value="Prótesis">Prótesis</option>
                </select>
              </span>
            </div>
          </main>
          <aside className="row col-xs-12 col-md-12 col-lg-6 col-xl-6 col-sm-12">
            <div className="col-xs-12 col-md-12 col-sm-12">
              <span>
                <textarea
                  placeholder="Describa su caso. Por favor, incluya todos los detalles posibles, y a la mayor brevedad, recibirá nuestra réplica."
                  aria-invalid="false"
                  aria-required="true"
                  rows="6"
                  cols="40"
                  name="mensaje"
                ></textarea>
              </span>

             
            </div>
            <div
                style={{ textAlign: 'center' }}
                className="col-xs-12 col-md-12 col-sm-12"
              >
                <button type="submit">Enviar</button>
              </div>
          </aside>
        </form>
      </BackgroundImage>

      {procedures && procedures.display && <Procedures {...procedures} />}
    </div>
  );
};

const ProfessionalsPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    hero,
    heading,
    procedures,
    personal,
    asides,
    form
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang language={language} link={redirects} />
      <ProfessionalsPageTemplate
        {...{
          templateKey,
          language,
          heading,
          title,
          redirects,
          hero,
          procedures,
          personal,
          asides,
          form
        }}
      />
    </Layout>
  );
};

export default ProfessionalsPage;

export const pageQuery = graphql`
  query ProfessionalsPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "professionals-page" } }
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
        heading {
          classname
          title
          content
        }
        asides {
          display
          sections {
            align
            title
            content
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            footer {
              display
              image {
                display
                src {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              button {
                text
                to
                display
              }
            }
          }
        }
        personal {
          display
          title
          cards {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            position
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
                fluid(maxWidth: 800, quality: 100) {
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
