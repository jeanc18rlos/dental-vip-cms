import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Content, { HTMLContent } from "../components/content";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import { Container } from "../Elements/Container";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import ReactHtmlParser from "react-html-parser";

const StyledBanner = styled.div`
  padding: ${rhythm(4)} 5vw ${rhythm(3)};
  background: #999;
  color: white;
  p {
    font-weight: 300;
    ${scale(1)};
  }
  aside {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 5vw;
    align-items: center;
    &:nth-of-type(odd) {
      padding-left: 0;
      justify-self: flex-start;
    }

    justify-self: flex-end;
  }
  span {
    i {
      font-size: 11rem;
      line-height: 8.8rem
      
    }
  }
  .banner {
    aside {
      p {
        line-height: 1 !important;
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      aside {
        padding: 0;
        p {
          line-height: 1 !important;
        }
      }
      span {
        margin-bottom: ${rhythm(2)};
      }
    }
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const StyledPage = styled.section`
  .row {
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
      .icon {
        display: flex;
        font-size: 150px;
        padding-left: 0 !important;
        margin-bottom: ${rhythm(2)};
      }
    }
    .icon {
      font-size: 150px;
      padding-left: 5vw;
    }
  }
  .percentaje {
    margin-bottom: ${rhythm(2)};
    width: 100%;
    height: 50px;
    color: #333;
    .title {
      float: left;
      padding-left: 15px;
      padding-top: 10px;
      font-weight: 500;
      max-width: 200px;
      color: #333;
      text-transform: capitalize;
    }
    .time {
      padding-top: 10px;
      float: right;
      color: #555;
    }
    .progress-bar {
      width: 100%;
      background-color: #e0e0e0;
      padding: 3px;
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
      .progress-bar-fill {
        display: block;
        height: 7px;
        background-color: #91c508;
        border-radius: 3px;
        -webkit-transition: width 0.5s ease-in-out;
        transition: width 0.5s ease-in-out;
      }
    }
  }
  .full {
    width: 100%;
  }
  p {
    color: #555;
  }
  padding: ${rhythm(4)} 0 ${rhythm(2)};
  h1 {
    margin-bottom: ${rhythm(3)};
    &.heading {
      margin-bottom: ${rhythm(2)};
    }
  }
  h1,
  h2,
  h3 {
    font-weight: 300;
    text-align: center;
    color: #333;
  }
  p.message {
    font-weight: 300;
    color: #333;
    ${scale(0.8)};
    margin: auto;
    padding: ${rhythm(1)};
    margin-top: ${rhythm(2)} !important;
    margin-bottom: ${rhythm(3)} !important;
    background: #ededed;
    border: solid 1px #91c508;
    text-align: center;
    max-width: 800px;
  }
  .message {
    margin: auto;
    padding: ${rhythm(1)};
    margin-top: ${rhythm(3)} !important;
    margin-bottom: ${rhythm(3)} !important;
    border: solid 1px #91c508;
    text-align: center;
    max-width: 800px;
    h1 {
      margin-bottom: ${rhythm(2)} !important;
      margin-top: ${rhythm(1)} !important;
    }
    ul {
      text-align: left;
    }
    .big {
      font-weight: 300;
      color: #333;
      ${scale(0.8)};
      margin-bottom: 0;
    }
    &.red {
      border: solid 1px red;
    }
  }
  .left {
    text-align: left;
  }
  .section-title {
    margin-bottom: ${rhythm(1)} !important;
  }
  p {
    &.small {
      ${scale(-0.15)}
      text-align: center;
    }
    &.heading {
      margin-bottom: ${rhythm(2)} !important;
    }
  }
  ul.check-list {
    margin-bottom: ${rhythm(2)} !important;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    li {
      position: relative;
      padding-left: 40px;

      .circle {
        position: absolute;
        left: 0px;
        top: 3px;
        padding: 3px;
        color: #90c508;
      }
    }
  }
  ul.checklist {
    margin-bottom: ${rhythm(2)} !important;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    li {
      position: relative;
      padding-left: 40px;

      .circle {
        position: absolute;
        left: 0px;
        top: 3px;
        padding: 3px;
        color: white;
        background: #90c508;
        border-radius: 50%;
      }
    }
  }
  ul.options {
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: ${rhythm(3)};
    @media screen and (max-width: 480px) {
      margin-bottom: ${rhythm(2)};
      flex-direction: column;
      li {
        margin-bottom: ${rhythm(2)};
      }
    }
    li {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: flex;
      span {
        font-size: 85px;
      }
      h2 {
        color: #91c508;
      }
      h3 {
        font-weight: 400;
      }
    }
  }
  a {
    color: #91c508;
  }
`;

export const PaymentOptionsPageTemplate = ({
  hero,
  banner,
  boxes,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <Hero className="center single" {...hero}></Hero>
      <StyledPage>
        <Container>
          <PostContent className="full" content={content} />
        </Container>
      </StyledPage>
      {boxes.display && (
        <Boxes externalLink={true} internal={true} procedures={boxes.boxes} />
      )}
      <StyledBanner>{ReactHtmlParser(banner)}</StyledBanner>
    </div>
  );
};

const PaymentOptionsPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    description,
    keywords,
    redirects,
    banner,
    boxes,
    hero,
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
      <PaymentOptionsPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        {...{
          templateKey,
          language,
          title,
          redirects,
          hero,
          banner,
          boxes,
        }}
      />
    </Layout>
  );
};

export default PaymentOptionsPage;

export const pageQuery = graphql`
  query paymentOptions($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        keywords
        tags
        redirects
        language
        banner
        boxes {
          display
          boxes {
            title
            to
            img {
              childImageSharp {
                fluid(maxWidth: 550, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        hero {
          background {
            scaleOnReveal
            img {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 75) {
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
      }
    }
  }
`;
