import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Quote from "../components/quote";
import Features from "../components/features";
import Brand from "../components/brand";
import Boxes from "../components/boxes";
import SEO from "../components/seo";
import Statistics from "../components/statistics";
import Carousel from "../components/carousel";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Img from "gatsby-image";
import { graphql } from "gatsby";


export const HomePageTemplate = ({
  hero,
  brand,
  gallery,
  features,
  quote,
  statistics,
  testimonials,
  procedures
}) => {
  const lazyLightBox = {
    type: gallery.type,
    carousel: {
      display: true
    },
    placeholder: gallery.carousel.placeholder,
    images: gallery.carousel.items.map((i, k) => {
      return {
        renderItem: () => {
          return (
            <Img critical={true}
              alt={`gallery-${k}`}
              className="lightbox-lazy"
              fluid={i.childImageSharp.fluid}
            />
          );
        }
      };
    })
  };
  return (
    <div>
      <Hero {...hero}></Hero>
      <Brand {...brand}></Brand>
      <Gallery isMasory={true} {...lazyLightBox} items={gallery.items} />
      <Features {...features}></Features>
      <Quote {...quote} />
      <Statistics {...statistics}></Statistics>
      <Carousel {...testimonials}></Carousel>
      <Boxes {...procedures}></Boxes>
    </div>
  );
};

const HomePage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    description,
    keywords,
    redirects,
    hero,
    brand,
    gallery,
    quote,
    statistics,
    testimonials,
    features,
    procedures
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <SEO
        title={title}
        lang={language}
        description={description}
        keywords={keywords}
      />
      <HomePageTemplate
        {...{
          templateKey,
          language,
          title,
          redirects,
          hero,
          brand,
          gallery,
          quote,
          statistics,
          testimonials,
          features,
          procedures
        }}
      />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "home-page" } }
    ) {
      frontmatter {
        language
        title
        description
        keywords
        redirects
        hero {
          background {
            scaleOnReveal
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [ 1600 ], quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            isParallax
          }
          anim {
            display
            type
          }
          height
          indicator
          portraitPosition
          content {
            position
            body
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
                fluid(srcSetBreakpoints: [ 160 ], quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
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
                fluid(srcSetBreakpoints: [ 1200 ], quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
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
                fluid(srcSetBreakpoints: [ 450 ], quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            action
            placeholder
            body
          }
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
              fluid(srcSetBreakpoints: [ 1500 ], quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
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
                fluid(srcSetBreakpoints: [ 250 ], quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
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
                fluid(srcSetBreakpoints: [ 225 ], quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
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
                fluid(srcSetBreakpoints: [ 550 ], quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
