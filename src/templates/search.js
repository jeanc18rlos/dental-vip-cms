import React, { useState } from "react";
import { graphql } from "gatsby";
import BlogRoll from "../components/blogRoll";
import Layout from "../layout";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import styled from "styled-components";
import withLocation from "../components/withLocation";
import { rhythm } from "../utils/typography";
import queryString from "query-string";

const BlogContainer = styled.section`
  display: flex;
  padding: 0 5vw;
  flex-direction: row-reverse;
  flex-flow: wrap;
  margin-bottom: ${rhythm(4)};

  .blog-container {
    display: flex;
    flex-flow: wrap;
    width: 100%;
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
    width: 100%;
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
const StlyledNotF = styled.section`
  padding: ${rhythm(4)} 5vw ${rhythm(3)};
  text-align: center;
  h1.title {
    color: #999;
    font-size: 100%;
    line-height: 1;
    font-family: Bebas Neue Bold;
    font-size: calc(8em + 5vw);
  }
  .error-box {
    max-width: 560px;
    border: solid 1px;
    padding: ${rhythm(0.5)} ${rhythm(2)};
    margin: auto;
    color: #333;
    font-weight: 300;
    margin-bottom: ${rhythm(3)};
  }
  .form {
    margin-top: ${rhythm(3)} !important;
    margin-bottom: ${rhythm(1)} !important;
    width: fit-content;
    margin: auto;
    background: #ededed !important;
    border: 1px solid;
    input {
      min-width: 50vw;
      padding: 10px;
      border: none;
      border-right: 1px solid;
      background: #ededed !important;
    }
    button {
      padding: 10px;
      background: none;
      border: none;
      background: #ededed !important;
      color: #555;
    }
  }
`;

export const SearchPageTemplate = ({
  home,
  language,
  posts,
  categories,
  term,
}) => {
  const setSearchTerm = (e) => {
    e.preventDefault();
    const term = e.target.search.value || "";

    if (typeof window !== "undefined") {
      window.location.href = `${
        language === "es" ? "/blog/busqueda" : "/en/blog/search"
      }?${queryString.stringify({
        term,
      })}`;
    }
  };
  const [isEmpty, setEmpty] = useState(false);
  return (
    <div>
      {" "}
      {isEmpty && (
        <StlyledNotF>
          <h1 className="title">
            <span
              style={{
                position: "relative",
              }}
            >
              <i className="icon-search"></i>
              <span
                style={{
                  position: "absolute",
                  left: "27%",
                  top: "28%",
                  fontSize: ".7em",
                  lineHeight: 0,
                }}
              >
                ?
              </span>
            </span>
          </h1>
          <h2 className="error-box">
            {language === "es"
              ? "NO SE HAN ENCONTRADO RESULTADOS"
              : "NO RESULTS FOUND"}
          </h2>

          <p>
            {language === "en"
              ? "Sorry, we couldnt find any resource under your search terms."
              : "Lo sentimos, pero ningun contenido coincide con sus terminos de busqueda"}
          </p>
          <p>
            {language === "en"
              ? "Please, try again with different words."
              : "Por favor, intente de nuevo con otras palabras."}
          </p>

          <form onSubmit={(e) => setSearchTerm(e)} className="form" id="form4">
            <input
              name="search"
              type="text"
              placeholder={language === "es" ? "Buscar" : "Search"}
            />
            <button>
              <i className="icon-search" />
            </button>
          </form>
        </StlyledNotF>
      )}
      <div className={`${!isEmpty ? "d-auto" : "d-none"}`}>
        <h2
          style={{
            marginTop: "6.4rem",
            marginBottom: "3.2rem",
            width: "calc(100% - 10vw)",
            border: "solid 1px",
            marginLeft: "5vw",
            display: "flex",
            WebkitBoxPack: "center",
            WebkitJustifyContent: "center",
            msFlexPack: "center",
            justifyContent: "center",
            WebkitAlignItems: "center",
            WebkitBoxAlign: "center",
            msFlexAlign: "center",
            alignItems: "center",
            padding: "0.8rem 0",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
          className="cagegory-title"
        >
          {language === "es"
            ? "Resultados de busqueda para "
            : "Search results for "}
          :{"  "}
          <i>
            &nbsp;<b>{term.term}</b>
          </i>
        </h2>
        <BlogContainer>
          <BlogRoll
            isSearch={true}
            {...{
              isEmpty,
              setEmpty,
              term,
              language,
              home,
              posts,
              categories,
            }}
          />
        </BlogContainer>
      </div>
    </div>
  );
};

const SearchPage = ({ data, term }) => {
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
      <SearchPageTemplate
        {...{
          term,
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

export default withLocation(SearchPage);

export const pageQuery = graphql`
  query SearchPage($id: String!, $language: String!) {
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
