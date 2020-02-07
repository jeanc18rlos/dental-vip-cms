import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import BasicContent from "../components/BasicContent";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import OverlayGallery from "../components/overlayGallery";
import InfoSection from "../components/InfoSection";
import FolowUs from "../components/FollowUs";
import Quote from "../components/Quote";
import Reasons from "../components/Reasons";
import Whitespace from "../components/Whitespace";
import InfoImage from "../components/InfoImage";
import Financing from "../components/Financing";
import Checkout from "../components/DV-Checkout";

export const ClinicPageTemplate = ({
  hero,
  heading,
  gallery,
  lightbox,
  elements,
  procedures,
  social,
  banner,
  lightQuote,
  reasons,
  checkout,
  sections
}) => {
  const lazyLightBox = {
    display: lightbox.display,
    type: lightbox.type,
    placeholder: lightbox.placeholder,
    images: lightbox.images.map((i, k) => {
      return {
        renderItem: () => {
          return i.image.childImageSharp ? (
            <Img
            imgStyle={{ objectPosition: 'center'}} 
              key={`image-${k}`}
              className="lightbox-lazy facilities"
              fluid={i.image.childImageSharp.fluid}
            />
          ) : (
            <img
              className="lightbox-lazy"
              alt={`image-${k}`}
              key={`image-${k}`}
              src={i.image}
            />
          );
        }
      };
    })
  };
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && heading.display && <BasicContent {...heading} />}
      {banner && banner.display && <InfoImage {...banner} />}
      {banner && banner.display && <Financing />}
      {reasons.display && <Reasons {...reasons} />}
      {gallery.display && (
        <OverlayGallery
          {...(lazyLightBox.display && lazyLightBox)}
          isMasonry={gallery.isMasonry}
          elements={elements}
        />
      )}
      {checkout && checkout.display && <Checkout {...checkout} />}
      {gallery.display && <Whitespace bgColor="#fff" />}
      {sections.display && <InfoSection {...{ sections: sections.sections }} />}
      {lightQuote && lightQuote.display && <Quote {...lightQuote} />}
      {social && social.display && <FolowUs {...social} />}
      {procedures && procedures.display && <Procedures {...procedures} />}
    </div>
  );
};

const ClinicPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    lightQuote,
    redirects,
    hero,
    banner,
    heading,
    gallery,
    lightbox,
    social,
    elements,
    reasons,
    sections,
    checkout,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang language={language} link={redirects} />
      <ClinicPageTemplate
        {...{
          templateKey,
          banner,
          language,
          title,
          gallery,
          elements,
          social,
          checkout,
          redirects,
          lightbox,
          lightQuote,
          sections,
          hero,
          heading,
          reasons,
          procedures
        }}
      />
    </Layout>
  );
};

export default ClinicPage;

export const pageQuery = graphql`
  query ClinicPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "clinic-page" } }
    ) {
      frontmatter {
        language
        redirects
        title
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
        moreinfoFinancing {
          display
          type
          imgparallax {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          subtitle
          title
          otherinfo1
          otherinfo2
          paragraphs {
            paragraph
          }
        }
        banner {
          display
          img {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          paragraphs {
            paragraph1
            paragraph2
          }
        }
        checkout {
          display
          title
          options {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            subTitle
          }
          checkout {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            to
            text
          }
          banner {
            aside
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

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

        lightQuote {
          display
          img {
            ld {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pt {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          content
        }

        heading {
          display
          classname
          title
          content
        }
        reasons {
          display
          reasons {
            type
            img {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            nameimg
            title
            paragraph
          }
        }
        gallery {
          display
          isMasonry
        }
        lightbox {
          display
          type
          placeholder
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
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
          icon
          title
          placeholder
          body
          action
        }
        sections {
          display
          sections {
            type
            titleimage {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            contentimage {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            titlecontent
            content
          }
        }
        procedures {
          display
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
      }
    }
  }
`;
