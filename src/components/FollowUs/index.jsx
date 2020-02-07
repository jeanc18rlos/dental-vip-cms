// Depenencies
import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const FollowUs = props => {
  const {
    imgparallax,
    title,
    subtitle,
    icons,
    additionalText,
    nameClass,
  } = props

  return (
    <BackgroundImage id="followUs-cp" className={nameClass} fluid={imgparallax.childImageSharp.fluid}>
      <div className="dv-follow-content1">
        <p className="p1-follow-content1">{title}</p>
        <p className="p2-follow-content1">{subtitle}</p>
      </div>
      <div className="dv-follow-content2">
        {icons.map((i, k) => {
          const index = k
          return (
            <div key={index} className="dv-icons-actions">
              <div className="dv-content-iconactions">
                <a {...i.link} className={`dv-sm-nav dv-sm-nav-${i.nameicon}`}>
                  <i alt={i.alt} className={`${i.icon.class}`} />
                </a>
              </div>
              <h1>{i.nameicon}</h1>
            </div>
          )
        })}
      </div>
      <div className="dv-follow-content3">
        <span>{additionalText}</span>
      </div>
    </BackgroundImage>
  )
}

export default FollowUs
