// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const Parallax = props => {
  const { title, classIcon, img, dataVisible } = props

  const TitleParallax = () => {
    if (dataVisible) {
      return (
        <div className="dv-title-parallax col-xs-12">
          <div className="row">
            <div className="dv-banner-title-parallax">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  const IconParallax = () => {
    if (dataVisible) {
      return (
        <div className={` dv-arrow-banner ${dataVisible ? '' : 'notVisible'} `}>
          <i className={` ${classIcon}`} />
        </div>
      )
    }
    return null
  }

  const Title = TitleParallax()
  const Icon = IconParallax()

  return (
    <div id="parallax-cp" className="dv-parallax-section-banner">
      <BackgroundImage
        loading="eager"
        Tag="div"
        className="dv-parallax-banner"
        fluid={img}
        backgroundColor="#fff"
      >
        {Title}
        {Icon}
      </BackgroundImage>
    </div>
  )
}

export default Parallax
Parallax.propTypes = {
  title: PropTypes.string.isRequired,
  classIcon: PropTypes.string.isRequired,
  img: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  dataVisible: PropTypes.bool.isRequired,
}
