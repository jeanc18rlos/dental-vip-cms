// Dependencies
import React from 'react'
import PropTypes, { exact, arrayOf } from 'prop-types'

const InfoImage = props => {
  const { infoImage, classname } = props

  return (
    <section id="Infoimage" className={classname}>
      {InfoImage ? (
        <>
          <div className="dv-bannerimg-infoimage">
            <img src={infoImage.img} alt="paragrah" />
          </div>
          <div className="dv-content-infoimge">
            <div className="dv-content-p">
              <span>{infoImage.paragraphs[0].paragraph1}</span>
              <span style={{ color: 'red' }}>*</span>
              <span>.{infoImage.paragraphs[0].paragraph2}</span>
            </div>
            <div className="dv-content-p">
              <span>{infoImage.paragraphs[1].paragraph1}</span>
            </div>
            <div className="dv-content-p">
              <span>{infoImage.paragraphs[2].paragraph1}</span>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  )
}

export default InfoImage

InfoImage.propTypes = {
  classname: PropTypes.string.isRequired,
  infoImage: PropTypes.objectOf(
    exact({
      img: PropTypes.string,
      paragraphs: arrayOf(PropTypes.objectOf(PropTypes.string)),
    })
  ).isRequired,
}
