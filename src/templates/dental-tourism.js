import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import Procedures from "../components/Procedures";
import DVTitle from "../components/DV-Title";
import SEO from "../components/seo";
import SetLang from "../components/setLang";

export const AnexedPageTemplate = ({ hero, heading, procedures }) => {
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      {heading && heading.display && <DVTitle {...heading} />}
      {procedures && procedures.display && <Procedures {...procedures} />}
    </div>
  );
};

const AnexedPage = ({ data }) => {
  const {
    templateKey,
    language,
    form,
    paragraph,
    title,
    steps,
    blockGallery,
    heading,
    redirects,
    implantTypes,
    dds,
    plainParallax,
    listGallery,
    sidePanel,
    slogan,
    paragraphSection,
    hero,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang link={redirects} language={language} />
      <AnexedPageTemplate
        {...{
          paragraph,
          templateKey,
          steps,
          heading,
          blockGallery,
          dds,
          language,
          slogan,
          plainParallax,
          title,
          redirects,
          sidePanel,
          paragraphSection,
          hero,
          listGallery,
          form,
          implantTypes,
          procedures
        }}
      />
    </Layout>
  );
};

export default AnexedPage;

export const pageQuery = graphql`
  query DentalTourismPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "annexed-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
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
          indicator
          halfSize
        }

        heading {
          display
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
