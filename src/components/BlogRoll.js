import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Pagination from '../components/Pagination'
class BlogRoll extends React.Component {
  constructor(props) {
    super(props);

    // an example array of items to be paged
    const exampleItems = this.props.data.posts.edges

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.posts

    return [
      < div className="col-md-9" >
        <div className="row col-md-12 columns is-multiline">
          {
            this.state.pageOfItems.map(({ node: post }) => (
              <div className="col-md-6" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.author} | {post.frontmatter.title}
                      </Link>
                      <br />
                      <span className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      {data.home.frontmatter.structure.post.readMore}
                  </Link>
                  </p>
                </article>
              </div>
            ))}


        </div>
        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
      </div >, <div className="col-xs-12 col-md-3 sidebar dv-sidebar">
        <h4>{data.home.frontmatter.structure.aside.search.search}</h4>
        <hr />
        <div className="dv-search-area-blog">
          <form method="get" action="https://dentalvip.com.ve/" id="form4">
            <input type="text" name="s" placeholder={`${data.home.frontmatter.structure.aside.search.placeholder}`} />
            <button type="submit" form="form4" value="Submit" className="dv-btn-submit-search-sd">
              <i id="dv-search-icon-spr" className="icon-search" />
            </button>
          </form>
        </div>
        <h4 className="dv-latest-post">{data.home.frontmatter.structure.aside.latestPosts}</h4>
        <hr />
        <div className="dv-recent-content">
          <img src="https://dentalvip.com.ve/wp-content/uploads/2019/02/POR-QUE-NO-A-LOS-PRECIOS-Y-PRESUPUESTOS-VIRTUALES.jpg" />
          <p className="dv-title"><a href="https://dentalvip.com.ve/por-que-no-a-los-precios-y-presupuestos-virtuales/">¡Por Qué NO a los Precios y Presupuestos Virtuales!</a></p>
        </div>
        <div className="dv-recent-content">
          <img src="https://dentalvip.com.ve/wp-content/uploads/2019/02/QUE-ES-LA-ODONTOLOGIA-BASADA-EN-LA-EVIDENCIA.jpg" />
          <p className="dv-title"><a href="https://dentalvip.com.ve/que-es-la-odontologia-basada-en-la-evidencia/">¿Qué es la Odontología Basada en la Evidencia?</a></p>
        </div>
        <div className="dv-recent-content">
          <img src="https://dentalvip.com.ve/wp-content/uploads/2019/02/CUANTO-PUEDE-DURAR-UN-DIENTE-DESPUES-DE-UNA-ENDODONCIA.jpg" />
          <p className="dv-title"><a href="https://dentalvip.com.ve/cuantos-anos-puede-durar-un-diente-despues-de-una-endodoncia/">¿Cuántos Años Puede Durar un Diente Después de una Endodoncia?</a></p>
        </div>
        <div className="dv-recent-content">
          <img src="https://dentalvip.com.ve/wp-content/uploads/2019/02/CUIDADOS-DESPUES-DE-UN-BLANQUEAMIENTO-DENTAL.jpg" />
          <p className="dv-title"><a href="https://dentalvip.com.ve/cuidados-despues-de-un-blanqueamiento-dental/">Cuidados Después de un Blanqueamiento Dental</a></p>
        </div>
        <h4 className="dv-latest-post dv-lp-35">{data.home.frontmatter.structure.aside.categories}</h4>
        <hr />
        <li className="cat-item cat-item-16"><a href="https://dentalvip.com.ve/category/blanqueamiento-dental/">BLANQUEAMIENTO DENTAL</a>
        </li>
        <li className="cat-item cat-item-12"><a href="https://dentalvip.com.ve/category/carillas-de-porcelana/">CARILLAS DE PORCELANA</a>
        </li>
        <li className="cat-item cat-item-18"><a href="https://dentalvip.com.ve/category/diagnostico-y-planificacion/">DIAGNÓSTICO Y PLANIFICACIÓN</a>
        </li>
        <li className="cat-item cat-item-10"><a href="https://dentalvip.com.ve/category/diseno-de-sonrisa/">DISEÑO DE SONRISA</a>
        </li>
        <li className="cat-item cat-item-14"><a href="https://dentalvip.com.ve/category/higiene-y-prevencion/">HIGIENE Y PREVENCIÓN</a>
        </li>
        <li className="cat-item cat-item-9"><a href="https://dentalvip.com.ve/category/implantes-dentales/">IMPLANTES DENTALES</a>
        </li>
        <li className="cat-item cat-item-17"><a href="https://dentalvip.com.ve/category/opinion-y-actualidad/">OPINIÓN Y ACTUALIDAD</a>
        </li>
        <li className="cat-item cat-item-13"><a href="https://dentalvip.com.ve/category/ortodoncia/">ORTODONCIA</a>
        </li>
        <li className="cat-item cat-item-11"><a href="https://dentalvip.com.ve/category/protesis-estomatologica/">PRÓTESIS ESTOMATOLÓGICA</a>
        </li>
        <li className="cat-item cat-item-15"><a href="https://dentalvip.com.ve/category/salud-bucodental/">SALUD BUCODENTAL</a>
        </li>
        <h4 className="dv-latest-post dv-latest-post-susc">{data.home.frontmatter.structure.aside.subscribe}</h4>
        <hr />
        <div className="tnp tnp-subscription dv-newsletter-sidebar">
          <img src="https://dentalvip.com.ve/wp-content/themes/DentalVip/assets/vip.jpg" alt="VIP Newsletter" className="icon-news" />
          <h5>{data.home.frontmatter.structure.aside.form.message}</h5>
          <form method="post" action="http://dentalvip.roraimasolutions.com/?na=s" onsubmit="return newsletter_check(this)">
            <input type="hidden" name="nlang" defaultValue />
            <div className="tnp-field tnp-field-firstname"><input className="tnp-firstname" type="text" name="nn" required placeholder={`${data.home.frontmatter.structure.aside.form.name}`} /></div>
            <div className="tnp-field tnp-field-email"><input className="tnp-email" type="email" name="ne" required placeholder={data.home.frontmatter.structure.aside.form.email} /></div>
            <div className="tnp-field tnp-field-button"><input className="tnp-submit" type="submit" defaultValue={`${data.home.frontmatter.structure.aside.form.send}`} />
            </div>
          </form>
        </div>
      </div>


    ]
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogRoll
