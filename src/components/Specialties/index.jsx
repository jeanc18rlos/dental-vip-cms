import React from 'react'
import Img from 'gatsby-image'

const Specialties = props => {
  const { paragraph, slogan, title, features } = props
  return (
    <section className="dv-home-specialties dv-home-specialties-home">
      <div className="container-fluid dv-main-menu">
        <h1 className="dv-page-titles text-center">{title}</h1>
        <p className="dv-text-testimonial text-center dv-mob-15 dv-mlr-155">
          {paragraph}
          <br />
          <strong>
            <strong>{slogan}</strong>
          </strong>
        </p>
        <div className="row dv-padding-sp">
          {features.map((i, k) => {
            const index = k
            return (
              <div
                key={index}
                className="row-eq-height col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center main-container"
              >
                <a
                  href={i.to}
                  className="col-xs-12 text-center dv-spc-div dv-npl dv-npr "
                >
                  { i.img.childImageSharp
                    ? <Img
                    className="specialties-image"
                    fluid={i.img.childImageSharp.fluid}
                    alt="Endodoncia"
                  />
                  : <img
                  className="specialties-image"
                  src={i.img}
                  alt="Endodoncia"
                />
                  }
                  <h4 className="dv-spc-title">{i.title}</h4>
                  <hr />
                  <p className="dv-spc-desc">{i.description}</p>
                  <i className="icon-plus dv-plus dv-plus-features center-block" />
                  <hr className="dv-plus-hr" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Specialties
