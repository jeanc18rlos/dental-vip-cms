import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const HomeParallax = props => {
  const {
    width,
    height,
    desktopHome,
    landscapeHome,
    portraitHome,
    portraitXlHome,
    stadisticsHome,
    dpr,
  } = props
  return (
    <BackgroundImage
      Tag="div"
      id="Home-Parallax-statistics"
      fluid={stadisticsHome}
      backgroundColor="#fff"
    >
      <img src={desktopHome} alt="default" id="Home-Parallax-layer-desktop" />

      <img
        src={landscapeHome}
        alt="default"
        id="Home-Parallax-layer-landscape"
      />

      <img src={portraitHome} alt="default" id="Home-Parallax-layer-portrait" />

      <img
        src={portraitXlHome}
        alt="default"
        id="Home-Parallax-layer-portrait-xl"
      />
    </BackgroundImage>
  )
}

export default HomeParallax
HomeParallax.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  desktopHome: PropTypes.string.isRequired,
  landscapeHome: PropTypes.string.isRequired,
  portraitHome: PropTypes.string.isRequired,
  portraitXlHome: PropTypes.string.isRequired,
  stadisticsHome: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  dpr: PropTypes.number.isRequired,
}
