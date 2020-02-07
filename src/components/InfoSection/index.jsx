// Dependencies
import React from 'react'
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
                  content={section.content}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default InfoSection
