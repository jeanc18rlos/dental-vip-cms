import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Quotes from "../components/Quotes";
import Carousel from "../components/Carousel";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subHeading,
  mainpitch,
  description,
  intro,
  hero,
  testimonial,
  welcome,
  quote
}) => (
  <div>
    <Banner {...hero} />
    <Welcome {...welcome} />
    <Quotes {...quote} />
    <Carousel {...testimonial} />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        hero={frontmatter.hero}
        welcome={frontmatter.welcome}
        quote={frontmatter.quote}
        testimonial={frontmatter.testimonial}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title

        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subHeading
          slogan
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
