import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import Heading from "../components/heading";
import Img from "gatsby-image";
import SEO from "../components/seo";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";
import Parallax from "../components/parallax";
import Paragraph from "../components/asideParagrah";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
import Form from "../components/form";
import ReactHtmlParser from "react-html-parser";
import Content, { HTMLContent } from "../components/content";

const Article = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "reverse" ? "row-reverse" : "row"};
  padding: ${rhythm(4)} 5vw ${rhythm(2)};
  justify-content: space-evenly;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  a {
    background: #222;
    padding: 14px 25px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: solid 1px white;
    margin-bottom: ${rhythm(1)} !important;
    display: block !important;
    width: fit-content;

    transition: all 0.25s linear;
    &:hover {
      background: white;
      color: #333;
    }
  }
  article {
    width: fit-content;
    display: flex;
    max-width: 800px;
    flex-direction: column;
    ${(props) =>
      props.direction === "reverse"
        ? "padding-left: 5vw;"
        : "padding-right: 5vw;"};

    height: fit-content;
    ul {
      margin-left: 0;
      li {
        padding-left: ${rhythm(2)};
        position: relative;
        list-style: none;
        i {
          position: absolute;
          left: 0;
          top: 0.1em;
          color: white;
          background: #91c508;
          padding: 5px;
          border-radius: 50%;
        }
      }
    }
    .icon {
      width: 100%;
      margin-bottom: ${rhythm(1)} !important;
      &:before,
      :after {
        background-size: contain !important;
        background-position: left !important;
      }
    }
  }
  p {
    @media screen and (min-width: 768px) {
      width: 80%;
    }
  }
  .image {
    width: 100%;
    max-width: 420px;
    max-height: 420px;
    border-radius: 50%;
    display: flex;
    border: 1px solid #4c4c4c !important;
    margin-bottom: ${rhythm(2)};
    div {
      padding-bottom: 100% !important;
    }
  }
`;

const Slogan = styled(BackgroundImage)`
  padding: ${rhythm(4)} calc(5vw) ${rhythm(3)};
  color: white;
  text-align: center;
  a {
    background: #222;
    padding: 14px 25px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: solid 1px white;
    margin-top: ${rhythm(2)} !important;
    margin-bottom: ${rhythm(1)} !important;
    display: block !important;
    width: fit-content;
    margin: auto;
    transition: all 0.25s linear;
    &:hover {
      background: white;
      color: #333;
    }
  }
  h2 {
    font-weight: 400;
  }
