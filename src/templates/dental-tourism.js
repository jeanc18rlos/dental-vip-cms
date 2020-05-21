import React from "react";
import Layout from "../layout";
import SetLang from "../components/setLang";
import Boxes from "../components/boxes";
import Hero from "../components/hero";
import Heading from "../components/heading";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import Parallax from "../components/parallax";
import Paragraph from "../components/asideParagrah";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
import Form from "../components/form";
import ReactHtmlParser from "react-html-parser";

const Block = styled.section`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse !important;
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
      background: #ededed;
    }
  }
  .paragraph {
    background: #ededed;
    .map {
      max-width: 400px
      
    }
    .title.big {
      h1 {
        ${scale(1.25)}
      }
    }
  }
`;
const Routes = styled.section`
  .message {
    border: 1px solid #333;
    padding: 3vw;
    text-align: center;
    max-width: 800px;
    margin: ${rhythm(1)} auto;
  }
  padding-bottom: ${rhythm(3)};
  padding-top: ${rhythm(4)};
  .icon-travel-wrapper {
    font-size: 115px;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-bottom: ${rhythm(3)};
  }
  h1 {
    font-weight: 300;
    text-align: center;
    margin-bottom: ${rhythm(3)};
  }
  .departures {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5vw;
    max-width: 1600px;
    margin: auto;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
    .departure {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-basis: 50%;
      flex-direction: row;
      margin-bottom: ${rhythm(2)};
      @media screen and (max-width: 1200px) {
        flex-basis: 100%;
      }
      .departures-logo {
        border-bottom: 2px solid #ededed;
      }
      .content {
        padding-left: 15%;
        padding-right: 15%;
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid #ededed;
        .visa {
          font-weight: bold;
          color: #333;
          margin-top: ${rhythm(1)};
        }
        p {
          color: #333;
          text-align: left;
        }
        .logo {
          font-size: 45px;
          margin-right: 20px;
        }
        .time {
          margin-right: 25% !important;
        }
        .time,
        .cost {
          display: flex;
          color: #333;
          margin-right: 0px;
          flex-flow: row-wrap;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        .visa {
          text-align: center;
        }
        .details {
          display: flex;
          flex-flow: row-wrap;
          text-align: left;
          @media screen and (max-width: 768px) {
            flex-direction: column;
          }
        }
      }
      .flag-icon {
        font-size: 60px;
      }
    }
  }
`;
const Gallery = styled.section`
  display: flex;
  background-color: #9a9a9a;
  flex-flow: row wrap;

  justify-content: center;
  width: 100%;
  margin: auto;
  padding: ${rhythm(4)} 5vw ${rhythm(4)};
  padding-bottom: 1.6rem;
  flex-direction: row;
  color: white;
  i.counter {
    font-style: normal;
    background: #222;
    display: flex;
    width: 50px;
    font-size: 40px;
    margin-top: -20px;
    margin-left: -20px;
    padding-top: 38px !important;
    padding: 30px 34px;

    height: 50px;
    position: absolute;
    border-radius: 50%;
    z-index: 2;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: Bebas Neue Bold;
  }
  h1 {
    font-weight: 300;
    margin-bottom: ${rhythm(3)};
    width: 100%;
    text-align: center;
  }
  h3 {
    text-align: center;
    font-weight: 500;
  }
  .step {
    padding: 0 1vw;
    flex-direction: column;
    position: relative;
    margin-bottom: ${rhythm(3)};
    flex-basis: 33.33%;
    max-width: 480px;
    @media screen and (max-width: 1024px) {
      flex-basis: 50% !important;
    }
    @media screen and (max-width: 768px) {
      flex-basis: 100% !important;
    }
  }
  .gatsby-image-wrapper {
    position: relative;
    overflow: hidden;
    height: 100px;
    width: 100%;
    padding-bottom: 60%;
    border-radius: 30px;
  }
`;
const Prices = styled.section`
  display: flex;
  flex-flow: row wrap;
  padding: 0 2.5vw 0;
  margin: auto;
  max-width: 1600px;
  .converter {
    margin: auto;
    margin-bottom: ${rhythm(4)};
  }
  .price {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    width: 100%;
    padding: 0 2.5vw ${rhythm(2)};
    @media screen and (max-width: 768px) {
      flex-basis: 100% !important;
    }

    .title {
      width: 100%;
      background: #91c508;
      font-size: 26px;
      font-weight: 300;
      text-align: center;
      color: #fff;
      margin-bottom: 20px;
      padding: 20px 0;
    }
    .link-row {
      width: 100%;
      margin-bottom: ${rhythm(2)};
      justify-content: center;
      align-items: center;
      display: flex;
      a {
        transition: all 0.25s linear;
        border: 1px solid #000;
        margin-top: 10px;
        padding: 10px 60px;
        color: #333;
        text-decoration: none;
        &:hover {
          background: #222;
          color: white;
          cursor: pointer;
        }
      }
    }
    .price-row {
      width: 100%;
      margin-bottom: 20px;
      background: #ededed;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1vw 45px;
      margin-left: 0;
      margin-right: 0;

      .price {
        color: #91c508;
        font-weight: bold;
        ${scale(0.5)}
        padding: 0 0;
        align-items: flex-end;
        span {
          font-weight: 300;
          ${scale(-0.2)}
          width: fit-content;
          color: #555;
          text-align: right;
          max-width: 115px;
        }
      }
      p {
        font-weight: bold;
        color: #555;
        ${scale(0.12)}
        margin: 0;
      }
    }
    .icon-header {
      width: 100%;
      margin-bottom: 20px;
      background: #222;
      padding: 29px 0;
      text-align: center;
      i {
        background: black;
        color: white;
        font-size: 35px;
        border-radius: 50%;
        padding: 15px;
      }
    }
  }
`;

