import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import Quote from "../components/Quote";
import Quotes from "../components/Quotes";

export const SpecialtiesPageTemplate = ({
  hero,
  procedures,
  lightQuote,
  quote
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      <Quotes {...quote} />
      {
        lightQuote && lightQuote.display && <Quote {...lightQuote} />
      }
      {procedures && procedures.display && <Procedures {...procedures} />}
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
    lightQuote,
    quote,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang language={language} link={redirects} />
      <SpecialtiesPageTemplate
        {...{
          templateKey,
          language,
          title,
          redirects,
          hero,
          lightQuote,
          quote,
          procedures
        }}
      />
    </Layout>
  );
};

export default SpecialtiesPage;

export const pageQuery = graphql`
  query SpecialtiesPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "clinic-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
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
        quote {
          title
          body
          author
          footer {
            position
            clinic
          }
        }
        lightQuote {
          color
          display
          img {
            ld {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pt {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }  
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
