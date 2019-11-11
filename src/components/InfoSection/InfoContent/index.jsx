// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const InfoContent = props => {
  const {
    type,
    titleimage,
    titlecontent,
    contentimage,
    description1,
    description2,
    id,
  } = props

  return (
    <div className="row section-cp">
      <Img
        className={` image ${
          type === '1' ? 'dv-not-image' : 'dv-notmb-image'
        } `}
        fluid={contentimage}
      />
      <Img className="image img-mobile" fluid={contentimage} />
      <div className="dv-content">
        <div className={` dv-info-middle  ${id === 0 ? 'dv-border-top' : ''} `}>
          <div className="dv-align-center">
            <div className="dv-content-heading">
              <Img fluid={titleimage} alt="default" />
              <h3>{titlecontent}</h3>
              <div className="clearifx" />
            </div>
            <p className="light-font">{description1}</p>
            <p className="light-font">{description2}</p>
          </div>
        </div>
      </div>
      <Img
        className={` image ${
          type === '2' ? 'dv-not-image' : 'dv-notmb-image'
        } `}
        fluid={contentimage}
      />
    </div>
  )
}

export default InfoContent

InfoContent.propTypes = {
  type: PropTypes.string.isRequired,
  titleimage: PropTypes.string.isRequired,
  titlecontent: PropTypes.string.isRequired,
  contentimage: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
