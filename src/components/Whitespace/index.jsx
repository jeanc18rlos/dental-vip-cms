import React from 'react'
import PropTypes from 'prop-types'

const WhiteSpace = props => {
  const { bgColor } = props
  return <div className="whiteSpace" style={{ background: bgColor }} />
}
export default WhiteSpace

WhiteSpace.propTypes = {
  bgColor: PropTypes.string.isRequired,
}
