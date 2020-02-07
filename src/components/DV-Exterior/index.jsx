import React from "react";
import { navigate, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const DVexterior = ({ language }) => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          file(relativePath: { eq: "icon-map.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <section className="dv-exterior" style={{}}>
          <div className="row container-fluid dv-main-menu">
            <div className="row col-xs-12">
              <main className="col-xs-12 col-sm-12 col-md-6 col-lg-5 image">
                <Img
                  style={{ width: "100%" }}
                  fluid={data.file.childImageSharp.fluid}
                  alt={"images"}
                />
              </main>
              <aside className="col-xs-12 col-sm-12 col-md-6 col-lg-7">
                <div>
                  <h1 className="dv-page-titles">
                    {language === "es"
                      ? "¿Vive Fuera de Venezuela?"
                      : "Do You Live Outside of Venezuela?"}
                  </h1>
                  <p className="dv-page-text">
                    {language === "es"
                      ? "Planifique su viaje y ahorre grandes sumas de dinero en tratamientos bucodentales de complejidad."
                      : "Plan your trip and save a lot of money on complex oral treatments."}
                  </p>
                  <a
                    onClick={() => {
                      navigate(
                        `${
                          language === "es"
                            ? "/pacientes-del-exterior/"
                            : "/en/foreign-patients/"
                        }`
                      );
                    }}
                    className="dv-white-btn"
                  >
                    {language === "es"
                      ? "Pacientes del Exterior"
                      : "Foreign Patients"}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default DVexterior;
