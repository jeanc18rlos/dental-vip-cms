import React from 'react'
import classnames from 'classnames'
import { isMobile } from 'react-device-detect'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Card = props => {
  const {
    link,
    bg,
    body,
    title,
    activeCard,
    action,
    setActiveCard,
    resetActiveCard,
    isMasonry,
    width,
    placeholder,
    type,
    openPopupbox,
    index,
  } = props
  return isMobile ? (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        return activeCard !== index && setActiveCard(index)
      }}
      onKeyDown={() => {
        return activeCard !== index && setActiveCard(index)
      }}
      className={classnames(
        isMasonry && 'masonry-gallery',
        'gallery-card col-xs-12 col-sm-6 col-md-6 col-lg-4'
      )}
    >
      <div
        className={classnames(
          'gallery-ob',
          activeCard === index && 'hover',
          isMasonry && 'masonry-gallery'
        )}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={e => {
            e.preventDefault()
            return setActiveCard(index)
          }}
          onKeyDown={e => {
            e.preventDefault()
            return setActiveCard(index)
          }}
          className={classnames(
            'close-feature',
            isMasonry && 'masonry-gallery',
            activeCard === index && 'hover'
          )}
        >
          <div className="wrap">
            <i className="icon-plus" />
          </div>
        </div>
        <div className="mobile-wrap">
          <div
            className={classnames(
              'animated',
              type === 'gridGallery' && 'gridGallery',
              activeCard === index && 'zoomIn'
            )}
          >
            <h3>{title}</h3>
            {body}
            {action && type === 'singleGallery' ? (
              <button
                type="button"
                className="gallery-btn text-button"
                onClick={e => {
                  e.preventDefault()
                  setActiveCard(index)
                  return openPopupbox(0)
                }}
              >
                {placeholder}
              </button>
            ) : (
              ''
            )}
            {action && type === 'gridGallery' ? (
              <button
                type="button"
                className="gallery-btn"
                onClick={e => {
                  e.preventDefault()
                  setActiveCard(index)
                  return openPopupbox(index)
                }}
              >
                <i className="icon-search" />
              </button>
            ) : (
              ''
            )}
            {!action && isMobile && type === 'singleGallery' && (
              <a href={link} type="button" className="gallery-btn">
                {' '}
                {placeholder}
              </a>
            )}
          </div>
        </div>
      </div>
      <Img
        alt="dentalvip"
        className={classnames(isMasonry && 'masonry-gallery')}
        fluid={bg}
      />
    </div>
  ) : (
    <div
      onMouseOver={() => {
        return setActiveCard(index)
      }}
      onFocus={() => {
        return null
      }}
      onMouseLeave={() => {
        return resetActiveCard()
      }}
      role="button"
      tabIndex={0}
      className={classnames(
        isMasonry && 'masonry-gallery',
        'gallery-card col-xs-12  col-sm-6 col-md-6 col-lg-4'
      )}
    >
      <div
        className={classnames(
          'gallery-ob',
          activeCard === index && 'hover',
          isMasonry && 'masonry-gallery'
        )}
      >
        <div
          role="button"
          tabIndex={0}
          className={classnames(
            'close-feature',
            isMasonry && 'masonry-gallery',
            activeCard === index && isMobile && 'hover',
            activeCard === index && !isMobile && 'hidden'
          )}
        >
          <div className="wrap">
            <i className="icon-plus" />
          </div>
        </div>
        <a
          onClick={e => {
            if (!link || link === '#') {
              e.preventDefault()
            }
          }}
          {...(action &&
            type === 'singleGallery' && {
              onClick: e => {
                e.preventDefault()
                return openPopupbox(0)
              },
            })}
          {...(action &&
            type === 'gridGallery' && {
              onClick: e => {
                e.preventDefault()
                return openPopupbox(index)
              },
            })}
          href={link}
        >
          <div
            className={classnames(
              'animated',
              type === 'gridGallery' && 'gridGallery',
              activeCard === index && 'zoomIn'
            )}
          >
            <h3>{title}</h3>
            {body}
            {action && type === 'gridGallery' && (
              <button type="button" className="gallery-btn">
                <i className="icon-search" />
              </button>
            )}
          </div>
        </a>
      </div>
      <Img
        alt="dentalvip"
        className={classnames(isMasonry && 'masonry-gallery')}
        fluid={bg}
      />
    </div>
  )
}

export default Card
Card.propTypes = {
  link: PropTypes.string.isRequired,
  bg: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  body: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  activeCard: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  setActiveCard: PropTypes.func.isRequired,
  resetActiveCard: PropTypes.func.isRequired,
  isMasonry: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  width: PropTypes.number.isRequired,

  type: PropTypes.string.isRequired,
  openPopupbox: PropTypes.func.isRequired,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
