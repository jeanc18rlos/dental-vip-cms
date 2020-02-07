// Dependencies
import React from 'react'
import Img from 'gatsby-image'

const Reason = props => {
  const { img, nameimg, title, paragraph, type } = props

  return (
    <div
      className={`reason-child-content ${type === 1 ? 'dv-pd-r' : 'dv-pd-l'}`}
    >
      <Img className="img-reason" fluid={img.childImageSharp.fluid} alt={nameimg} />

      <div className="data-reason">
        <p className="dv-title-reason">{title}</p>
        <p className="dv-par-reason">{paragraph}</p>
      </div>
    </div>
  )
}

export default Reason
