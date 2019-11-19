import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import SEO from "../components/seo";
import SetLang from "../components/setLang";

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
      <SEO title={title} />
      <SetLang link={redirects} />
      <DefaultPageTemplate {...{ templateKey, language, title, redirects }} />
    </Layout>
  );
};

export default DefaultPage;

export const pageQuery = graphql`
  query DefaultPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "default" } }
    ) {
      frontmatter {
        language
        title
        redirects
      }
    }
  }
`;
