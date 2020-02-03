import React from "react";
import PropTypes from "prop-types";
import { kebabCase, intersection } from "lodash";
import Helmet from "react-helmet";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { graphql, Link, navigate } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import Content, { HTMLContent } from "../components/Content";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  data,
  date,
  redirects,
  language,
  featuredimage,
  author,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="post-content">
        <div className="row">
          <div className="col-md-9 post-wrapper">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <span className="post-info">
              {language === "es" ? "por" : "by"} {author.name} | {date} | {tags}
            </span>
            <Img fluid={featuredimage.childImageSharp.fluid} alt={"images"} />
            <div className="content">
              <PostContent content={content} />
            </div>
            <div className="row col-xs-12 dv-author-desc">
              <div className="col-xs-12 col-sm-2 text-center">
                <Img
                  className="dv-autor-img"
                  fluid={author.image.childImageSharp.fluid}
                  alt={"images"}
                />
              </div>
              <div className="col-xs-12 col-sm-10 dv-padding">
                <p className="dv-author-name">
                  {author.title}. {author.name}
                </p>
                <hr />
                <p>{author.description}</p>
              </div>
            </div>
            <div  className="col-xs-12">
            {
              data.featuredPosts && data.featuredPosts.edges.filter(i => { return intersection(i.node.frontmatter.tags, tags).length > 0 && i.node.frontmatter.title !== title }).length > 0 && <h2 className="col-md-12 featured-title">{language === 'es' ? 'Posts que podrían interesarle:' : 'Posts you may like:'}</h2>
            }
            {data.featuredPosts
              ? data.featuredPosts.edges.filter(i => { return intersection(i.node.frontmatter.tags, tags).length > 0 && i.node.frontmatter.title !== title }).map(i => {
                return (
                  <div className="featured-post">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: i.node.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${i.node.frontmatter.title}`
                      }}
                    />
                    <p className="dv-title">
                      <a
                        onClick={() => {
                          navigate(i.node.fields.slug);
                        }}
                      >
                        {i.node.frontmatter.title}
                      </a>
                    </p>
                  </div>
                );
              })
              : null}

            </div>
          </div>

          <div className="col-xs-12 col-md-3 sidebar dv-sidebar">
            <h4>{language === "es" ? "Busqueda" : "Search"}</h4>
            <hr />
            <div className="dv-search-area-blog">
              <form method="get" action="https://dentalvip.com.ve/" id="form4">
                <input
                  type="text"
                  name="s"
                  placeholder={`${language === "es" ? "Buscar" : "Search"}`}
                />
                <button
                  type="submit"
                  form="form4"
                  value="Submit"
                  className="dv-btn-submit-search-sd"
                >
                  <i id="dv-search-icon-spr" className="icon-search" />
                </button>
              </form>
            </div>
            <h4 className="dv-latest-post">
              {language === "es" ? "Ultimos Posts" : "Latest Posts"}
            </h4>
            <hr />
            {data.latestPosts.edges.map(i => {
              return (
                <div className="dv-recent-content">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: i.node.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${i.node.frontmatter.title}`
                    }}
                  />
                  <p className="dv-title">
                    <a
                      onClick={() => {
                        navigate(i.node.fields.slug);
                      }}
                    >
                      {i.node.frontmatter.title}
                    </a>
                  </p>
                </div>
              );
            })}

            <h4 className="dv-latest-post dv-lp-35">
              {language === "es" ? "Categorias" : "Categories"}
            </h4>
            <hr />
            {data.categories.group.map(tag => (
              <li key={tag.fieldValue}>
                <Link
                  to={`/${
                    language === "es" ? "categorias" : "en/categories"
                    }/${kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}

            <h4 className="dv-latest-post dv-latest-post-susc">
              {language === "es" ? "Suscripcion" : "Suscription"}
            </h4>
            <hr />
            <div className="tnp tnp-subscription dv-newsletter-sidebar">
              <img
                src="https://dentalvip.com.ve/wp-content/themes/DentalVip/assets/vip.jpg"
                alt="VIP Newsletter"
                className="icon-news"
              />
              <h5></h5>
              <form
                method="post"
                action="http://dentalvip.roraimasolutions.com/?na=s"
                onsubmit="return newsletter_check(this)"
              >
                <input type="hidden" name="nlang" defaultValue />
                <div className="tnp-field tnp-field-firstname">
                  <input
                    className="tnp-firstname"
                    type="text"
                    name="nn"
                    required
                    placeholder={`${language === "es" ? "Nombre" : "Name"}`}
                  />
                </div>
                <div className="tnp-field tnp-field-email">
                  <input
                    className="tnp-email"
                    type="email"
                    name="ne"
                    required
                    placeholder={"E-mail"}
                  />
                </div>
                <div className="tnp-field tnp-field-button">
                  <input
                    className="tnp-submit"
                    type="submit"
                    defaultValue={`${language === "es" ? "Enviar" : "Send"}}`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <SetLang language={post.frontmatter.language} link={post.frontmatter.redirects} />
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

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $language: String) {
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
