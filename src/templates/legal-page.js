import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import Content, { HTMLContent } from "../components/Content";
import SEO from "../components/seo";
import SetLang from "../components/setLang";

export const LegalPageTemplate = ({
    content,
    contentComponent,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="dv-static-legal">
            <PostContent content={content} />
        </section>
    );
};

const LegalPage = ({ data }) => {
    const { markdownRemark: page } = data;

    return (
        <Layout>
            <SEO title={page.frontmatter.title} />
            <SetLang
                language={page.frontmatter.language}
                link={page.frontmatter.redirects}
            />
            <LegalPageTemplate
                data={page}
                content={page.html}
                redirects={page.frontmatter.redirects}
                language={page.frontmatter.language}
                contentComponent={HTMLContent}
                title={page.frontmatter.title}
            />
        </Layout>
    );
};

export default LegalPage;

export const pageQuery = graphql`
  query LegalPageByID($id: String!) {
      markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        tags
        redirects
        language
      }
    }
  }
`;
