// Dependencies
import React from 'react'
import Img from 'gatsby-image'
import showdown from "showdown";
const converter = new showdown.Converter();

const InfoContent = props => {
  const {
    type,
    titleimage,
    titlecontent,
    contentimage,
    content,
    id,
  } = props

  return (
    <div className="row section-cp">
      <Img
        className={` image ${
          type === 1 ? 'dv-not-image' : 'dv-notmb-image'
        } `}
        fluid={contentimage.childImageSharp.fluid}
      />
      <Img className="image img-mobile" fluid={contentimage.childImageSharp.fluid} />
      <div className="dv-content">
        <div className={` dv-info-middle  ${id === 0 ? 'dv-border-top' : ''} `}>
          <div className="dv-align-center">
            <div className="dv-content-heading">
              <Img fluid={titleimage.childImageSharp.fluid} alt="default" />
              <h3>{titlecontent}</h3>
              <div className="clearifx" />
            </div>
            <div dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(content)
                }}></div>
            
          </div>
        </div>
      </div>
      <Img
        className={` image ${
          type === 2 ? 'dv-not-image' : 'dv-notmb-image'
        } `}
        fluid={contentimage.childImageSharp.fluid}
      />
    </div>
  )
}

export default InfoContent
