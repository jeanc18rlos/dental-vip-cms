import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../Layout";
import BlogRoll from "../components/BlogRoll";
import DVhero from "../components/DV-Hero";
import BasicContent from "../components/BasicContent";
import SEO from "../components/seo";
import SetLang from "../components/setLang";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.posts.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <SEO title={title} />
        <SetLang language={this.props.data.home.frontmatter.language} link={this.props.data.home.frontmatter.language !== "es" ? "/blog/" : "/en/blog/"} />
        <section className="section">
          <div className="container">
            <div className="content row">
            <header class="category-header">
                        <h1 class="dv-page-titles dv-page-title-search">{this.props.data.home.frontmatter.language === "es" ? "Categoría" : "Category"}: {tag}</h1>
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
