import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout";
import DVhero from "../components/DV-Hero";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import Img from "gatsby-image";
import showdown from "showdown";
import Content, { HTMLContent } from "../components/Content";
const converter = new showdown.Converter();

export const GuaranteesPageTemplate = ({
  language,
  hero,
  data,
  extendedHeading,
  bannerFooter,
  content,
  contentComponent
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      {hero && hero.display && <DVhero {...hero} />}
      <section className={`dv-title-section np-container ${extendedHeading.classname}`}>
        <div className="dv-main-menu">
          <h1
            className="dv-page-title"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(extendedHeading.title)
            }}
          />
          <div className="row">
            <div
              className="col-md-9"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(extendedHeading.content)
              }}
            ></div>
            <div className="col-md-3">
              <Img
                style={{
                  margin: "0 0 0 auto"
                }}
                fluid={extendedHeading.img.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </section>
      <PostContent className="guarantees-content" content={content} />
      <div className="baner-footer row">
        <div
          className="col-md-8"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(bannerFooter.body)
          }}
        ></div>
        <div className="col-md-4">
          <Img fluid={bannerFooter.img.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
};

const AnexedPage = ({ data }) => {
  const {
    templateKey,
    language,
    extendedHeading,
    title,
    bannerFooter,
    redirects,
    hero
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <SetLang link={redirects} language={language} />
      <GuaranteesPageTemplate
        {...{
          templateKey,
          extendedHeading,
          bannerFooter,
          language,
          redirects,
          hero,
          data,
          content: data.markdownRemark.html,
          contentComponent: HTMLContent
        }}
      />
    </Layout>
  );
};

export default AnexedPage;

export const pageQuery = graphql`
  query GuaranteesPageTemplate($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "guarantees" } }
    ) {
      id
      html
      fields {
        slug
      }

      frontmatter {
        language
        title
        redirects
        bannerFooter {
          body
          img {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        hero {
          display
          type
          title
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

        extendedHeading {
          display
          img {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          classname
          title
          content
        }
      }
    }
  }
`;
