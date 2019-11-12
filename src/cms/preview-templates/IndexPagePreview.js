import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        hero={data.hero}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        quote={data.quote}
        welcome={data.welcome}
        specialties={data.specialties}
        description={data.description}
        testimonial={data.testimonial}
        procedures={data.procedures}
        parallax={data.parallax}
        elements={data.elements}
        lightbox={data.lightbox}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
