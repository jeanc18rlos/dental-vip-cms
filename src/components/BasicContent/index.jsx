// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

const BasicContent = props => {
  const { classname, title, content, smallcontent } = props

  return (
    <section id="BasicContent-cp" className={classname}>
      <div className="container-fluid dv-main-menu">
        <h1 className="dv-page-titles text-center">{title}</h1>
        <p className="dv-subtitle text-center">{content}</p>
        <p
          className={` dv-subtitle-small  ${
            smallcontent === undefined || smallcontent === '' ? 'smallnot' : ''
          }`}
        >
          {smallcontent}
        </p>
      </div>
    </section>
  )
}

export default BasicContent

BasicContent.propTypes = {
  title: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  smallcontent: PropTypes.string.isRequired,
}
