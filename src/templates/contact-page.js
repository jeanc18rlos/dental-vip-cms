import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import FolowUs from "../components/FollowUs";
import BasicContent from "../components/BasicContent";

export const ContactPageTemplate = ({ hero, heading, amenities, social }) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && <BasicContent {...heading} />}
      <section className="dv-map">
        <iframe src="https://snazzymaps.com/embed/72109" />
      </section>

      {social && social.display && <FolowUs {...social} />}
      {amenities && amenities.display && <Procedures {...amenities} />}
    </div>
  );
};

const ContactPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    heading,
    hero,
    amenities,
    social
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang language={language} link={redirects} />
      <ContactPageTemplate
        {...{
          templateKey,
          heading,
          language,
          title,
          redirects,
          hero,
          amenities,
          social
        }}
      />
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "contact-page" } }
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
        heading {
          classname
          title
          content
        }
        amenities {
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
            info {
              image {
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              text
            }
          }
        }
      }
    }
  }
`;
