import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Quote from "../components/quote";
import Features from "../components/features";
export const DefaultPageTemplate = ({ title }) => {
  return (
    <div>
      <br></br>
      <Quote />
      <Features></Features>
      <br></br>
    </div>
  );
};

const DefaultPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <DefaultPageTemplate {...{ templateKey, language, title, redirects }} />
    </Layout>
  );
};

export default DefaultPage;

export const pageQuery = graphql`
  query DefaultPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "home-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
        hero {
          image {
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
`;
