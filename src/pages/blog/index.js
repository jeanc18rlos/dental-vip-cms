import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../../Layout'
import BlogRoll from '../../components/BlogRoll'
import DVhero from "../../components/DV-Hero";
import BasicContent from "../../components/BasicContent";
const heading = {
    display: true,
    classname: 'section-reasons',
    title: "Publicamos para Usted",
    content: '<p class="dv-subtitle text-center">Conscientes de que nuestra labor debe ir siempre mas allá del sillón dental, nos esmeramos en difundir contenido útil y relevante que le genere valor, interés, conocimiento y un alto grado de compromiso con su salud general.</p>'
}
export default () => {
   return <StaticQuery
    query={graphql`
      query BlogRollQuery2 {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
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
        {heading && heading.display && <BasicContent {...heading} />}
        <section className="section">
            <div className="container">
                <div className="content row">
                    <BlogRoll data={data} count={count} />}
                </div>
            </div>
        </section>
    </Layout>}
/>
}

