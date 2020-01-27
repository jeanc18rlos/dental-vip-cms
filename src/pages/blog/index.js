import React from 'react'

import Layout from '../../Layout'
import BlogRoll from '../../components/BlogRoll'
import DVhero from "../../components/DV-Hero";
import BasicContent from "../../components/BasicContent";
const heading = {
  display: true,
        classname:'section-reasons',
        title: "Publicamos para Usted",
        content: '<p class="dv-subtitle text-center">Conscientes de que nuestra labor debe ir siempre mas allá del sillón dental, nos esmeramos en difundir contenido útil y relevante que le genere valor, interés, conocimiento y un alto grado de compromiso con su salud general.</p>'
}
export default class BlogIndexPage extends React.Component {


  render() {
    return (
      <Layout>
        {heading && heading.display && <BasicContent {...heading} />}
        <section className="section">
          <div className="container">
            <div className="content row">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
