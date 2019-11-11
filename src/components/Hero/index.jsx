import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Hero = props => {
  const { alt, title, subTitle, additionalText, background, type } = props

  return (
    <>
      {(() => {
        switch (type) {
          case 'Animated-text-Hero':
            return (
              <AnimatedTextHero
                {...{ alt, title, subTitle, additionalText, background }}
              />
            )
          default:
            return <PlainTextHero {...{ alt, title, background }} />
        }
      })()}
    </>
  )
}

export default Hero

const AnimatedTextHero = ({
  alt,
  title,
  subTitle,
  additionalText,
  background,
}) => {
  const [scale, setScale] = useState(false)
  useEffect(() => {
    setScale(true)
  }, [])
  return (
    <section className="dv-hero dv-animated-hero dv-text-hero">
      <Img
        loading="eager"
        alt={alt}
        className={`${scale &&
          'dv-scale'} ${' dv-hero-image-scale dv-hero-image'}`}
        fluid={background.childImageSharp.fluid}
      />

      <main className="dv-text-hero-body" style={{ overflow: 'hidden' }}>
        <Fade delay={1000} right>
          <h2 className="framed bold">{title}</h2>
        </Fade>
        <Fade delay={1000} right>
          <h6>{subTitle}</h6>
        </Fade>
        <Fade delay={1000} right>
          <h1>{additionalText}</h1>
        </Fade>
      </main>
    </section>
  )
}

const PlainTextHero = ({ alt, title, background }) => {
  return (
    <section className="dv-hero dv-animated-hero dv-text-hero">
      <Img
        loading="eager"
        alt={alt}
        className={`${'dv-hero-image'}`}
        fluid={background.childImageSharp.fluid}
      />

      <main className="dv-text-hero-body" style={{ overflow: 'hidden' }}>
        <h1>{title}</h1>
        <div className="dv-arrow-banner">
          <i className="icon-angle-down" />
        </div>
      </main>
    </section>
  )
}

Hero.defaultProps = {
  type: 'Plain-text-hero',
  alt: false,
  title: false,
  subTitle: false,
  additionalText: false,
  background: false,
}

Hero.propTypes = {
  type: PropTypes.string,
  alt: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  subTitle: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  additionalText: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  background: PropTypes.oneOfType([
    PropTypes.exact({
      childImageSharp: PropTypes.exact({
        fluid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    }),
    PropTypes.bool,
  ]),
}

AnimatedTextHero.defaultProps = Hero.defaultProps
AnimatedTextHero.propTypes = Hero.propTypes
