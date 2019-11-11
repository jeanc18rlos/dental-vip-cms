// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Quote = props => {
  const { img, content, nameclass } = props

  return (
    <section id="quote-cp" className={`${nameclass}  ${' quote-cp'} `}>
      <div className="container-fluid dv-main-menu text-center dv-content-quote">
        <div className="dv-comilla">
          <span />
          <p className="content">{content}</p>

          <Img fluid={img.pt} alt="shield" className="img-escudo portrait" />

          <Img fluid={img.ld} alt="shield" className="img-escudo landscape" />
        </div>
      </div>
    </section>
  )
}

export default Quote
Quote.propTypes = {
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  nameclass: PropTypes.string.isRequired,
}
