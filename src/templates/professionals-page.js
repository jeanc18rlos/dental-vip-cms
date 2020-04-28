import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import Heading from "../components/heading";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { graphql } from "gatsby";
import Paragraph from "../components/asideParagrah";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
import Form from "../components/form";
import ReactHtmlParser from "react-html-parser";

const Personal = styled.section`
  .title {
    padding:  ${rhythm(3)} 5vw ${rhythm(2)} !important;
    text-align: center;
    background: #ededed;
    h1 {
      font-weight: 300;
    }
  }
  .cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    margin: auto;
    padding: ${rhythm(3)} calc(5vw - ${rhythm(1)} ) ${rhythm(3)};

    @media (max-width: 1024px) {
      .card {
        flex-basis: 50% !important;
      }
    }
    @media (max-width: 1024px) {
      .card {
        flex-basis: 50% !important;
      }
    }
    @media (max-width: 680px) {
      .card {
        flex-basis: 100% !important;
      }
    }
    .wrapper {
      max-width: 370px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      padding: 0 10px;
      flex-direction: column;
      text-align: center;
      border: 1px solid #ccc;
      border-top: 4px solid #5f5f5f;
    }
    .card {
      display: flex;
      justify-content: center;
      flex-basis: 33.33%;
      -ms-flex: auto;
      position: relative;
      padding: ${rhythm(1)};
      box-sizing: border-box;
      z-index: 1;
      flex-direction: column;
      text-align: center;
      .image {
        position: relative;
        overflow: hidden;
        max-width: 225px;
        display: flex;
        justify-self: center;
        align-self: center;
        width: 60%;
        min-width: 150px;
        margin-bottom: ${rhythm(1)};
        margin-top: ${rhythm(1)};
      }
    }
  }
`;
export const ProffesionalsPageTemplate = ({
  templateKey,
  language,
  title,
  staff,
  redirects,
  hero,
  heading,
  plainparallax,
  procedures,
  professionals,
}) => {
  return (
    <div>
      <Hero className="center single half" {...hero}></Hero>
      <Heading {...heading} />
      <Paragraph top={true} {...professionals} />
      <Personal>
        <div className="title">{ReactHtmlParser(staff.title)}</div>

        <div className="cards">
          {staff.cards.map((i, k) => {
            return (
              <div key={k} className="card">
                <div className="wrapper">
                  <Img className="image" fluid={i.img.childImageSharp.fluid} />
                  {ReactHtmlParser(i.content)}
                </div>
              </div>
            );
          })}
        </div>
      </Personal>
      <Form img={plainparallax}></Form>
      <Boxes {...procedures}></Boxes>
    </div>
  );
};

const ProffesionalsPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    hero,
    staff,
    heading,
    plainparallax,
    procedures,
    professionals,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <ProffesionalsPageTemplate
        {...{
          templateKey,
          language,
          title,
          redirects,
          hero,
          staff,
          heading,
          plainparallax,
          procedures,
          professionals,
        }}
      />
    </Layout>
  );
};

export default ProffesionalsPage;

export const pageQuery = graphql`
  query ProffesionalsPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "proffesionals-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
        heading {
          display
          content
        }
        plainparallax {
          childImageSharp {
            fluid(srcSetBreakpoints: [1500], quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        hero {
          background {
            scaleOnReveal
            img {
              childImageSharp {
                fluid(quality: 100, srcSetBreakpoints: [1500]) {
                  ...GatsbyImageSharpFluid_withWebp
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
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            content
          }
        }
        professionals {
          display
          items {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [800], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
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
                      ...GatsbyImageSharpFluid_withWebp
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

        procedures {
          title
          procedures {
            title
            to
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [550], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
