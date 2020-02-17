import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import DVTitle from "../components/DV-Title";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import BackgroundImage from "gatsby-background-image";
import showdown from "showdown";
const converter = new showdown.Converter();
export const AnexedPageTemplate = ({
  hero,
  procedures,
  implantTypes,
  form,
  slogan,
  sidePanel,
  paragraph,
  steps,
  blockGallery,
  language,
  dds,
  listGallery,
  heading,
  plainParallax,
  paragraphSection
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && heading.display && <DVTitle {...heading} />}
      {sidePanel.display && (
        <section className="dv-sp-int-white dv-sp-int-white-mob dv-sp-int-white-dds-mob">
          <div className="container-fluid dv-main-menu">
            <section className="dv-specialties-srv">
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
      {blockGallery.display && blockGallery.position === "top" && (
        <section className="dv-block-gallery top-title">
          <div className="row dv-main-menu">
            {blockGallery.blocks.map((block, index) => {
              return (
                <div
                  key={index}
                  className="col-xs-12 col-sm-6 div-question text-center"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(block.title)
                    }}
                  />
                  {!blockGallery.img.display && (
                    <Img
                      fluid={block.img.childImageSharp.fluid}
                      alt="Dentalvip - ¿Es necesario tallar los dientes?"
                      className="dv-cp-img-q img-left dv-pb-34"
                    />
                  )}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(block.desc)
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}
      {implantTypes.display && (
        <section className="dv-implant-types">
          <div className="container-fluid dv-main-menu">
            {implantTypes.blocks.map((i, k) => {
              return (
                <div className="row">
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 dv-npl dv-npr dv-h2-mt">
                      <Img
                        fluid={i.img.childImageSharp.fluid}
                        className="dv-repeat-img"
                        alt="Prosthesis Image"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-2 text-right dv-mob-icon-psi dv-npl">
                      <Img
                        fluid={i.icon.childImageSharp.fluid}
                        className="dv-repeat-logo center-block"
                        alt="Prosthesis Icon"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-6 dv-npr dv-mob-text-style dv-npl-mob">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: converter.makeHtml(i.title)
                        }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: converter.makeHtml(i.desc)
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
      {listGallery.display && listGallery.position === "top" && (
        <section className="dv-list-gallery">
          <div className="row dv-main-menu">
            <div
              className="col-md-12"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(listGallery.title)
              }}
            />
            <div
              className="col-md-12"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(listGallery.desc)
              }}
            />
            {listGallery.blocks.map((i, k) => {
              return (
                <div
                  className={`${
                    listGallery.type !== "Column"
                      ? "col-md-6"
                      : "dv-column row col-md-12"
                  }`}
                >
                  {i.sections.map((i, k) => {
                    return listGallery.type !== "Column" ? (
                      <div className="col-xs-12">
                        <Img
                          fluid={i.img.childImageSharp.fluid}
                          alt="DentalVip"
                          className="dv-cp-img"
                        />

                        <div
                          dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(i.title)
                          }}
                        />
                      </div>
                    ) : (
                      <div className="row col-md-6 dv-row-aligns">
                        <Img
                          fluid={i.img.childImageSharp.fluid}
                          alt="DentalVip"
                          className="dv-cp-img dv-row-type col-md-5"
                        />

                        <div className="dv-row-type col-md-7">
                          <span className="number">{i.number}</span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: converter.makeHtml(i.title)
                            }}
                          ></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {steps.display && (
        <section className="dv-steps row">
          {steps.blocks.map((i, k) => {
            return (
              k <= 1 && (
                <div className="col-xs-12 dv-npl dv-npr dv-bcare-pb-text">
                  <div className="row">
                    <div className=" col-md-1 col-sm-2">
                      <p className="dv-numb center-block">{i.number}</p>
                    </div>
                    <div
                      className="col-md-11 col-sm-10 center-block"
                      dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(i.description)
                      }}
                    />

                    {i.img.display &&
                      i.img.images.map(e => {
                        return (
                          <div className="col-xs-12 col-sm-6 dv-bcare-pb-text dv-bcare-desc-img">
                            <Img
                              fluid={e.src.childImageSharp.fluid}
                              alt="Logo"
                              className="dv-sp-ads-img dv-num-imgs dv-bcare-desc-ione"
                            />
                          </div>
                        );
                      })}
                    {i.list.display &&
                      i.list.rows.map(l => {
                        return (
                          <div className="row">
                            <div className="col-xs-12 col-sm-6">
                              <Img
                                fluid={l.image.childImageSharp.fluid}
                                alt="Logo"
                                className="dv-sp-ads-logo dv-num-logo center-block"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-6">
                              <Img
                                fluid={l.icon.childImageSharp.fluid}
                                alt="Logo"
                                className="dv-sp-ads-img dv-num-imgs"
                              />
                              <p className="dv-div-text text-left">
                                Hay que cepillarse inmediatamente después de
                                cada
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )
            );
          })}
        </section>
      )}
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
      {steps.display && (
        <section className="dv-steps row">
          {steps.blocks.map((i, k) => {
            return (
              k >= 2 && (
                <div className="col-xs-12 dv-npl dv-npr dv-bcare-pb-text">
                  <div className="row">
                    <div className="col-md-1 col-sm-2">
                      <p className="dv-numb center-block">{i.number}</p>
                    </div>
                    <div
                      className="col-md-11 col-sm-10 center-block"
                      dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(i.description)
                      }}
                    />
                    {i.img.display &&
                      i.img.images.map(e => {
                        return (
                          <div className="col-xs-12 col-sm-6 dv-bcare-pb-text dv-bcare-desc-img">
                            <Img
                              fluid={e.src.childImageSharp.fluid}
                              alt="Logo"
                              className="dv-sp-ads-img dv-num-imgs dv-bcare-desc-ione"
                            />
                          </div>
                        );
                      })}
                    {i.list.display && (
                      <div className="paragraph-list">
                        {i.list.rows.map(l => {
                          return (
                            <div className="row list-steps">
                              <div className="col-xs-12 col-sm-6">
                                <Img
                                  fluid={l.image.childImageSharp.fluid}
                                  alt="Logo"
                                  className="dv-sp-ads-logo dv-num-logo center-block"
                                />
                              </div>
                              <div className="col-xs-12 col-sm-6">
                                <Img
                                  fluid={l.icon.childImageSharp.fluid}
                                  alt="Logo"
                                  className="dv-sp-ads-img dv-num-imgs-icon"
                                />
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: converter.makeHtml(l.desc.text)
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )
            );
          })}
        </section>
      )}
      {listGallery.display && listGallery.position === "bottom" && (
        <section className="dv-list-gallery">
          <div className="row dv-main-menu">
            <div
              className="col-md-12"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(listGallery.title)
              }}
            />
            <div
              className="col-md-12"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(listGallery.desc)
              }}
            />
            {listGallery.blocks.map((i, k) => {
              return (
                <div
                  className={`${
                    listGallery.type !== "Column"
                      ? "col-md-6"
                      : "dv-column row col-md-12"
                  }`}
                >
                  {i.sections.map((i, k) => {
                    return listGallery.type !== "Column" ? (
                      <div className="col-xs-12">
                        <Img
                          fluid={i.img.childImageSharp.fluid}
                          alt="DentalVip"
                          className="dv-cp-img"
                        />

                        <div
                          dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(i.title)
                          }}
                        />
                      </div>
                    ) : (
                      <div className="row col-md-6 dv-row-aligns">
                        <Img
                          fluid={i.img.childImageSharp.fluid}
                          alt="DentalVip"
                          className="dv-cp-img dv-row-type col-md-5"
                        />

                        <div className="dv-row-type col-md-7">
                          <span className="number">{i.number}</span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: converter.makeHtml(i.title)
                            }}
                          ></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
      )}
      {paragraph.display && (
        <div>
          <section className="dv-info-ads">
            <div className="dv-main-menu row">
              <div className="left col-xs-12 col-sm-4">
                <div className="row">
                  <p className="dv-div-title">{paragraph.blocks[0].title}</p>
                  <p className="dv-div-text">{paragraph.blocks[0].text}</p>
                </div>
              </div>
              <div className="img-block col-xs-12 col-sm-4">
                <Img
                  fluid={paragraph.image.childImageSharp.fluid}
                  className="dv-img-mid center-block"
                />
              </div>
              <div className="right col-xs-12 col-sm-4">
                <div className="row">
                  <p className="dv-div-title">{paragraph.blocks[1].title}</p>
                  <p className="dv-div-text">{paragraph.blocks[1].text}</p>
                </div>
              </div>
              {paragraph.desc.display && (
                <div class="col-xs-12 text-center">
                  <div className="row">
                    <p className="dv-div-title col-xs-12">
                      {paragraph.desc.title}{" "}
                    </p>
                    <p className="dv-div-text">{paragraph.desc.text}</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {blockGallery.display && blockGallery.position === "bottom" && (
        <section className="dv-block-gallery">
          <div className="row dv-main-menu">
            {blockGallery.img.display && (
              <Img
                fluid={blockGallery.img.img.childImageSharp.fluid}
                className="main-image col-xs-12"
              />
            )}
            {blockGallery.blocks.map((block, index) => {
              return (
                <div
                  key={index}
                  className="col-xs-12 col-sm-6 div-question text-center"
                >
                  {!blockGallery.img.display && (
                    <Img
                      fluid={block.img.childImageSharp.fluid}
                      alt="Dentalvip - ¿Es necesario tallar los dientes?"
                      className="dv-cp-img-q img-left dv-pb-34"
                    />
                  )}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(block.title)
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(block.desc)
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}
      {dds.display && (
        <section className="dv-sp-int-white dv-ptb-80 dv-dds-ph">
          <div className="row dv-main-menu">
            <div
              className="row"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(dds.heading)
              }}
            />
            <Img
              fluid={dds.img.childImageSharp.fluid}
              alt="DDS Image"
              className="dv-image-size"
            />
            <div
              style={{ width: "100%" }}
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(dds.title)
              }}
            ></div>

            <p className="dv-slogan-dsc">{dds.description}</p>
            {dds.sections.map(i => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-3 dv-list dv-image-dds-types">
                  <Img
                    fluid={i.img.childImageSharp.fluid}
                    alt="DDS Typo - Image"
                    className="dv-img-typo"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(i.description)
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}
      <BackgroundImage
        className="dv-specialties-parallax"
        fluid={plainParallax.image.childImageSharp.fluid}
      />
      <div
        style={{
          display: "flex",
          flexDirection: `${
            paragraphSection.align === "left" ? "row" : "row-reverse"
          }`,
          justifyContent: "center"
        }}
        className="dv-main-paragraph annexed row"
      >
        <div className="image-wrap col-md-6 col-sm-12">
          <Img
            className="image"
            style={{
              marginLeft: `${paragraphSection.align === "left" ? "0" : "10vw"}`
            }}
            fluid={paragraphSection.image.childImageSharp.fluid}
            alt="Cirugía Bucal - Image description"
          />
        </div>
        <aside
          style={{ padding: 0 }}
          className="col-md-6 col-sm-12"
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
    paragraph,
    title,
    steps,
    blockGallery,
    heading,
    redirects,
    implantTypes,
    dds,
    plainParallax,
    listGallery,
    sidePanel,
    slogan,
    paragraphSection,
    hero,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang link={redirects} language={language} />
      <AnexedPageTemplate
        {...{
          paragraph,
          templateKey,
          steps,
          heading,
          blockGallery,
          dds,
          language,
          slogan,
          plainParallax,
          title,
          redirects,
          sidePanel,
          paragraphSection,
          hero,
          listGallery,
          form,
          implantTypes,
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
        redirects
        dds {
          display
          heading
          img {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
          sections {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
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
          indicator
          halfSize
        }
        listGallery {
          position
          type
          display
          title
          desc
          blocks {
            sections {
              img {
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              number
              title
            }
          }
        }

        steps {
          display
          blocks {
            number
            description
            list {
              display
              rows {
                icon {
                  childImageSharp {
                    fluid(maxWidth: 1600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                image {
                  childImageSharp {
                    fluid(maxWidth: 1600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                desc {
                  text
                }
              }
            }
            img {
              display
              images {
                src {
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

        paragraph {
          display
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          desc {
            display
            title
            text
          }
          blocks {
            title
            text
          }
        }
        blockGallery {
          display
          img {
            display
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          position
          display
          blocks {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            desc
            title
          }
        }
        heading {
          display
          classname
          title
          content
        }
        implantTypes {
          display
          blocks {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            desc
            icon {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
