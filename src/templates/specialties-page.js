import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import Heading from "../components/heading";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";
import Parallax from "../components/parallax";
import Paragraph from "../components/asideParagrah";
import Testimonial from "../components/testimonial";
import Quote from "../components/quote";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import Form from "../components/form";
import SEO from "../components/seo";
import ReactHtmlParser from "react-html-parser";
import Accordion from "../components/accordion";
import ClinicCases from "../components/clinicCases";
const Block = styled.section`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column !important;
  }
  hr {
    width: 20%;
    height: 4px;
    background: #333;
  }
  .paragraph,
  .list {
    display: flex;
    width: 100%;
    flex-basis: 50%;
    flex-direction: column;
    padding: ${rhythm(4)} 5vw ${rhythm(3)};
  }
  .list {
    .icon {
      font-size: 50px;
      margin-bottom: ${rhythm(1)};
    }
    hr {
      width: 10%;
      background: black;
    }
  }
  .list{
    background: #ededed;
  }
  .paragraph {
    
    .map {
      max-width: 400px;
    }
    .title.big {
      h1 {
        ${scale(1.25)}
      }
    }
  }
`;

const Article = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${rhythm(4)} 5vw ${rhythm(3)};
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 5vw;
  }
  .image {
    width: 100%;
    max-width: 450px;
    max-height: 450px;
    border-radius: 50%;
    display: flex;
    border: 1px solid #4c4c4c !important;
    margin-bottom: ${rhythm(2)};
    div {
      padding-bottom: 100% !important;
    }
  }
`;
export const SpecialtiesPageTemplate = ({
  language,
  hero,
  heading,
  cases,
  article,
  quote,
  plainparallax,
  testimonial,
  procedures,
  anexes,
  accordionList,
  form,
  forms,
  blocksDescription,
}) => {
  const lazyLightBox = {
    placeholder: cases.lightbox.placeholder,
    images:
      cases.display &&
      cases.lightbox.items.map((i, k) => {
        return {
          renderItem: () => {
            return (
              cases.display && (
                <Img critical={true}
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
      <Hero className="center single half" {...hero}></Hero>
      <Heading color="#222" className="dark" {...heading} />
      <Article>
        <article>{ReactHtmlParser(article.content)}</article>
        <Img critical={true} className="image" fluid={article.img.childImageSharp.fluid}></Img>
      </Article>
      <Quote {...quote} />
      <Parallax nocontent={true} img={plainparallax}></Parallax>
      <Accordion {...accordionList} />
      {cases.display && (
        <ClinicCases
          {...lazyLightBox}
          title={cases.title}
          items={cases.items}
        />
      )}
      {anexes.display && <Paragraph top={true} {...anexes} />}

      {anexes.display && (
        <Form
          type="extended"
          data={forms.specialties}
          title={form.title}
          language={language}
          img={form.background}
        ></Form>
      )}
      <Testimonial {...testimonial}></Testimonial>
      {!anexes.display && (
        <Form
          type="extended"
          data={forms.specialties}
          title={form.title}
          language={language}
          img={form.background}
        ></Form>
      )}
      <Block>
        <div className=" paragraph">
          {ReactHtmlParser(blocksDescription.sections.left.content)}
          <span className="map">
            <Img critical={true}
              fluid={
                blocksDescription.sections.left.image.childImageSharp.fluid
              }
            ></Img>
          </span>
        </div>
        <div className=" list">
          {blocksDescription.sections.right.map((i, k) => {
            return (
              <div key={k} className="item">
                {ReactHtmlParser(i.content)}
              </div>
            );
          })}
        </div>
      </Block>
      <Boxes {...procedures}></Boxes>
    </div>
  );
};

const SpecialtiesPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    description,
    keywords,
    redirects,
    hero,
    accordionList,
    heading,
    article,
    cases,
    quote,
    plainparallax,
    testimonial,
    procedures,
    anexes,
    form,
    blocksDescription,
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
      <SpecialtiesPageTemplate
        {...{
          templateKey,
          language,
          title,
          redirects,
          cases,
          hero,
          heading,
          article,
          quote,
          plainparallax,
          anexes,
          testimonial,
          procedures,
          accordionList,
          form,
          blocksDescription,
        }}
      />
    </Layout>
  );
};

export default SpecialtiesPage;

export const pageQuery = graphql`
  query SpecialtiesPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "specialties-page" } }
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
                fluid(quality: 100, srcSetBreakpoints: [1500]) {
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
        staff {
          title
          cards {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [200], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            content
          }
        }
        anexes {
          display
          items {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [800], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            content
            footer {
              icon {
                display
                img {
                  childImageSharp {
                    fluid(srcSetBreakpoints: [400], quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              link {
                display
                to
                placeholder
              }
            }
          }
        }
        cases {
          title
          display
          lightbox {
            placeholder
            items {
              childImageSharp {
                fluid(srcSetBreakpoints: [900], quality: 100) {
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
                fluid(srcSetBreakpoints: [450], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            action
            placeholder
            body
          }
        }
        form {
          title
          background {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        blocksDescription {
          sections {
            left {
              content
              image {
                childImageSharp {
                  fluid(srcSetBreakpoints: [600], quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            right {
              content
            }
          }
        }
        article {
          content
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        plainparallax {
          childImageSharp {
            fluid(srcSetBreakpoints: [1500], quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
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
        testimonial {
          display
          color
          content
          images {
            portrait {
              childImageSharp {
                fluid(srcSetBreakpoints: [480], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            landscape {
              childImageSharp {
                fluid(srcSetBreakpoints: [700], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        accordionList {
          display
          title
          items {
            content
            title
          }
        }
        procedures {
          title
          procedures {
            title
            to
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [550], quality: 100) {
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
