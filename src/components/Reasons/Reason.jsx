// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
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

Reason.propTypes = {
  img: PropTypes.string.isRequired,
  nameimg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
