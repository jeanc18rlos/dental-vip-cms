import React from "react";
import { graphql } from "gatsby";
import Whitespace from "../components/Whitespace";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import DVsideContent from "../components/DV-SideContent";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import BasicContent from "../components/BasicContent";
import DVcards from "../components/DV-Cards";
export const ProfessionalsPageTemplate = ({
  width,
  hero,
  procedures,
  asides,
  heading,
  personal
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && <BasicContent {...heading} />}
      {asides && (
        <DVsideContent borderBottom={true} width={width} {...asides} />
      )}
      {personal && <DVcards {...personal} />}
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
    asides
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
          asides
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
        personal {
          display
          title
          cards {
            image{
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            position
          }
        }
        asides {
          display
          sections {
            align
            title
            content
            image {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
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
                    fluid(maxWidth: 1600, quality: 100) {
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
