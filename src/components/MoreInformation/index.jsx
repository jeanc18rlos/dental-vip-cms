// Dependencies
import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const MoreInformation = props => {
  const { moreinfo, classname, titlebutton } = props
  const { paragraphs, imgparallax, type } = moreinfo

  return (
    <BackgroundImage
      tag="section"
      id="Moreinformation"
      className={classname}
      fluid={imgparallax}
    >
      <div className="dv-cointainer-moreinfo">
        <h1 className="dv-title-moreinfo">{moreinfo.title}</h1>
        <p
          className="dv-subtitle-moreinfo"
          style={{ display: `${type === '2' ? 'none' : 'block'}` }}
        >
          {moreinfo.subtitle}
        </p>
        {paragraphs &&
          paragraphs.map((paragraph, key) => {
            if (type === '1') {
              const index = key
              return (
                <p key={index} className="dv-paragraph-moreinfo">
                  {paragraph.paragraph}
                </p>
              )
            }
            return null
          })}
        <div className="dv-content-icoparagraph">
          {paragraphs &&
            paragraphs.map((paragraph, key) => {
              const index = key
              if (type === '2') {
                return (
                  <div
                    key={index}
                    className={`div-content-allparagraph ${
                      key !== 0 ? 'dv-mg-tp' : ' '
                    } `}
                  >
                    <i className="icon-check" />
                    <p className="dv-paragraph-type2">{paragraph.paragraph}</p>
                  </div>
                )
              }
              return null
            })}
        </div>
        <p
          className={` dv-otherinfo1-moreinfo ${
            type === '2' ? 'padding-type2' : ''
          }`}
        >
          {moreinfo.otherinfo1}
        </p>
        <p className="dv-otherinfo2-moreinfo">{moreinfo.otherinfo2}</p>
        <div className="btn btn-moreinfo">
          <a
            href="/"
            onClick={e => {
              e.preventDefault()
            }}
          >
            {titlebutton}
          </a>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default MoreInformation
