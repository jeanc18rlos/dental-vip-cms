import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Banner = props => {
  const [scale, setScale] = useState(false)
  const { image,
    heading,
    subHeading,
    slogan } = props
  useEffect(() => {
    setScale(true)
  }, [])
  return (
    <div className="home-banner div-header-margin-top">
      {
        image.childImageSharp ? <Img
        loading="eager"
        id="inner-hp"
        className={`${scale && 'scale'} ${' banner-image-scale'}`}
        fluid={image.childImageSharp.fluid}
      /> : <img src={image}id="inner-hp"
      className={`${scale && 'scale'} ${' banner-image-scale'}`} />
      }
      
      <div className="banner-caption-titles" style={{ overflow: 'hidden' }}>
        <Fade delay={1000} right>
          <h1
            className={`${' tp-caption tlt tp-resizeme'}`}
            id="slide-1-layer-1"
          >
            {heading}
          </h1>
        </Fade>
        <Fade delay={1000} right>
          <div
            className={` ${' tp-caption tlt tp-resizeme'}`}
            id="slide-1-layer-2"
          >
            {subHeading}
          </div>
        </Fade>
        <Fade delay={1000} right>
          <div
            className={`${' tp-caption tlt tp-resizeme'}`}
            id="slide-1-layer-3"
          >
            {slogan}
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Banner

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  additionalText: PropTypes.string.isRequired,
  hero: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
}
