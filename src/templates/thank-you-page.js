import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Brand from "../components/brand";
import Gallery from "../components/gallery";
import Img from "gatsby-image";
import Parallax from "../components/parallax";
import { graphql } from "gatsby";

export const ThankYouPageTemplate = ({ brand, gallery, parallax }) => {
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
      <Brand {...brand}></Brand>
      <Gallery isMasory={true} {...lazyLightBox} items={gallery.items} />
      {parallax.display && <Parallax {...parallax} />}
    </div>
  );
};

const ThankYouPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    parallax,
    brand,
    gallery,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <ThankYouPageTemplate
        {...{
          templateKey,
          language,
          title,
          redirects,
          brand,
          gallery,
          parallax,
        }}
      />
    </Layout>
  );
};

export default ThankYouPage;

export const pageQuery = graphql`
  query ThankYouPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "home-page" } }
    ) {
      frontmatter {
        language
        title
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
