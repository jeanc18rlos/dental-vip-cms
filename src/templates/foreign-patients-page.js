import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Heading from "../components/heading";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import Form from "../components/form";
import { graphql } from "gatsby";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
const Slogan = styled(BackgroundImage)`
  padding: ${rhythm(4)} calc(5vw) ${rhythm(3)};
  color: white;
  text-align: center;
  h2 {
    font-weight: 400;
  }
`;
const AltHeading = styled.section`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.dark {
    background-color: #222;
    p,
    .title {
      color: white;
    }
  }
  .thin {
    font-weight: 300;
    ${scale(0.2)};
  }
  .dv-title-circle {
    margin: auto;
    background: #91c508;
    align-items: center;
    font-size: ${rhythm(1)};
    width: 130px;
    height: 130px;
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 50%;
    justify-content: center;
    margin-top: -${rhythm(2)};
    margin-bottom: ${rhythm(1)};
  }
  text-align: center;
  padding: ${rhythm(4)} 0 0 0;
  .title {
    font-weight: 300;
    margin-bottom: ${rhythm(2)};
    .icon {
      font-size: 52px;
      background: black;
      border-radius: 50%;
      padding: 10px;
    }
    @media (min-width: 1355px) {
      width: 80%;
    }
  }
  p {
    text-align: center;
    color: #555;
    @media (min-width: 1355px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    &.small {
      ${scale(-0.15)}
    }
  }

  .columns {
    display: flex;
    background-color: #222;
    width: 100%;
    color: white;
    padding: 0 calc(5vw - ${rhythm(4)});
    justify-content: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    p {
      width: 100%;
      color: white;
    }
    .phase {
      padding: 0 ${rhythm(4)} ${rhythm(4)};
      color: white;
      max-width: 558px;
    }
  }
`;
const HostSection = styled(BackgroundImage)`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.99;
  display: flex;
  word-break: break-all;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    .columns {
      padding: 0 calc(5vw) ${rhythm(3)} !important;
    }
    .columns,
    .content {
      max-width: 480px !important;
      flex-direction: column !important;
      > p {
        margin-top: 0 !important;
      }
      a {
        margin-bottom: 1.6em !important;
      }
    }
  }
  .columns {
    display: flex;
    width: 100%;
    padding: 0 calc(5vw) ${rhythm(4)};
    flex-direction: row;
    max-width: 1200px;
    margin: auto;

    a {
      display: flex;
      height: fit-content;
      width: calc(100% - 30px);
      margin-left: 15px;
      margin-right: 15px;
      text-decoration: none;
      flex-direction: column;
      &:hover {
        p {
          background-color: #91c508 !important;
        }
      }
      p {
        font-family: Bebas Neue Bold;
        ${scale(1)}
        padding-top: 5%;
        padding-bottom: 5%;
        background: #222;
        text-align: center;
        color: #fff;
        transition: all 0.4s;
        line-height: 1;
        font-weight: 700;
        width: 100%;
        text-decoration: none;
        margin: 0;
      }
    }
  }
  .content {
    display: flex;
    width: 100%;
    padding: ${rhythm(4)} calc(5vw) ${rhythm(3)};
    flex-direction: row;
    max-width: 1200px;
    margin: auto;
    > h1 {
      display: flex;
      height: fit-content;
      width: calc(100% - 30px);
      border-bottom: 1px solid #91c508;
      padding-bottom: 0.8em;
      margin-left: 15px;
      word-break: break-word;
      margin-right: 15px;
    }
    > p {
      margin-top: 6em;
      display: flex;
      width: calc(100% - 30px);
      margin-left: 15px;
      margin-right: 15px;
    }
  }
`;
export const ForeignPatientsPageTemplate = ({
  hero,
  form,
  altHeading,
  procedures,
  forms,
  heading,
  hostSection,
  slogan,
  language,
}) => {
  return (
    <div>
      <Hero className="center single half" {...hero}></Hero>
      <AltHeading>
        <div
          style={{
            padding: "0 5vw",
          }}
        >
          {ReactHtmlParser(altHeading.title)}
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="columns">
          {altHeading.columns.map((i, k) => {
            return (
              <div className="phase">
                {ReactHtmlParser(i.head)}
                {ReactHtmlParser(i.body)}
              </div>
            );
          })}
        </div>
      </AltHeading>
      <Heading {...heading} />
      <Slogan fluid={slogan.img.childImageSharp.fluid}>
        {ReactHtmlParser(slogan.content)}
      </Slogan>
      <HostSection fluid={hostSection.bg.childImageSharp.fluid}>
        <div className="content">
          {ReactHtmlParser(hostSection.title)}
          {ReactHtmlParser(hostSection.body)}
        </div>
        <div className="columns">
          {hostSection.columns.map((i, k) => {
            return (
              <a href={i.link} target="_blank" rel="noopener noreferrer">
                {ReactHtmlParser(i.title)}
                <Img fluid={i.img.childImageSharp.fluid}></Img>
              </a>
            );
          })}
        </div>
      </HostSection>
      <Form
        type="extended"
        data={forms.specialties}
        title={form.title}
        language={language}
        img={form.background}
      ></Form>

      <Boxes {...procedures}></Boxes>
    </div>
  );
};

const ForeignPatientsPage = ({ data }) => {
  const {
    templateKey,
    language,
    hero,
    altHeading,
    slogan,
    redirects,
    hostSection,
    heading,
    form,
    procedures,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <ForeignPatientsPageTemplate
        {...{
          templateKey,
          language,
          heading,
          slogan,
          hero,
          form,
          hostSection,
          altHeading,
          procedures,
        }}
      />
    </Layout>
  );
};

export default ForeignPatientsPage;

export const pageQuery = graphql`
  query ForeignPatientsPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "home-page" } }
    ) {
      frontmatter {
        language
        title
        redirects
        hero {
          background {
            scaleOnReveal
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [1600], quality: 90) {
                  ...GatsbyImageSharpFluid
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
        form {
          title
          background {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        hostSection {
          bg {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          body
          columns {
            title
            link
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [450], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        slogan {
          content
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        heading {
          content
        }
        altHeading {
          title
          columns {
            head
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

        procedures {
          title
          procedures {
            title
            to
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [550], quality: 90) {
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
