import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Whitespace from "../components/Whitespace";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import DVsideContent from "../components/DV-SideContent";
import Procedures from "../components/Procedures";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import BasicContent from "../components/BasicContent";
import InfoSection from "../components/InfoSection";

export const ProfessionalsPageTemplate = ({
  width,
  hero,
  procedures,
  asides,
  heading,
  subTitle,
  sections
}) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && <BasicContent {...heading} />}
      {false && <InfoSection {...{ sections: sections.sections }} />}
      {asides && (
        <DVsideContent borderBottom={true} width={width} {...asides} />
      )}
      {asides && <Whitespace bgColor="#fff" />}
      {subTitle && <Whitespace bgColor="#EDEDED" {...subTitle} />}
      {procedures && procedures.display && <Procedures {...procedures} />}
    </div>
  );
};

const ProfessionalsPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    hero,
    sections,
    heading,
    subTitle,
    procedures,
    asides
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang link={redirects} />
      <ProfessionalsPageTemplate
        {...{
          templateKey,
          language,
          heading,
          subTitle,
          title,
          redirects,
          sections,
          hero,
          procedures,
          asides
        }}
      />
    </Layout>
  );
};

export default ProfessionalsPage;

export const pageQuery = graphql`
  query ProfessionalsPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "professionals-page" } }
    ) {
      frontmatter {
        language
        title
        subTitle {
          text
        }
        asides {
          display
          sections {
            align
            title
            content
            image {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            footer {
              display
              image {
                display
                src {
                  childImageSharp {
                    fluid(maxWidth: 1600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              button {
                text
                to
                display
              }
            }
          }
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