`;

const ListGallery = styled.section`
  padding: ${rhythm(4)} 5vw ${rhythm(3)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: ${rhythm(2)};
    text-align: center;
  }
  .subtitle {
    text-align: center;
    margin-bottom: ${rhythm(3)};
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    .item {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-basis: 50%;
      padding: ${rhythm(1)} 0;
      &:nth-of-type(even) {
        &.List {
          flex-direction: row !important;
        }
        flex-direction: row-reverse;
      }
      &.List {
        flex-basis: 100% !important;
        align-items: center;
        justify-content: space-evenly;
        border-bottom: solid 35px #ededed;
        margin-bottom: ${rhythm(1)};
        @media screen and (max-width: 1024px) {
          flex-direction: column !important;
        }
        .image {
          margin: 0;
        }
        .content {
          display: flex;
          flex-direction: row;
          text-align: left;
          padding-left: 5vw;
          justify-content: center;
          align-items: center;
          height: fit-content;
          max-width: 800px;
          @media screen and (max-width: 1024px) {
            flex-direction: column;
            max-width: 500px;
            span {
              align-self: flex-start;
            }
          }
        }

        p,
        h2 {
          text-align: left;
        }
        span {
          font-size: 45px;
          margin-right: 45px;
          justify-self: flex-start;
        }
      }
      &.columnb {
        flex-direction: column !important;
        p {
          color: #555 !important;
          text-align: left !important;
          width: 100% !important;
          max-width: 500px !important;
          margin-left: 5vw;
          @media screen and (max-width: 1024px) {
            margin-left: 10vw;
          }
        }
      }
      .image.List {
        border: solid #999;
        max-width: 500px !important;
        width: 100% !important;
      }
      .image.columnb {
        width: 90% !important;
        max-width: 500px !important;
        margin: 0 auto !important;
        padding: 0 !important;
        @media screen and (max-width: 1024px) {
          width: 100% !important;
        }
      }

      @media screen and (max-width: 1250px) {
        flex-direction: column-reverse !important;
        &.List {
          flex-direction: row !important;
        }
        .image {
          padding-right: 50px;
          &:nth-of-type(even) {
            padding-left: 50px;
          }
        }
      }
      @media screen and (max-width: 1024px) {
        &.List {
          flex-direction: column !important;
        }
        &.columnb {
          flex-direction: column !important;
          .content {
            height: fit-content;
            padding-bottom: 0;
            p {
              margin-bottom: 0 !important;
            }
          }
        }
        flex-direction: row !important;
        flex-basis: 100% !important;
        &:nth-of-type(even) {
          flex-direction: row-reverse !important;
          &.List {
            flex-direction: column !important;
          }
          &.columnb {
            flex-direction: column !important;
          }
        }
        .image {
          padding-right: 0;
          &:nth-of-type(even) {
            padding-left: 0;
          }
        }
      }
      @media screen and (max-width: 768px) {
        flex-direction: column-reverse !important;
        flex-basis: 100% !important;

        &:nth-of-type(even) {
          flex-direction: column-reverse !important;
        }
        .image {
          padding-right: 0;
          &:nth-of-type(even) {
            padding-left: 0;
          }
        }
      }
      &:nth-of-type(even) {
        flex-direction: row-reverse;
      }
      .step-icon {
        ${scale(1)};
        font-family: Bebas Neue Bold;
        color: #91c508;
        border: solid #91c508;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 0;
        padding-top: 4px;
        margin-bottom: ${rhythm(2)};
      }
      .image {
        display: flex;
        width: 100%;
        max-width: 450px;
        margin: auto;
        img {
          object-fit: contain !important;
        }
      }
      .icon-check.circle {
        background: #91c508;
        border-radius: 50%;
        padding: 5px;
        color: white;
        margin-left: -40px;
        margin-right: 14px;
      }
      .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        padding: 25px;
        align-items: center;
        text-align: center;
      }
    }
  }
