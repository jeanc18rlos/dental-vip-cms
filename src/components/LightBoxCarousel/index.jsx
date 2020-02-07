import React from 'react'
import ImageGallery from 'react-image-gallery'

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
