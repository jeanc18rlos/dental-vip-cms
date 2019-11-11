// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Component child
import Reason from './Reason'

const Reasons = props => {
  const { reasons, classname } = props

  return (
    <section id="Reasons-cp" className={classname}>
      <div className="content-reasons-cp">
        {reasons &&
          reasons.map((reason, key) => {
            const index = key
            return (
              <Reason
                key={index}
                type={reason.type}
                img={reason.img}
                nameimg={reason.nameimge}
                title={reason.title}
                paragraph={reason.paragraph}
              />
            )
          })}
      </div>
    </section>
  )
}

export default Reasons

Reasons.propTypes = {
  classname: PropTypes.string.isRequired,
  reasons: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string,
      img: PropTypes.string,
      nameimg: PropTypes.string,
      title: PropTypes.string,
      paragraph: PropTypes.string,
    })
  ).isRequired,
}
