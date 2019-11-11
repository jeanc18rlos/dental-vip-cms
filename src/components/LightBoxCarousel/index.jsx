import React from 'react'
import ImageGallery from 'react-image-gallery'
import PropTypes from 'prop-types'

const LightBoxCarousel = props => {
  const { index, images } = props
  return (
    <ImageGallery
      startIndex={index}
      showFullscreenButton={false}
      showIndex
      lazyLoad
      showThumbnails={false}
      showPlayButton={false}
      items={images}
    />
  )
}

export default LightBoxCarousel

LightBoxCarousel.propTypes = {
  index: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      renderItem: PropTypes.func,
      renderThumb: PropTypes.func,
    })
  ).isRequired,
}
