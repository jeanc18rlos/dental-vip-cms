import React from 'react'
import Img from 'gatsby-image'
import showdown from 'showdown'

const converter = new showdown.Converter()
const Welcome = props => {
  const { heading, partners, location, main, logo } = props
  return (
    <section className="dv-welcome">
      <div className="dv-welcome-message container-fluid dv-main-menu text-center">
        {
         logo && logo.childImageSharp ? <Img id="inner-hp" className="logo" alt="DentalVip Logo" fluid={logo.childImageSharp.fluid} /> :
          <img id="inner-hp" className="logo" alt="DentalVip Logo" src={logo} />
        }

        <h2 className="dv-home-title">{heading}</h2>
        <hr className="dv-home" />
        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(main) }} />
      </div>
      <div className="dv-welcome-logos text-center">
        {partners && partners.map((partner, index) => (
          
          partner.image.childImageSharp ? <Img
            key={`index${index + 2}`}
            className="image-responsive center-block"
            alt={partner.alt}
            fluid={partner.image.childImageSharp.fluid}
          /> : <img
          key={`index${index + 2}`}
          className="image-responsive center-block"
          alt={partner.alt}
          src={partner.image}
        /> 
        ))}
      </div>
      <h2 className="dv-home-title text-center">{location}</h2>
    </section>
  )
}

export default Welcome
