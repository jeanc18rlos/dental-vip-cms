import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
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
Welcome.propTypes = {
  logo: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  slogan: PropTypes.string.isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.exact({
      image: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ),
      name: PropTypes.string,
    })
  ).isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
}
