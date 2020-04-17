import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Heading from "../components/heading";
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
  quote,
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
      {quote.display && <Testimonial {...quote}></Testimonial>}
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
    quote,
    procedures,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
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
          quote,
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
                fluid(maxWidth: 1600, quality: 100) {
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
                fluid(maxWidth: 800, quality: 80) {
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
              fluid(maxWidth: 800, quality: 80) {
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
              fluid(maxWidth: 1500, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          content
        }
        quote {
          display
          color
          content
          images {
            portrait {
              childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            landscape {
              childImageSharp {
                fluid(maxWidth: 700, quality: 80) {
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
                fluid(maxWidth: 1200, quality: 80) {
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
                fluid(maxWidth: 450, quality: 75) {
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
                fluid(maxWidth: 550, quality: 100) {
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
