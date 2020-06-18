import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Heading from "../components/heading";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import List from "../components/list";
import Parallax from "../components/parallax";
import Paragraph from "../components/asideParagrah";
import Testimonial from "../components/testimonial";
import Financing from "../components/financing";
export const ClinicPageTemplate = ({
  hero,
  gallery,
  procedures,
  paragraph,
  parallax,
  financing,
  testimonial,
  heading,
  list,
}) => {
  const lazyLightBox = {
    type: gallery.type,
    carousel: {
      display: true,
    },
    placeholder: gallery.carousel.placeholder,
    images:
      gallery.carousel.display &&
      gallery.carousel.items.map((i, k) => {
        return {
          renderItem: () => {
            return (
              gallery.carousel.display && (
                <Img
                  alt={`gallery-${k}`}
                  className="lightbox-lazy"
                  fluid={i.childImageSharp.fluid}
                />
              )
            );
          },
        };
      }),
  };
  return (
    <div>
      <Hero className="center single" {...hero}></Hero>
      <Heading {...heading} />
      {list.display && <List {...list} />}
      {paragraph.display && <Paragraph top={true} {...paragraph} />}
      {gallery.display && (
        <Gallery
          mb={true}
          isMasonry={false}
          {...lazyLightBox}
          items={gallery.items}
        />
      )}
      {testimonial.display && <Testimonial {...testimonial}></Testimonial>}
      {financing.display && <Financing {...financing} />}
      {parallax.display && <Parallax {...parallax} />}

      <Boxes {...procedures}></Boxes>
    </div>
  );
};

const ClinicPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    parallax,
    hero,
    heading,
    paragraph,
    gallery,
    financing,
    list,
    description,
    keywords,
    testimonial,
    procedures,
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
      <ClinicPageTemplate
        {...{
          templateKey,
          language,
          parallax,
          title,
          redirects,
          hero,
          heading,
          gallery,
          list,
          paragraph,
          procedures,
          financing,
          testimonial,
        }}
      />
    </Layout>
  );
};

export default ClinicPage;

export const pageQuery = graphql`
  query ClinicPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "clinic-page" } }
    ) {
      frontmatter {
        language
        title
        description
        keywords
        redirects
        heading {
          display
          content
        }
        hero {
          background {
            scaleOnReveal
            img {
              childImageSharp {
                fluid(quality: 100, srcSetBreakpoints: [  1500 ]) {
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

        list {
          display
          items {
            content
          }
        }
        paragraph {
          display
          items {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [ 800 ], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            content
          }
        }
        financing {
          display
          banner {
            childImageSharp {
              fluid(srcSetBreakpoints: [ 800 ], quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          content
          modal {
            content
            display
            interval
            placeholder
          }
          calculator {
            warning
            placeholders {
              amount
              time
              rate
              calculate
              currency
              result
            }
            advise
          }
        }
        parallax {
          display
          portraitPosition
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [ 1500 ], quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          content
        }
        testimonial {
          display
          color
          content
          images {
            portrait {
              childImageSharp {
                fluid(srcSetBreakpoints: [ 480 ], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            landscape {
              childImageSharp {
                fluid(srcSetBreakpoints: [ 700 ], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        gallery {
          display
          type
          carousel {
            display
            placeholder
            items {
              childImageSharp {
                fluid(srcSetBreakpoints: [ 1200 ], quality: 100) {
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
                fluid(srcSetBreakpoints: [ 450 ], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            action
            placeholder
            body
          }
        }
        procedures {
          title
          procedures {
            title
            to
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [ 550 ], quality: 100) {
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
