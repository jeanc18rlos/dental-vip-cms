import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";

export const AnexedPageTemplate = ({hero, procedures}) => {
  return (
    <div>
      {
        hero && hero.display && <DVhero {...hero} />
      }
      {
        procedures && procedures.display && <Procedures {...procedures} />
      }
    </div>
  );
};


const AnexedPage = ({ data }) => {
  const { templateKey, language, title, redirects, hero, procedures } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang link={redirects} />
      <AnexedPageTemplate {...{ templateKey, language, title, redirects, hero, procedures }} />
    </Layout>
  );
};


export default AnexedPage;

export const pageQuery = graphql`
  query AnexedPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }, frontmatter: { templateKey: { eq: "clinic-page" } }) {
      frontmatter {
        language
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
