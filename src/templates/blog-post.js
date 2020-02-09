import React from "react";
import { intersection } from "lodash";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import SideBar from "../components/DV-BlogSidebar";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import SharePanel from "../styles/components/DV-Share";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  data,
  date,
  language,
  featuredimage,
  author
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="post-content">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-lg-9 post-wrapper">
            <h1>{title}</h1>
            <span className="post-info">
              {language === "es" ? "por" : "by"} {author.name} | {date} | {tags}
            </span>

            <Img fluid={featuredimage.childImageSharp.fluid} alt={"images"} />

            <div className="content">
              <SharePanel slug={data.markdownRemark.fields.slug} />
              <PostContent content={content} />
            </div>
            <SharePanel slug={data.markdownRemark.fields.slug} />
            <div className="row col-xs-12 dv-author-desc">
              <div className="col-xs-12 col-lg-2 text-center">
                <Img
                  className="dv-autor-img"
                  fluid={author.image.childImageSharp.fluid}
                  alt={"images"}
                />
              </div>
              <div className="col-xs-12 col-sm-10 dv-padding">
                <p className="dv-author-name">
                  {author.title}
                  {author.name}
                </p>
                <hr />
                <p>{author.description}</p>
              </div>
            </div>
            <div className="col-xs-12">
              {data.featuredPosts &&
                data.featuredPosts.edges.filter(i => {
                  return (
                    intersection(i.node.frontmatter.tags, tags).length > 0 &&
                    i.node.frontmatter.title !== title
                  );
                }).length > 0 && (
                  <h2 className="col-md-12 featured-title">
                    {language === "es"
                      ? "Posts que podrían interesarle:"
                      : "Posts you may like:"}
                  </h2>
                )}
              {data.featuredPosts
                ? data.featuredPosts.edges
                    .filter(i => {
                      return (
                        intersection(i.node.frontmatter.tags, tags).length >
                          0 && i.node.frontmatter.title !== title
                      );
                    })
                    .map(i => {
                      return (
                        <div className="featured-post">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: i.node.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${i.node.frontmatter.title}`
                            }}
                          />
                          <p className="dv-title">
                            <Link to={i.node.fields.slug}>
                              {i.node.frontmatter.title}
                            </Link>
                          </p>
                        </div>
                      );
                    })
                : null}
            </div>
          </div>
          <SideBar
            structure={data.home.frontmatter.structure}
            language={data.home.frontmatter.language}
            categories={data.categories}
            latestPosts={data.latestPosts}
          />
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <SetLang
        language={post.frontmatter.language}
        link={post.frontmatter.redirects}
      />
      <BlogPostTemplate
        data={data}
        author={post.frontmatter.author}
        content={post.html}
        redirects={post.frontmatter.redirects}
        language={post.frontmatter.language}
        date={post.frontmatter.date}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        featuredimage={post.frontmatter.featuredimage}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $language: String) {
    home: markdownRemark(
      frontmatter: { title: { eq: "Blog" }, language: { eq: $language } }
    ) {
      frontmatter {
        language
        redirects
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
    featuredPosts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          language: { eq: $language }
        }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        redirects
        language
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
      }
    }
  }
`;
