import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Gallery from "../components/gallery";
import Img from "gatsby-image";
import Parallax from "../components/parallax";
import { graphql } from "gatsby";
import { colors } from "../styles";
import BlogRoll from "../components/blogRoll";
import styled from "styled-components";
import { Container } from "../Elements/Container";
import ReactHtmlParser from "react-html-parser";
import SEO from "../components/seo";
import {  rhythm } from "../utils/typography";

const BlogContainer = styled.section`
  display: flex;
  padding: 0 5vw;
  flex-direction: row-reverse;
  flex-flow: wrap;
  margin-bottom: ${rhythm(3)};


  .blog-container {
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      flex-flow: column;
    }
  }
  h1 {
    margin-top: ${rhythm(4)};
    margin-bottom: ${rhythm(2)};

    display: block;
    width: 100%;
    text-align: center;
    font-weight: 300;
  }
  .blogroll {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    flex-basis: 100%;
    @media screen and (max-width: 1024px) {
      flex-basis: 55%;
    }
    .item {
      flex-basis: 33.33%;
      padding-right: 2.5vw;
      padding-left: 2.5vw;
      padding-bottom: ${rhythm(1)};
      @media screen and (max-width: 1024px) {
        flex-basis: 50%;
      }
      @media screen and (max-width: 580px) {
        flex-basis: 100%;
      }
      @media screen and (max-width: 1024px) {
        padding-right: 0;
      }
    }
  }
`;

const StyledSection = styled.section`
  color: #999999;
  .big {
    font-size: 100px;
    height: fit-content;
    display: flex;
    margin-bottom: ${rhythm(1)};
  }
  i {
    line-height: 1;
  }
  .green {
    color: #91c508;
  }

  p {
    color: #555;
    @media (min-width: 768px) {
      width: 80vw;
    }
    @media (min-width: 1024px) {
      width: 70vw;
    }
    @media (min-width: 1355px) {
      width: 60vw;
    }
  }
  .light {
    text-transform: uppercase;
    font-weight: 400;
  }
  hr {
    margin-left: auto;
    margin-right: auto;
    background: #9a9a9a;
    width: 100%;
    margin-bottom: 0;
    @media (min-width: 768px) {
      width: 65vw;
    }
    @media (min-width: 1024px) {
      width: 55vw;
    }
    @media (min-width: 1355px) {
      width: 45vw;
    }
  }
  a {
    cursor: pointer;
    text-transform: uppercase;
    &.contact {
      color: white;
      text-decoration: underline;
    }
  }
  p {
    text-align: center;
  }
`;

export const ThankYouPageTemplate = ({
  brand,
  gallery,
  parallax,
  home,
  language,
  posts,
}) => {
  const lazyLightBox = {
    type: gallery.type,
    carousel: {
      display: true,
    },
    placeholder: gallery.carousel.placeholder,
    images: gallery.carousel.items.map((i, k) => {
      return {
        renderItem: () => {
          return (
            <Img
              alt={`gallery-${k}`}
              className="lightbox-lazy"
              fluid={i.childImageSharp.fluid}
            />
          );
        },
      };
    }),
  };
  return (
    <div>
      <StyledSection>
        <Container
          color={colors.white}
          justifyContent="space-between"
          style={{
            display: "flex",

            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: `${rhythm(4)} 0`,
              width: "100%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="green big">
                <i className="icon-check"></i>
              </span>
              {ReactHtmlParser(brand.title)}
              <div style={{ maxWidth: "80vw" }}>
                {ReactHtmlParser(brand.main)}
                <hr></hr>
              </div>
            </div>
          </div>
        </Container>
      </StyledSection>

      <Gallery isMasory={true} {...lazyLightBox} items={gallery.items} />
      <div style={{ height: rhythm(4) }}></div>
      {parallax.display && <Parallax {...parallax} />}

      <BlogContainer>
        <BlogRoll
          {...{
            alone: true,
            language,
            home,
            posts,
            title: brand.footer,
          }}
        />
      </BlogContainer>
    </div>
  );
};

const ThankYouPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    description,
    keywords,
    redirects,
    parallax,
    brand,
    gallery,
  } = data.markdownRemark.frontmatter;
  const { home, posts } = data;
  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <SEO
        title={title}
        lang={language}
        description={description}
        keywords={keywords}
      />
      <ThankYouPageTemplate
        {...{
          templateKey,
          language,
          title,
          redirects,
          brand,
          home,
          posts,
          gallery,
          parallax,
        }}
      />
    </Layout>
  );
};

export default ThankYouPage;

export const pageQuery = graphql`
  query ThankYouPage($id: String!, $language: String!) {
    home: markdownRemark(
      frontmatter: { language: { eq: $language }, templateKey: { eq: "blog" } }
    ) {
      frontmatter {
        language
        title
        
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
      limit: 3
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
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "home-page" } }
    ) {
      frontmatter {
        language
        title
        description
        keywords
        redirects
        parallax {
          display
          portraitPosition
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
        }
        brand {
          logo {
            publicURL
          }
          title
          main
          partners {
            image {
              childImageSharp {
                fluid(srcSetBreakpoints: [160], quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          footer
        }
        gallery {
          type
          carousel {
            display
            placeholder
            items {
              childImageSharp {
                fluid(srcSetBreakpoints: [1200], quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          items {
            link {
              display
              to
            }
            image {
              childImageSharp {
                fluid(srcSetBreakpoints: [450], quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            action
            placeholder
            body
          }
        }
      }
    }
  }
`;
