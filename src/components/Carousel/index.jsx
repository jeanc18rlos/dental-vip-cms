import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const settings = {
  dots: true,
  infinite: true,
  vertical: false,
  autoplay: false,
  autoplaySpeed: 2000,
  touchThreshold: 1000,
  verticalSwiping: false,
}
const Carousel = props => {
  const { title, items } = props
  return (
    <section style={{ overflow: 'hidden' }} id="testimonial-carousel">
      <h1 className="dv-page-titles text-center">{title}</h1>
      <Slider {...settings}>
        {items.map((item, index) => {
          const key = index
          return (
            <div key={`${key}+carousel-item`} className="item">
              <div className="col-xs-12 col-sm-12 col-md-2 text-center">
                {
                  item.img && item.img.childImageSharp ? <Img
                  fluid={item.img.childImageSharp.fluid}
                  alt={item.name}
                  className="dv-testimonial-photo"
                /> : <img
                src={item.img}
                alt={item.name}
                className="dv-testimonial-photo"
              />
                }
                
              </div>
              <div className="col-xs-12 col-sm-12 col-md-10">
                <p className="dv-text-testimonial font-ranga-testimonials">
                  {item.testimonial}
                </p>
                <p className="dv-testimonial-author text-right">{item.name}</p>
                <p className="dv-testimonial-position text-right">
                  {item.position}
                </p>
              </div>
            </div>
          )
        })}
      </Slider>
    </section>
  )
}

export default Carousel

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ),
      testimonial: PropTypes.string,
      position: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}
