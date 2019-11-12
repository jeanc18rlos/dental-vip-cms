import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../Layout";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Quotes from "../components/Quotes";
import Carousel from "../components/Carousel";
import Specialties from "../components/Specialties";
import Procedures from "../components/Procedures";
import OverlayGallery from "../components/overlayGallery";
import HomeParallax from "../components/Parallax/HomeParallax";


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
    images: lightbox.images.map(i=>{
      return {
        renderItem: () => {
          return i.image.childImageSharp ?
           
            <Img
              className="lightbox-lazy"
              fluid={i.image.childImageSharp.fluid}
            />
          : <img
          className="lightbox-lazy"
          src={i.image}
        />
        }
      }
    })
  };
  return (
    <div>
      <Banner {...hero} />
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
