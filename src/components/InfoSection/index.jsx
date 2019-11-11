// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import InfoContent from './InfoContent'

const InfoSection = props => {
  const { sections, nameClass } = props

  return (
    <section id="InfoSection" className={nameClass}>
      <div className="container-fluid">
        <div className="dv-profesionals-section">
          {sections &&
            sections.map((section, k) => {
              const id = k
              return (
                <InfoContent
                  id={id}
                  key={`info-content-${id}`}
                  type={section.type}
                  titleimage={section.titleimage}
                  titlecontent={section.titlecontent}
                  contentimage={section.contentimage}
                  description1={section.descriptionp1}
                  description2={section.descriptionp2}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default InfoSection
InfoSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string,
      titleimage: PropTypes.string,
      titlecontent: PropTypes.string,
      contentimg: PropTypes.string,
      description1: PropTypes.string,
      description2: PropTypes.string,
    })
  ).isRequired,
  nameClass: PropTypes.string.isRequired,
}
