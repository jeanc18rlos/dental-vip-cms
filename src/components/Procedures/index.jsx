import React from 'react'
import PropTypes from 'prop-types'
import Card from './card'

const Procedures = props => {
  const { procedures, title } = props
  return (
    <section className="dv-procedures ">
      <div className="container-fluid">
        <h1 className="dv-page-titles text-center">{title}</h1>

        <div
          className="procedures-block row "
          style={{ justifyContent: 'center' }}
        >
          {procedures.map((i, k) => {
            const index = k
            return (
              <Card
                length={procedures.length}
                key={`item-${index}`}
                to={i.to}
                title={i.title}
                img={{...i.img}}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Procedures
Procedures.propTypes = {
  title: PropTypes.string.isRequired,
  procedures: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ).isRequired,
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
}
