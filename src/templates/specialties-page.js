import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import Heading from "../components/heading";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";
import Parallax from "../components/parallax";
import Paragraph from "../components/asideParagrah";
import Testimonial from "../components/testimonial";
import Quote from "../components/quote";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
import Form from "../components/form";
import ReactHtmlParser from "react-html-parser";
import Accordion from "../components/accordion";
import ClinicCases from "../components/clinicCases";
const Exterior = styled.section`
  padding: ${rhythm(4)} 5vw 0;
  display: flex;
  main,
  aside {
    display: flex;
    width: 100%;
    .image {
      display: flex;
      width: 100%;
      height: 100%;
      &:before,
      :after {
        background-size: contain;
      }
    }
  }
  aside {
    justify-content: center;
    text-align: center;
    padding-left: 5vw;
    padding: ${rhythm(4)} ${rhythm(1)};
    border: 25px solid #ededed;
    border-left-color: transparent !important;
    margin-left: 5vw !important;
    a {
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      cursor: pointer;
      font-weight: 700;
      padding: 10px 20px;
      color: #222 !important;
      border: 1px solid #222;
      text-transform: uppercase;
      background-color: #fff;
      -webkit-text-decoration: none !important;
      text-decoration: none !important;
      &:hover {
        color: #fff !important;
        background-color: #222;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;

    aside {
      padding: ${rhythm(2)} ${rhythm(1)};
      margin-left: 0 !important;
      border-top-color: transparent !important;
      border-left-color: #ededed !important;
    }
    main {
      .image {
        padding-bottom: 50%;
      }
      margin-bottom: 5vw;
    }
  }
`;
const Article = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${rhythm(4)} 5vw ${rhythm(3)};
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 5vw;
  }
  .image {
    width: 100%;
    max-width: 450px;
    max-height: 450px;
    border-radius: 50%;
    display: flex;
    border: 1px solid #4c4c4c !important;
    margin-bottom: ${rhythm(2)};
    div {
      padding-bottom: 100% !important;
    }
  }
`;
export const SpecialtiesPageTemplate = ({
  templateKey,
  language,
  title,
  redirects,
  hero,
  heading,
  cases,
  article,
  quote,
  plainparallax,
  testimonial,
  procedures,
  anexes,
  accordionList,
  form,
  forms,
  exterior,
}) => {
  const lazyLightBox = {
    placeholder: cases.lightbox.placeholder,
    images:
      cases.display &&
      cases.lightbox.items.map((i, k) => {
        return {
          renderItem: () => {
            return (
              cases.display && (
                <Img
                  alt={`gallery-${k}`}
                  className="lightbox-lazy"
                  fluid={i.childImageSharp.fluid}
                />
              )
            );
          },
        };
      }),
  };
  return (
    <div>
      <Hero className="center single half" {...hero}></Hero>
      <Heading color="#222" className="dark" {...heading} />
      <Article>
        <article>{ReactHtmlParser(article.content)}</article>
        <Img className="image" fluid={article.img.childImageSharp.fluid}></Img>
      </Article>
      <Quote {...quote} />
      <Parallax nocontent={true} img={plainparallax}></Parallax>
      <Accordion {...accordionList} />
      {cases.display && (
        <ClinicCases
          {...lazyLightBox}
          title={cases.title}
          items={cases.items}
        />
      )}
      {anexes.display && <Paragraph {...anexes} />}

      <Form
        type="extended"
        data={forms.specialties}
        title={form.title}
        language={language}
        img={form.background}
      ></Form>
      <Testimonial {...testimonial}></Testimonial>
      <Exterior>
        <main>
          <BackgroundImage
            className="image"
            fluid={exterior.image.childImageSharp.fluid}
          ></BackgroundImage>
        </main>
        <aside>
          <div>
            {ReactHtmlParser(exterior.content)}
            <Link
              to={
                language === "es"
                  ? "/pacientes-del-exterior/"
                  : "/en/foreign-patients/"
              }
            >
              {language === "es"
                ? "Pacientes del Exterior"
                : "Foreign Patients"}
            </Link>
          </div>
        </aside>
      </Exterior>
      <Boxes {...procedures}></Boxes>
    </div>
  );
};

const SpecialtiesPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    hero,
    accordionList,
    heading,
    article,
    cases,
    quote,
    plainparallax,
    testimonial,
    procedures,
    anexes,
    form,
    exterior,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <SpecialtiesPageTemplate
        {...{
          templateKey,
          language,
          title,
          redirects,
          cases,
          hero,
          heading,
          article,
          quote,
          plainparallax,
          anexes,
          testimonial,
          procedures,
          accordionList,
          form,
          exterior,
        }}
      />
    </Layout>
  );
};

export default SpecialtiesPage;

export const pageQuery = graphql`
  query SpecialtiesPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "specialties-page" } }
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
                fluid(quality: 100, srcSetBreakpoints: [1500]) {
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
        staff {
          title
          cards {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [200], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            content
          }
        }
        anexes {
          display
          items {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [800], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            content
            footer {
              icon {
                display
                img {
                  childImageSharp {
                    fluid(srcSetBreakpoints: [400], quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              link {
                display
                to
                placeholder
              }
            }
          }
        }
        cases {
          title
          display
          lightbox {
            placeholder
            items {
              childImageSharp {
                fluid(srcSetBreakpoints: [900], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          items {
            link {
              display
              to
            }
            image {
              childImageSharp {
                fluid(srcSetBreakpoints: [450], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            action
            placeholder
            body
          }
        }
        form {
          title
          background {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        exterior {
          image {
            childImageSharp {
              fluid(srcSetBreakpoints: [450], quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
          link {
            to
            title
          }
        }
        article {
          content
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        plainparallax {
          childImageSharp {
            fluid(srcSetBreakpoints: [1500], quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quote {
          body
          footer {
            author
            details
          }
        }
        testimonial {
          display
          color
          content
          images {
            portrait {
              childImageSharp {
                fluid(srcSetBreakpoints: [480], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            landscape {
              childImageSharp {
                fluid(srcSetBreakpoints: [700], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        accordionList {
          display
          title
          items {
            content
            title
          }
        }
        procedures {
          title
          procedures {
            title
            to
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
