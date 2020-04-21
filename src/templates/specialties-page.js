import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import Heading from "../components/heading";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Parallax from "../components/parallax";
import Paragraph from "../components/asideParagrah";
import Testimonial from "../components/testimonial";
import Quote from "../components/quote";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
import ReactHtmlParser from "react-html-parser";
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
  article,
  quote,
  plainparallax,
  testimonial,
  procedures,
  anexes
}) => {
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
      {anexes.display && <Paragraph {...anexes} />}
      <Testimonial {...testimonial}></Testimonial>

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
    heading,
    article,
    quote,
    plainparallax,
    testimonial,
    procedures,
    anexes
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
          hero,
          heading,
          article,
          quote,
          plainparallax,
          anexes,
          testimonial,
          procedures,
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
                fluid(quality: 50, srcSetBreakpoints: [1500]) {
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
        anexes {
          display
          items {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [800], quality: 50) {
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
                    fluid(srcSetBreakpoints: [400], quality: 50) {
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
        article {
          content
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        plainparallax {
          childImageSharp {
            fluid(srcSetBreakpoints: [1500], quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
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
                fluid(srcSetBreakpoints: [480], quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            landscape {
              childImageSharp {
                fluid(srcSetBreakpoints: [700], quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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
                fluid(srcSetBreakpoints: [550], quality: 50) {
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
