import React from "react";
import { graphql } from "gatsby";
import BlogRoll from "../components/blogRoll";
import Layout from "../layout";
import SetLang from "../components/setLang";
import styled from "styled-components";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const BlogContainer = styled.section`
  display: flex;
  padding: 0 5vw;
  flex-direction: row-reverse;
  flex-flow: wrap;
  margin-bottom: ${rhythm(4)};
  .cagegory-title {
    margin-top: ${rhythm(4)};
    margin-bottom: ${rhythm(2)};
    width: 100%;
    border: solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rhythm(0.5)} 0;
    text-transform: uppercase;
    font-weight: 300;
  }
  .blog-container {
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      flex-flow: column;
    }
  }
  .sidebar {
    flex-basis: 25%;
    a {
      word-break: break-word;
    }
    @media screen and (max-width: 1024px) {
      flex-basis: 45%;
    }
  }
  .blogroll {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    flex-basis: 75%;
    @media screen and (max-width: 1024px) {
      flex-basis: 55%;
    }
    .item {
      flex-basis: 50%;
      padding-right: 5vw;
      padding-bottom: ${rhythm(1)};
      @media screen and (max-width: 1024px) {
        flex-basis: 100%;
      }
      @media screen and (max-width: 1024px) {
        padding-right: 0;
      }
    }
  }
`;

export const BlogTagPageTemplate = ({
  home,
  language,
  posts,
  tag,
  categories,
}) => {
  return (
    <div>
      {" "}
      <div></div>
      <BlogContainer>
        <h2 className="cagegory-title">
          {language === "es" ? "Categoría" : "Category"}:{" "}
          <i>
            <b>{tag}</b>
          </i>
        </h2>
        <BlogRoll
          {...{
            language,
            home,
            posts,
            categories,
          }}
        />
      </BlogContainer>
    </div>
  );
};

const BlogTagPage = ({ data, pageContext }) => {
  const { home, posts, categories } = data;
  const {
    language,
    title,
    description,
    keywords,
    redirects,
    hero,
    heading,
  } = data.home.frontmatter;
  const tag = pageContext.tag;
  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <SEO
        title={title}
        lang={language}
        description={description}
        keywords={keywords}
      />
      <BlogTagPageTemplate
        {...{
          language,
          title,
          redirects,
          hero,
          heading,
          home,
          tag,
          posts,
          categories,
        }}
      />
    </Layout>
  );
};

export default BlogTagPage;

export const pageQuery = graphql`
  query BlogTagPage($tag: String, $language: String!) {
    home: markdownRemark(
      frontmatter: { language: { eq: $language }, templateKey: { eq: "blog" } }
    ) {
      frontmatter {
        language
        title
        description
        keywords
        redirects
        heading {
          display
          content
        }
        heading {
          display
          content
        }
        hero {
          background {
            scaleOnReveal
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [1500], quality: 90) {
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
        structure {
          aside {
            search {
              search
              placeholder
            }
            latestPosts
            categories
            subscribe
            form {
              message
              name
              email
              send
            }
          }
          post {
            by
            readMore
          }
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          templateKey: { eq: "blog-post" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            tags
            author {
              name
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    categories: allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          language: { eq: $language }
          templateKey: { eq: "blog-post" }
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
