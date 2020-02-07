// Dependencies
import React from 'react'
import Img from 'gatsby-image'

const Quote = props => {
  const { img, content, nameclass, color } = props

  return (
    <section style={{background: color}} id="quote-cp" className={`${nameclass}  ${' quote-cp'} `}>
      <div className="container-fluid dv-main-menu text-center dv-content-quote">
        <div className="dv-comilla">
          <span />
          <p className="content">{content}</p>

          <Img fluid={img.pt.childImageSharp.fluid} alt="shield" className="img-escudo portrait" />

          <Img fluid={img.ld.childImageSharp.fluid} alt="shield" className="img-escudo landscape" />
        </div>
      </div>
    </section>
  )
}

export default Quote

