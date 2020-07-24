import React from "react";
import { intersection } from "lodash";
import { graphql, Link, navigate } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layout";
import Content, { HTMLContent } from "../components/content";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import Sidebar from "../components/sidebar";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SharePanel = ({ slug }) => {
  return (
    <div className="share-panel">
      <FacebookShareButton
        url={`http://dentalvip-prod.web.app${slug}`}
        style={{ marginRight: "10px" }}
      >
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        url={`http://dentalvip-prod.web.app${slug}`}
        style={{ marginRight: "10px" }}
      >
        <TwitterIcon size={36} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`http://dentalvip-prod.web.app${slug}`}
        style={{ marginRight: "10px" }}
      >
        <LinkedinIcon size={36} round={true} />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={`http://dentalvip-prod.web.app${slug}`}
        style={{ marginRight: "10px" }}
      >
        <WhatsappIcon size={36} round={true} />
      </WhatsappShareButton>
      <EmailShareButton url={`http://dentalvip-prod.web.app${slug}`}>
        <EmailIcon size={36} round={true} />
      </EmailShareButton>
    </div>
  );
};

const StyledPage = styled.section`
  * {
    color: #555;
  }
  .dv-author-desc {
    padding: 15px 30px;
    display: flex;
    flex-direction: row;
    border: solid 1px black;
  }
  .dv-desc {
    padding-left: 35px;
    .dv-author-name {
      font-family: Bebas Neue Bold;
      ${scale(0.3)}
    }
    hr {
      max-width: 100% !important;
      background: black !important;
      height: 1px !important;
      margin-top: 0 !important;
      margin-bottom: ${rhythm(1)} !important;
    }
    p {
      color: #999;
    }
  }
  .dv-autor-img {
    position: relative;
    overflow: hidden;
    flex-basis: 25%;
    border: none !important;
    margin: 0 !important;
    box-shadow: none !important;
    border-radius: 50%;
    max-width: 150px;
    max-height: 145px;
    min-width: 100px;
    min-height: 100px;
  }
  .post-wrapper {
    flex-basis: 75%;
    padding-right: 5vw;
    hr {
      max-width: 70%;
      margin: auto;
      margin-bottom: ${rhythm(2)};
      margin-top: ${rhythm(2)};
      height: 2px;
      background: #333;
    }
    .gatsby-image-wrapper {
      border-bottom: 5px solid #91c508;
      box-shadow: 0 5px 0px black;
      margin-bottom: ${rhythm(2)};
    }
    .share-panel {
      margin-bottom: ${rhythm(1)};
    }
    .post-info {
      ${scale(-0.3)};
      margin-bottom: ${rhythm(2)};
      display: flex;
    }
  }
  .sidebar {
    flex-basis: 25%;

    a {
      word-break: break-word;
      color: #333;
    }
  }
  padding: ${rhythm(4)} 0 ${rhythm(4)};
  h1 {
    font-family: "Bebas Neue Bold";
  }
  h1,
  h2,
  h3 {
    color: #333;

    margin-bottom: ${rhythm(1)};
  }
  a {
    word-break: break-all;
    color: #91c508;
  }
  .post-content {
    .row {
      display: flex;
      padding: 0 5vw;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        .post-wrapper {
          padding-right: 0;
        }
        .sidebar {
          margin-top: ${rhythm(2)};
        }
        .dv-desc {
          padding-left: 0;
        }
        .dv-author-desc {
          flex-direction: column;
          align-items: center;
          .gatsby-image-wrapper {
            margin-bottom: ${rhythm(1)} !important;
          }
        }
      }
    }
  }
`;

export const BlogPostPageTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
  slug,
  language,
  latestPosts,
  categories,
  structure,
  featuredimage,
  author,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <StyledPage>
      <div className="post-content">
        <div className="row">
          <div className="post-wrapper">
            <h1>{title}</h1>
            <span className="post-info">
              {language === "es" ? "por" : "by"} {author.name} | {date} | {tags}
            </span>

            <Img critical={true} fluid={featuredimage.childImageSharp.fluid} alt={"images"} />

            <div className="content">
              <SharePanel slug={slug} />
              <PostContent content={content} />
            </div>
            <SharePanel slug={slug} />
            <div className="dv-author-desc">
              <Img critical={true}
                className="dv-autor-img"
                fluid={author.image.childImageSharp.fluid}
                alt={"images"}
              />

              <div className="dv-desc">
                <p className="dv-author-name">
                  {author.title}
                  {author.name}
                </p>
                <hr />
                <p>{author.description}</p>
              </div>
            </div>
            <div className="featured">
              {latestPosts &&
                latestPosts.edges.filter((i) => {
                  return (
                    intersection(i.node.frontmatter.tags, tags).length > 0 &&
                    i.node.frontmatter.title !== title
                  );
                }).length > 0 && (
                  <h2 className=" featured-title">
                    {language === "es"
                      ? "Posts que podrían interesarle:"
                      : "Posts you may like:"}
                  </h2>
                )}
              {latestPosts
                ? latestPosts.edges
                    .filter((i) => {
                      return (
                        intersection(i.node.frontmatter.tags, tags).length >
                          0 && i.node.frontmatter.title !== title
                      );
                    })
                    .map((i, k) => {
                      return (
                        <div key={k} className="featured-post">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: i.node.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${i.node.frontmatter.title}`,
                            }}
                          />
                          <p className="dv-title">
                            <Link to={i.node.fields.slug}>
                              {i.node.frontmatter.title}
                            </Link>
                          </p>
                        </div>
                      );
                    })
                : null}
            </div>
          </div>
          <Sidebar
            {...{
              language,
              structure,
              posts: latestPosts,
              categories,
              changePagetEX: () => {
                navigate("/");
              },
            }}
          ></Sidebar>
        </div>
      </div>
    </StyledPage>
  );
};

const BlogPostPage = ({ data }) => {
  const { markdownRemark: post } = data;

  const {
    redirects,
    language,
    date,
    tags,
    featuredimage,
    title,
    description,
    keywords,
    author,
  } = post.frontmatter;

  return (
    <Layout>
      <SEO
        title={title}
        lang={language}
        description={description}
        keywords={keywords}
      />
      <SetLang language={language} link={redirects} />
      <BlogPostPageTemplate
        slug={post.fields.slug}
        home={data.home}
        author={author}
        latestPosts={data.latestPosts}
        categories={data.categories}
        content={post.html}
        structure={data.home.frontmatter.structure}
        redirects={redirects}
        language={language}
        date={date}
        contentComponent={HTMLContent}
        description={description}
        tags={tags}
        featuredimage={featuredimage}
        title={title}
      />
    </Layout>
  );
};

export default BlogPostPage;

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $language: String) {
    home: markdownRemark(
      frontmatter: { title: { eq: "Blog" }, language: { eq: $language } }
    ) {
      frontmatter {
        language
        structure {
          aside {
            search {
              search
              placeholder
            }
            latestPosts
            categories
            subscribe
            form {
              message
              name
              email
              send
            }
          }
          post {
            by
            readMore
          }
        }
      }
    }
    latestPosts: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    categories: allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { language: { eq: $language } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        keywords
        tags
        redirects
        language
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        author {
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
          title
          description
        }
      }
    }
  }
`;
