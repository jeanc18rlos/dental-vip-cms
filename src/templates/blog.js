import React from "react";
import { graphql } from "gatsby";
import BlogRoll from "../components/blogRoll";
import Hero from "../components/hero";
import Heading from "../components/heading";
import Layout from "../layout";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import styled from "styled-components";

import { rhythm } from "../utils/typography";

const BlogContainer = styled.section`
  display: flex;
  padding: 0 5vw;
  flex-direction: row-reverse;
  flex-flow: wrap;
  margin-bottom: ${rhythm(4)};

  .blog-container {
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    @media screen and (max-width: 768px) {
      .sidebar {
        margin-top: ${rhythm(3)};
      }
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

export const BlogPageTemplate = ({
  hero,
  heading,
  home,
  language,
  posts,
  categories,
}) => {
  return (
    <div>
      {" "}
      <Hero className="center single half" {...hero}></Hero>
      <Heading {...heading} />
      <BlogContainer>
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

const BlogPage = ({ data }) => {
  const { home, posts, categories } = data;
  const {
    language,
    title,
    redirects,
    hero,
    heading,
    description,
    keywords,
  } = data.home.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <SEO
        title={title}
        lang={language}
        description={description}
        keywords={keywords}
      />
      <BlogPageTemplate
        {...{
          language,
          title,
          redirects,
          hero,
          heading,
          home,
          posts,
          categories,
        }}
      />
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage($id: String!, $language: String!) {
    home: markdownRemark(
      id: { eq: $id }
      frontmatter: { language: { eq: $language } }
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
                  ...GatsbyImageSharpFluid
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
                  ...GatsbyImageSharpFluid
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
