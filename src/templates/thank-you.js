import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import OverlayGallery from "../components/overlayGallery";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import FolowUs from "../components/FollowUs";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const IndexPageTemplate = ({
  elements,
  lightbox,
  social,
  language,
  latestPosts
}) => {
  const lazyLightBox = {
    type: lightbox.type,
    placeholder: lightbox.placeholder,
    images: lightbox.images.map((i, k) => {
      return {
        renderItem: () => {
          return i.image.childImageSharp ? (
            <Img
              className="lightbox-lazy"
              fluid={i.image.childImageSharp.fluid}
            />
          ) : (
            <img className="lightbox-lazy" alt={`gallery-${k}`} src={i.image} />
          );
        }
      };
    })
  };
  return (
    <div className="dv-thanks">
      <div className="success-section">
        <span className="message-sent">
          <i className="icon-check" />
        </span>
        <h1>{language === "es" ? "¡Su mensaje ha sido enviado con éxito!." : "Your message has been sent successfully!."}</h1>
        <br />
        <p className="dv-home-paragraph">
        {language === "es" ? "Responderemos tan pronto inicie nuestra próxima jornada de trabajo." : "We will respond as soon as our next work day begins."}
          
        </p>
        <br />
        <p className="dv-home-paragraph">{language === "es" ? "¡Mil gracias por su confianza!" : "Thank you so much for your trust!"}</p>
        <hr className="dv-home" />
      </div>

      <OverlayGallery elements={elements} {...lazyLightBox} isMasonry />
      <div style={{height:'120px',width:"100%"}}>

      </div>
      {social && social.display && <FolowUs {...social} />}
      <div className="dv-thank-you-latest col-xs-12">
        <h1 className="thank-you-latest">
          {language === "es" ? "Últimos Posts" : "Latest Posts"}
        </h1>
        <div className="row col-md-12 columns is-multiline thank-you">
          {latestPosts.edges.map(({ node: post }) => (
            <div className="col-md-12 col-lg-4" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <br />
                    <span className="subtitle is-size-5 is-block">
                      {language === "es" ? "Por " : "By "}{" "}
                      {post.frontmatter.author.name} | {post.frontmatter.date} |{" "}
                      {post.frontmatter.tags}
                    </span>
                  </p>
                </header>
                <p>
                  {post.frontmatter.description}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    {language === "es" ? "Leer Más" : "Read More"}
                  </Link>
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout language={frontmatter.language}>
      <SEO title={frontmatter.title} />
      <SetLang language={frontmatter.language} link={frontmatter.redirects} />
      <IndexPageTemplate
        social={frontmatter.social}
        language={frontmatter.language}
        title={frontmatter.title}
        elements={frontmatter.elements}
        lightbox={frontmatter.lightbox}
        latestPosts={data.latestPosts}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query ThankyouPageTemplate($id: String!, $language: String!) {
    latestPosts: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
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
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            author {
              name
            }
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
      frontmatter: { templateKey: { eq: "thank-you" } }
    ) {
      frontmatter {
        title
        language
        redirects
        social {
          display
          imgparallax {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
          additionalText
          icons {
            icon {
              img
              class
            }
            alt
            nameicon
            link {
              href
              target
              rel
            }
          }
        }
        elements {
          link
          bg {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          placeholder
          body
          action
        }

        lightbox {
          display
          type
          placeholder
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        quote {
          title
          body
          author
          footer {
            position
            clinic
          }
        }
      }
    }
  }
`;
