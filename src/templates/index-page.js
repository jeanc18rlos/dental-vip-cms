import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Welcome from "../components/Welcome";
import Quotes from "../components/Quotes";
import Carousel from "../components/Carousel";
import Specialties from "../components/Specialties";
import Procedures from "../components/Procedures";
import OverlayGallery from "../components/overlayGallery";
import HomeParallax from "../components/Parallax/HomeParallax";
import SEO from "../components/seo";
import SetLang from "../components/setLang";

export const IndexPageTemplate = ({
  hero,
  testimonial,
  welcome,
  parallax,
  quote,
  specialties,
  procedures,
  elements,
  lightbox
}) => {
  const lazyLightBox = {
    type: lightbox.type,
    placeholder: lightbox.placeholder,
    images: lightbox.images.map((i,k) => {
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
    <div>
      <DVhero {...hero} />
      <Welcome {...welcome} />
      <OverlayGallery elements={elements} {...lazyLightBox} isMasonry />
      <Specialties {...specialties} />
      <Quotes {...quote} />
      <HomeParallax {...parallax} />
      <Carousel {...testimonial} />
      <Procedures {...procedures} />
    </div>
  );
};



const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout language={frontmatter.language}>
      <SEO title={frontmatter.title} />
      <SetLang language={frontmatter.language}  link={frontmatter.redirects} />
      <IndexPageTemplate
        title={frontmatter.title}
        procedures={frontmatter.procedures}
        description={frontmatter.description}
        hero={frontmatter.hero}
        specialties={frontmatter.specialties}
        welcome={frontmatter.welcome}
        quote={frontmatter.quote}
        testimonial={frontmatter.testimonial}
        elements={frontmatter.elements}
        lightbox={frontmatter.lightbox}
        parallax={frontmatter.parallax}
      />
    </Layout>
  );
};



export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        title
        language
        redirects
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
        parallax {
          stadistics {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          landscape {
            publicURL
          }
          portrait {
            publicURL
          }
          desktop {
            publicURL
          }
          portraitxl {
            publicURL
          }
        }
        hero {
          type
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          parallax
          indicator
          halfSize
          captions {
            content
            delay
          }
        }
        testimonial {
          title
          items {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            testimonial
            position
            name
          }
        }

        procedures {
          title
          procedures {
            title
            to
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        welcome {
          logo {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          heading
          main
          location
          partners {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        specialties {
          title
          paragraph
          slogan
          features {
            to
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
          }
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