`;

const StyledContent = styled.section`
  .icon-number {
    font-size: 45px !important;
    color: #91c508;
    font-family: Bebas Neue Bold !important;
    height: 50px;
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 0;
    border: solid;
    border-radius: 50%;
    padding: 8px 0 0 2px;
    margin-right: 5vw;
  }
  .dv-div-text {
    margin-bottom: 0;
    color: #333;
    font-family: Bebas Neue Bold;
    ${scale(0.25)}
  }
  p {
    color: #555;
  }
  p,
  h2 {
    width: 100%;
  }
  .container {
    padding: ${rhythm(4)} 5vw ${rhythm(3)};
    text-align: center;
  }
  .item.full {
    img {
      width: 100%;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    &.alt {
      img {
        margin-top: ${rhythm(2)};
        margin-top: ${rhythm(2)};
      }
      i {
        font-size: 50px;
      }
      p {
        width: fit-content;
      }
      .par {
        flex-direction: row;
        i {
          margin-right: 5vw;
        }
        p {
          display: flex;
        }
      }
      @media screen and (max-width: 1024px) {
        flex-direction: column !important;
        img {
          max-width: 450px;
        }
      }
    }
    &.fb {
      flex-flow: wrap;
      flex-direction: row !important;
      justify-content: center;
      .item.np {
        padding: 15px !important;
        margin: auto !important;
      }
    }
    .item.np {
      padding: 0 !important;
      &.image {
        p {
          padding: 0 2.5vw !important;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column !important;
      .item {
        padding: 0 !important;
      }
    }
    .item {
      display: flex;
      width: 100%;
      flex-direction: column;
      &.fb-2 {
        flex-basis: 50%;
      }
      &.fb-3 {
        flex-basis: 33.33%;
      }
      &.fb-4 {
        max-width: 350px;
        flex-basis: 25%;
        @media screen and (max-width: 768px) {
          flex-basis: 50%;
        }
        @media screen and (max-width: 580px) {
          flex-basis: 100%;
        }
      }
      &.fb-1 {
        flex-basis: 100%;
      }
      &.center {
        h2,
        p {
          margin-left: auto;
          margin-right: auto;
        }
      }
      &.left {
        p,
        h2 {
          text-align: left !important;
        }
      }
      &.right {
        p,
        h2 {
          text-align: right;
          @media screen and (max-width: 768px) {
            text-align: left !important;
          }
        }
      }
      &:nth-of-type(odd) {
        padding-right: 2.5vw;
      }
      &:nth-of-type(even) {
        padding-left: 2.5vw;
      }
      p {
        text-align: center;
      }
      h2 {
        text-align: center;
      }
    }
  }
`;

const CustomBlock = styled.section`
  .column {
    padding: ${rhythm(4)} calc(5vw - 15px) ${rhythm(3)};
    display: flex;
    flex-direction: column;
    .icon {
      font-size: 45px;
      color: #91c508;
      font-family: Bebas Neue Bold;
      height: 50px;
      width: 50px;
      min-width: 50px;
      max-width: 50px;
      justify-content: center;
      display: flex;
      align-items: center;
      line-height: 0;
      border: solid;
      border-radius: 50%;
      padding: 8px 0 0 2px;
      margin-right: 5vw;
    }
    p {
      text-align: left;
    }
    h2 {
      text-align: center;
    }
    .block {
      flex-basis: 50%;
      padding: 15px !important;
      margin: auto !important;
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-flow: wrap;

      .block-header,
      .block-body,
      .block-footer {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        p {
          margin-top: ${rhythm(1)};
        }
      }
      .block-body {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        width: 100%;
        .gatsby-image-wrapper {
          display: flex;
          width: 100%;
          flex-basis: 100%;
          @media screen and (min-width: 768px) {
            flex-basis: 50% !important;
            img {
              object-fit: contain !important;
            }
            &:nth-of-type(odd) {
              padding-right: 2.5vw !important;
              img {
                object-position: center left !important;
              }
            }
            &:nth-of-type(even) {
              padding-left: 2.5vw !important;
              img {
                object-position: center right !important;
              }
            }
          }
        }
      }
      .image {
        margin-top: ${rhythm(1)};
        margin-bottom: ${rhythm(2)};
      }
    }
  }
  .row {
    padding: ${rhythm(4)} calc(5vw - 15px) ${rhythm(3)};
    display: flex;
    flex-direction: row;

    flex-flow: wrap;
    justify-content: center;
    p {
      text-align: center;
    }
    h2 {
      text-align: center;
    }
    .block {
      flex-basis: 50%;
      padding: 15px !important;
      margin: auto !important;
      display: flex;
      width: 100%;
      flex-direction: column;
      @media screen and (min-width: 768px) {
        &:nth-of-type(odd) {
          padding-right: 2.5vw !important;
        }
        &:nth-of-type(even) {
          padding-left: 2.5vw !important;
        }
      }
      .image {
        margin-top: ${rhythm(1)};
        margin-bottom: ${rhythm(2)};
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column !important;
    .block {
      padding: 0 !important;
      flex-basis: 100% !important;
    }
  }
`;
const ListContainer = (props) => {
  const { content, blocks, type, position } = props;
  return (
    <ListGallery>
      {type === "Column" || (type === "columnb" && ReactHtmlParser(content))}
      <div className="wrapper">
        {blocks.map((i, k) => {
          return (
            <div key={k} className={`item ${type}`}>
              <Img
                className={`image ${type}`}
                fluid={i.img.childImageSharp.fluid}
              ></Img>
              <div className={`content ${type}`}>
                {type === "Column" && (
                  <span className="step-icon">{i.number}</span>
                )}
                {ReactHtmlParser(i.title)}
              </div>
            </div>
          );
        })}
      </div>
    </ListGallery>
  );
};

export const AnnexPageTemplate = ({
  language,
  content,
  contentComponent,
  articleBlock,
  hero,
  heading,
  parallax,
  procedures,
  slogan,
  customBlocks,
  listGallery,
  anexes,
  form,

  forms,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <Hero className="center single half" {...hero}></Hero>
      <Heading color="#ededed" {...heading} />
      {anexes.display && (
        <Paragraph enforce={anexes.enforce} contained={true} {...anexes} />
      )}
      {listGallery.display && listGallery.position === "top" && (
        <ListContainer {...listGallery}></ListContainer>
      )}
      {customBlocks.display && (
        <CustomBlock>
          <div className={customBlocks.type}>
            {customBlocks.blocks.map((i, k) => {
              return (
                <div key={k} className="block">
                  {i.header.display && (
                    <div className="block-header">
                      {ReactHtmlParser(i.header.content)}
                    </div>
                  )}

                  {i.body.display && (
                    <div className="block-body">
                      {i.body.images.map((item, key) => {
                        return (
                          <Img key={key}
                            className="image"
                            fluid={item.src.childImageSharp.fluid}
                          ></Img>
                        );
                      })}
                    </div>
                  )}
                  {i.footer.display && (
                    <div className="block-footer">
                      {ReactHtmlParser(i.footer.content)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CustomBlock>
      )}
      <Slogan fluid={slogan.img.childImageSharp.fluid}>
        {ReactHtmlParser(slogan.content)}
      </Slogan>
      <StyledContent>
        <PostContent content={content} />
      </StyledContent>

      {listGallery.display && listGallery.position === "bottom" && (
        <ListContainer {...listGallery}></ListContainer>
      )}
      <Parallax nocontent={true} img={parallax.img}></Parallax>
      <Article direction={articleBlock.direction}>
        <article>
          {ReactHtmlParser(articleBlock.content.body)}
          {articleBlock.content.image.display && (
            <BackgroundImage
              style={{
                paddingBottom: articleBlock.content.image.size,
              }}
              fluid={articleBlock.content.image.src.childImageSharp.fluid}
              className="icon"
            />
          )}
          {articleBlock.content.link.display && (
            <Link to={articleBlock.content.link.to}>
              {articleBlock.content.link.placeholder}
            </Link>
          )}
        </article>
        <Img
          className="image"
          fluid={articleBlock.img.childImageSharp.fluid}
        ></Img>
      </Article>
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

const AnnexPage = ({ data }) => {
  const {
    templateKey,
    customBlocks,
    language,
    title,
    redirects,
    listGallery,
    hero,
    heading,
    parallax,
    procedures,
    anexes,
    slogan,
    articleBlock,
    description,
    keywords,
    form,
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
      <AnnexPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        {...{
          templateKey,
          listGallery,
          language,
          articleBlock,
          title,
          customBlocks,
          redirects,
          hero,
          heading,
          parallax,
          anexes,
          slogan,
          procedures,
          form,
        }}
      />
    </Layout>
  );
};

export default AnnexPage;

export const pageQuery = graphql`
  query AnnexPage($id: String!) {
    markdownRemark(
      id: { eq: $id }

      frontmatter: { templateKey: { eq: "annex-page" } }
    ) {
      html
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
        customBlocks {
          display
          type
          blocks {
            header {
              display
              content
            }
            body {
              display
              images {
                src {
                  childImageSharp {
                    fluid(quality: 100, srcSetBreakpoints: [1500]) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            footer {
              display
              content
            }
          }
        }
        articleBlock {
          direction
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [800], quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          content {
            body
            image {
              display
              size
              src {
                childImageSharp {
                  fluid(srcSetBreakpoints: [800], quality: 100) {
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
        listGallery {
          display
          position
          type
          content
          blocks {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [800], quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            number
            title
          }
        }
        anexes {
          enforce
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
        slogan {
          content
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        parallax {
          portraitPosition
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
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
