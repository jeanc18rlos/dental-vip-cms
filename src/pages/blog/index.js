import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../Layout'
import BlogRoll from '../../components/BlogRoll'
import DVhero from "../../components/DV-Hero";
import BasicContent from "../../components/BasicContent";
import SEO from "../../components/seo"
import SetLang from "../../components/setLang"
export default () => {
  return <StaticQuery
    query={graphql`
      query BlogRollQueryes {
        home: markdownRemark(
          frontmatter: {title: { eq: "Blog" }, language: { eq: "es" } }
        ) {
          frontmatter {
            language
            redirects
            title 
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
            hero {
              display
              type
              image {
                childImageSharp {
                  fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              parallax
              title
              indicator
              halfSize
            }
            heading {
              classname
              title
              content
            }
            
          }
        }
        latestPosts: allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          limit: 4
          filter: { frontmatter: { templateKey: { eq: "blog-post" },language: {eq: "es"} } }
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
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        categories: allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { language: { eq: "es" } } }
          ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        posts: allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" },language: {eq: "es"} } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
                author {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  name
                  title
                  description
                }
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Layout>
      <SEO title={data.home.frontmatter.title} />
      <SetLang language={data.home.frontmatter.language} link={'/en/blog/'} />
      {
        data.home.frontmatter.hero && <DVhero {...data.home.frontmatter.hero} />
      }
      {data.home.frontmatter.heading && <BasicContent {...data.home.frontmatter.heading} />}
      <section className="section">

        <div className="container">
          <div className="content row">
            <BlogRoll data={data} count={count} />
          </div>
        </div>
      </section>
    </Layout>}
  />
}

