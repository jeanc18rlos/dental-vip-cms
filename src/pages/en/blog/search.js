import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../../../Layout";
import BlogRoll from "../../../components/BlogRoll";
import DVhero from "../../../components/DV-Hero";
import DVTitle from "../../../components/DV-Title";
import SEO from "../../../components/seo";
import SetLang from "../../../components/setLang";
export default ({ location }) => {
  return (
    <StaticQuery
      query={graphql`
        query SearchBlogRollQuery {
          home: markdownRemark(
            frontmatter: { title: { eq: "Blog" }, language: { eq: "en" } }
          ) {
            frontmatter {
              language
              title
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
              heading {
                classname
                title
                content
              }
              redirects
            }
          }
          latestPosts: allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            limit: 4
            filter: {
              frontmatter: {
                templateKey: { eq: "blog-post" }
                language: { eq: "en" }
              }
            }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
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
            filter: { frontmatter: { language: { eq: "en" } } }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
          posts: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {
              frontmatter: {
                templateKey: { eq: "blog-post" }
                language: { eq: "en" }
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
                    image {
                      childImageSharp {
                        fluid(maxWidth: 800, quality: 100) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    name
                    title
                    description
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
        }
      `}
      render={(data, count) => (
        <Layout>
          <SEO title={"Search"} />
          <SetLang
            language={data.home.frontmatter.language}
            link={
              data.home.frontmatter.language !== "es"
                ? "/blog/"
                : "/en/blog/"
            }
          />
          <section className="section">
            <div className="blog-container">
              <div className="content row">
                <header className="col-md-12  is-multiline category-header">
                  <h1 className="dv-page-titles dv-page-title-search">
                    {data.home.frontmatter.language === "es"
                      ? "RESULTADOS DE LA BÚSQUEDA PARA"
                      : "Results for"}
                    :{" "}
                    <i>
                      <b>{location.search.substr(6)}</b>
                    </i>
                  </h1>
                </header>
                <BlogRoll
                  query={location && location.search}
                  data={data}
                  count={count}
                />
              </div>
            </div>
          </section>
        </Layout>
      )}
    />
  );
};
