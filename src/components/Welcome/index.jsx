import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Welcome = props => {
  const { slogan, partners, subTitle, body, logo } = props
  return (
    <section className="dv-welcome">
      <div className="dv-welcome-message container-fluid dv-main-menu text-center">
        <Img id="inner-hp" className="logo" alt="DentalVip Logo" fluid={logo} />

        <h2 className="dv-home-title">{slogan}</h2>
        <hr className="dv-home" />
        {body}
      </div>
      <div className="dv-welcome-logos text-center">
        {partners.map((partner, index) => (
          <Img
            key={`index${index + 2}`}
            className="image-responsive center-block"
            alt={partner.name}
            fluid={partner.image}
          />
        ))}
      </div>
      <h2 className="dv-home-title text-center">{subTitle}</h2>
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
