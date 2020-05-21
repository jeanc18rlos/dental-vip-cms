import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Content, { HTMLContent } from "../components/content";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import { Container } from "../Elements/Container";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";
const StyledPage = styled.section`
  * {
    color: #555;
  }
  padding: ${rhythm(1)} 0 ${rhythm(2)};
  h1 {
    font-family: "Bebas Neue Bold";
  }
  h1,
  h2,
  h3 {
    color: #333;
    margin-top: ${rhythm(2)};
    margin-bottom: ${rhythm(2)};
  }
  a {
    word-break: break-all;
    color: #91c508;
  }


`;

export const LegalPageTemplate = ({ content, contentComponent }) => {
  const PostContent = contentComponent || Content;

  return (
    <StyledPage>
      <Container>
        <PostContent content={content} />
      </Container>
    </StyledPage>
  );
};

const LegalPage = ({ data }) => {
  const { language, title, redirects } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang language={language} link={redirects} />
      <LegalPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

export default LegalPage;

export const pageQuery = graphql`
  query advisePageyID($id: String!) {
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
