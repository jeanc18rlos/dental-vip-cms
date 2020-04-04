import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";


export const DefaultPageTemplate = ({ title }) => {
  return <div>{title}</div>;
};

const DefaultPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <DefaultPageTemplate {...{ templateKey, language, title, redirects }} />
    </Layout>
  );
};

export default DefaultPage;

export const pageQuery = graphql`
  query DefaultPageTemplate2 {
    markdownRemark(
     
      frontmatter: { templateKey: { eq: "home-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
      }
    }
  }
`;
