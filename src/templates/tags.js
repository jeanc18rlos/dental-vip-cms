import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import BlogRoll from "../components/BlogRoll";
import SEO from "../components/seo";
import SetLang from "../components/setLang";

class TagRoute extends React.Component {
  render() {
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.posts.totalCount;

    return (
      <Layout>
        <SEO title={title} />
        <SetLang
          language={this.props.data.home.frontmatter.language}
          link={
            this.props.data.home.frontmatter.language !== "es"
              ? "/blog/"
              : "/en/blog/"
          }
        />
        <section className="section">
          <div className="blog-container">
            <div className="content row">
              <header className="col-md-12  is-multiline category-header">
                <h1 className="dv-page-titles dv-page-title-search">
                  {this.props.data.home.frontmatter.language === "es"
                    ? "Categoría"
                    : "Category"}
                  : <i><b>{tag}</b></i>
                </h1>
              </header>
              <BlogRoll data={this.props.data} count={totalCount} />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String, $language: String) {
    site {
      siteMetadata {
        title
      }
    }
    home: markdownRemark(
      frontmatter: { title: { eq: "Blog" }, language: { eq: $language } }
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
          language: { eq: $language }
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
      filter: { frontmatter: { language: { eq: $language } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
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
`;
