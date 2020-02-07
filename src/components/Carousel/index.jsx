import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "gatsby-image";
import classnames from "classnames";
import { isMobile } from 'react-device-detect'
import Card from './card'
import LightBoxCarousel from "../LightBoxCarousel";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { useStaticQuery, graphql } from "gatsby";

const settings = {
  dots: true,
  infinite: true,
  vertical: false,
  autoplay: false,
  autoplaySpeed: 2000,
  touchThreshold: 1000,
  verticalSwiping: false
};

const altSettings = {
  dots: true,
  infinite: true,
  vertical: false,
  autoplay: false,
  autoplaySpeed: 2000,
  touchThreshold: 1000,
  verticalSwiping: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};
const Carousel = props => {
  const { title, items,  width, type, images, placeholder  } = props;
  const [activeCard, setActiveCard] = useState(false);
  const data = useStaticQuery(graphql`
    query RotateImage2 {
      file(relativePath: { eq: "icons-rotateDevice.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const openPopupbox = indexImg => {
    const content = (
      <div>
        <button
          type="button"
          onClick={PopupboxManager.close}
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            lineHeight: 0,
            background: "none",
            border: "none",
            color: "white",
            fontSize: "large",
            padding: ".5em 1em",
            zIndex: 10000
          }}
        >
          <div className="wrap">
            <i className="icon-times" />
          </div>
        </button>
        <div
          className="gallery-indicators"
          style={{
            position: "absolute",
            top: "11%",
            textAlign: "center",
            width: "100%",
            padding: "3%"
          }}
        >
          {
            <Img fluid={data.file.childImageSharp.fluid} alt="rotate" style={{ maxWidth: '90px', width: '100%', margin: 'auto' }}/>
          }
        </div>

        {images && <LightBoxCarousel index={indexImg} images={images} />}
        <div
          className="gallery-indicators"
          style={{
            color: "#fff",
            position: "absolute",
            textAlign: "center",
            textTransform: "uppercase",
            bottom: "15%",
            left: "14%",
            width: "72%"
          }}
        >
          {placeholder && placeholder}
        </div>
      </div>
    );

    PopupboxManager.open({ content });
  };
  return (
    <section
      className={classnames(type === "responsive" && "responsive")}
      style={{ overflow: "hidden" }}
      id="testimonial-carousel"
    >
      <h1 className="dv-page-titles text-center">{title}</h1>
      <PopupboxContainer />
      {type === "responsive" ? (
        <Slider {...altSettings}>
          
          {items.map((i, index) => {
            const key = index;
            return (
              <Card
                index={key}
                type={type}
                icon='icon-search'
                action={true}
                openPopupbox={openPopupbox}
                activeCard={activeCard}
                resetActiveCard={() => {
                  setActiveCard(false);
                }}
              
                width={width}
                setActiveCard={title => {
                  return title === activeCard && isMobile
                    ? setActiveCard(false)
                    : setActiveCard(title);
                }}
                key={`item-${index}`}
                {...i}
              />
            );
          })}
        </Slider>
      ) : (
        <Slider {...settings}>
          {items.map((item, index) => {
            const key = index;
            return (
              <div key={`${key}+carousel-item`} className="item">
                <div className="col-xs-12 col-sm-12 col-md-2 text-center">
                  {item.img.childImageSharp ? (
                    <Img
                      fluid={item.img.childImageSharp.fluid}
                      alt={item.name}
                      className="dv-testimonial-photo"
                    />
                  ) : (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="dv-testimonial-photo"
                    />
                  )}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10">
                  <p className="dv-text-testimonial font-ranga-testimonials">
                    {item.testimonial}
                  </p>
                  <p className="dv-testimonial-author text-right">
                    {item.name}
                  </p>
                  <p className="dv-testimonial-position text-right">
                    {item.position}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </section>
  );
};

export default Carousel;
