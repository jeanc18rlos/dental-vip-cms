import React from 'react'
import PropTypes from 'prop-types'

const PlainParallax = props => {
  const { bg } = props
  return (
    <div
      id="Plain-parallax"
      style={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
      }}
    />
  )
}
export default PlainParallax

PlainParallax.propTypes = {
  bg: PropTypes.string.isRequired,
}
