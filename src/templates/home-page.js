import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Quote from "../components/quote";
import Features from "../components/features";
import Brand from "../components/brand";
import Boxes from "../components/boxes";
import Statistics from "../components/statistics";
import Carousel from "../components/carousel";
export const DefaultPageTemplate = ({
  hero,
  brand,
  quote,
  features,
  testimonials,
  procedures,
  statistics,
}) => {
  return (
    <div>
      <Brand {...brand}></Brand>
      <Features {...features}></Features>
      <Quote {...quote} />
      <Statistics {...statistics}></Statistics>
      <Carousel {...testimonials}></Carousel>
      <Boxes {...procedures}></Boxes>
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
    brand,
    quote,
    statistics,
    testimonials,
    features,
    procedures,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <DefaultPageTemplate
        {...{
          templateKey,
          language,
          title,
          redirects,
          hero,
          brand,
          quote,
          statistics,
          testimonials,
          features,
          procedures,
        }}
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
        brand {
          logo {
            publicURL
          }
          title
          main
          partners {
            image {
              childImageSharp {
                fluid(maxWidth: 160, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          footer
        }

        quote {
          body
          footer {
            author
            details
          }
        }
        statistics {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          items {
            number
            title
          }
        }
        testimonials {
          title
          items {
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            testimonial
            position
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

        procedures {
          title
          procedures {
            title
            to
            img {
              childImageSharp {
                fluid(maxWidth: 550, quality: 100) {
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
