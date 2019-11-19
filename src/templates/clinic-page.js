import React from "react";
import PropTypes from "prop-types";
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
/*
HERO
HEADING
CONTENT
GALLERY
SECTIONS
QUOTE
PARALLAX
PROCEDURES
*/
export const ClinicPageTemplate = ({
  hero,
  heading,
  gallery,
  lightbox,
  elements,
  procedures,
  sections
}) => {
  const lazyLightBox = {
    display: lightbox.display,
    type: lightbox.type,
    placeholder: lightbox.placeholder,
    images: lightbox.images.map(i => {
      return {
        renderItem: () => {
          return i.image.childImageSharp ? (
            <Img
              className="lightbox-lazy facilities"
              fluid={i.image.childImageSharp.fluid}
            />
          ) : (
            <img className="lightbox-lazy" src={i.image} />
          );
        }
      };
    })
  };
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && <BasicContent {...heading} />}
      {gallery.display && (
        <OverlayGallery
          {...(lazyLightBox.display && lazyLightBox)}
          isMasonry={gallery.isMasonry}
          elements={elements}
        />
      )}
      {
        sections.display && <InfoSection {...{ sections:sections.sections }}  />
      }
      {procedures && procedures.display && <Procedures {...procedures} />}
    </div>
  );
};

const ClinicPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    hero,
    heading,
    gallery,
    lightbox,
    elements,
    sections,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang language={language} link={redirects} />
      <ClinicPageTemplate
        {...{
          templateKey,
          language,
          title,
          gallery,
          elements,
          redirects,
          lightbox,
          sections,
          hero,
          heading,
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
        heading {
          classname
          title
          content
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
