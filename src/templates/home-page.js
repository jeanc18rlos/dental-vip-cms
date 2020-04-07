import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Quote from "../components/quote";
import Features from "../components/features";
import Brand from "../components/brand";
import Boxes from "../components/boxes";
import Parallax from "../components/parallax";
import Heading from "../components/heading";
export const DefaultPageTemplate = ({ title, hero, quote, features }) => {
  return (
    <div>
      <Brand></Brand>
      <Features {...features}></Features>
      <Quote {...quote} />
      <Heading />
      <Parallax
        {...{
          img: hero.image,
        }}
      ></Parallax>

      <Boxes
        {...{
          img: hero.image,
        }}
      ></Boxes>
      <Parallax
        nocontent={true}
        {...{
          img: hero.image,
        }}
      ></Parallax>
    </div>
  );
};

const DefaultPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    hero,
    quote,
    features,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <DefaultPageTemplate
        {...{ templateKey, language, title, hero, redirects, quote, features }}
      />
    </Layout>
  );
};

export default DefaultPage;

export const pageQuery = graphql`
  query DefaultPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "home-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        quote {
          body
          footer {
            author
            details
          }
        }

        features {
          title
          description
          features {
            to
            img {
              childImageSharp {
                fluid(maxWidth: 224, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
          }
        }
      }
    }
  }
`;