export const DentalTourismPageTemplate = ({
  templateKey,
  language,
  title,
  blocksDescription,
  routes,
  redirects,
  gallerySteps,
  hero,
  heading,
  parallax,
  procedures,
  anexes,
  form,
  prices,
  forms,
}) => {
  return (
    <div>
      <Hero className="center single half" {...hero}></Hero>
      <Heading color="white" {...heading} />
      <Prices>
        {prices.rows.map((i, k) => {
          return (
            <div className="price">
              <div className="title">{i.title}</div>
              <span class="icon-header">
                <i class="icon-instagram"></i>
              </span>
              {i.rows.map((i, k) => {
                return (
                  <div class="price-row">
                    <span class="procedure">
                      <p>{ReactHtmlParser(i.procedure)}</p>
                    </span>
                    <span class="price">
                      {i.price}
                      <br></br>
                      <span> {i.currency}</span>
                    </span>
                  </div>
                );
              })}

              <div class="link-row">
                <Link to={i.link.to} className="price-link">
                  {i.link.title}
                </Link>
              </div>
            </div>
          );
        })}
        <div class="converter">
          <div class="title">{ReactHtmlParser(prices.footer.title)}</div>
          <a href={`${prices.footer.to}`}>
            <Img
              fluid={prices.footer.image.childImageSharp.fluid}
              class="converter-img"
            ></Img>
          </a>
        </div>
      </Prices>
      <Parallax {...parallax}></Parallax>
      <Routes>
        {ReactHtmlParser(routes.title)}

        <span className="icon-travel-wrapper">
          <i class="icon-instagram"></i>
        </span>

        <div className="departures">
          {routes.departures.map((i, k) => {
            return (
              <div className="  departure">
                <div className=" departures-logo">
                  <span className={`flag-icon flag-icon-${i.flag}`}></span>
                </div>
                <div className="content">
                  <p>
                    <b>{i.from}</b>
                  </p>
                  <div className="details">
                    <div className="time">
                      <span className="logo ">
                        <i className="icon-instagram"></i>
                      </span>
                      <span>{i.time}</span>
                    </div>
                    <div className="cost">
                      <span className="logo">
                        <i className="icon-instagram"></i>
                      </span>
                      <span>{i.cost}</span>
                    </div>
                  </div>

                  <p className=" visa">{i.visa}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div class="message">{routes.footer}</div>
      </Routes>

      <Gallery>
        {ReactHtmlParser(gallerySteps.title)}
        {gallerySteps.steps.map((i, k) => {
          return (
            <div class="step">
              {ReactHtmlParser(i.title)}
              <span>
                <i className="counter">{k + 1}</i>
                <Img fluid={i.image.childImageSharp.fluid}></Img>
              </span>
            </div>
          );
        })}
      </Gallery>
      <Paragraph contained={true} {...anexes} />

      <Form
        type="extended"
        data={forms.specialties}
        title={form.title}
        language={language}
        img={form.background}
      ></Form>
      <Block>
        <div className=" paragraph">
          {ReactHtmlParser(blocksDescription.sections.left.content)}
          <span class="map">
            <Img
              fluid={blocksDescription.sections.left.image.childImageSharp.fluid}
            ></Img>
          </span>
        </div>
        <div className=" list">
          {blocksDescription.sections.right.map((i, k) => {
            return <div className="item">{ReactHtmlParser(i.content)}</div>;
          })}
        </div>
      </Block>

      <Boxes {...procedures}></Boxes>
    </div>
  );
};

const DentalTourismPage = ({ data }) => {
  const {
    templateKey,
    language,
    title,
    redirects,
    hero,
    gallerySteps,
    heading,
    prices,
    blocksDescription,
    parallax,
    routes,
    procedures,
    anexes,
    form,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SetLang language={language} link={redirects} />
      <DentalTourismPageTemplate
        {...{
          templateKey,
          language,
          title,
          blocksDescription,
          redirects,
          hero,
          heading,
          prices,
          parallax,
          anexes,
          gallerySteps,
          procedures,
          form,
          routes,
        }}
      />
    </Layout>
  );
};

export default DentalTourismPage;

export const pageQuery = graphql`
  query DentalTourismPage($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "dental-tourism" } }
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
                fluid(quality: 100, srcSetBreakpoints: [1500]) {
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
        prices {
          footer {
            image {
              childImageSharp {
                fluid(srcSetBreakpoints: [400], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            to
          }

          rows {
            title
            icon
            rows {
              procedure
              price
              currency
            }
            link {
              title
              to
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
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            right {
              content
            }
          }
        }
        routes {
          title
          image
          icons {
            clock
            currency
          }
          footer
          departures {
            from
            flag
            time
            cost
            visa
          }
        }
        anexes {
          display
          items {
            img {
              childImageSharp {
                fluid(srcSetBreakpoints: [800], quality: 100) {
                  ...GatsbyImageSharpFluid
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
                      ...GatsbyImageSharpFluid
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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        parallax {
          portraitPosition
          img {
            childImageSharp {
              fluid(srcSetBreakpoints: [1500], quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          content
        }
        gallerySteps {
          title
          steps {
            title
            image {
              childImageSharp {
                fluid(srcSetBreakpoints: [550], quality: 100) {
                  ...GatsbyImageSharpFluid
                }
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
