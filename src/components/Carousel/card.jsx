import React from 'react'
import classnames from 'classnames'
import { isMobile } from 'react-device-detect'
import Img from 'gatsby-image'
import showdown from 'showdown'
const converter = new showdown.Converter()
const type = 'gridGallery';
const Card = props => {
  const {
    link,
    image,
    activeCard,
    action,
    setActiveCard,
    resetActiveCard,
    
    title,
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
        'gallery-card col-xs-12 col-sm-6 col-md-6 col-lg-4'
      )}
    >
      <div
        className={classnames(
          'gallery-ob',
          activeCard === index && 'hover'
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
            
          </div>
        </div>
      </div>
      
      { image.childImageSharp ? <Img
        alt="dentalvip"
        fluid={image.childImageSharp.fluid}
      /> : <img
      alt="dentalvip"
     
      src={image}
    />}
    <p dangerouslySetInnerHTML={{
            __html: converter.makeHtml(title)
          }}></p>
    
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
        'gallery-card col-xs-12  col-sm-6 col-md-6 col-lg-4'
      )}
    >
      <div
        className={classnames(
          'gallery-ob',
          activeCard === index && 'hover'
        )}
      >
        <div
          role="button"
          tabIndex={0}
          className={classnames(
            'close-feature',
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
            {action && type === 'gridGallery' && (
              <button type="button" className="gallery-btn">
                <i className="icon-search" />
              </button>
            )}
          </div>
        </a>
      </div>
      { image.childImageSharp ? <Img
        alt="dentalvip"
        fluid={image.childImageSharp.fluid}
      /> : <img
      alt="dentalvip"
      src={image}
    />}
    <p dangerouslySetInnerHTML={{
            __html: converter.makeHtml(title)
          }}></p>
    </div>
  )
}

export default Card
