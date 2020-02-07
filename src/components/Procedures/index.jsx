import React from 'react'
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
                img={i.img}
                info={i.info}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Procedures
