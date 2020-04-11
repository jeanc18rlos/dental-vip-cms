import React, { useState } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import styled from "styled-components";
import { Container } from "../Elements/Container";
import { rhythm, scale } from "../utils/typography";

const StyledCarousel = styled.section`
  background: #ededed;
  padding: ${rhythm(4)} 5vw ${rhythm(5)};
  .slick-prev,
  .slick-next {
    @media screen and (max-width: 1024px) {
      display: none !important;
    }
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    top: 30%;
    z-index: 1;
  }
  .slick-prev {
    left: -5% !important;

    &::before {
      color: #999;
      content: "\\E901";
      font-family: "icomoon" !important;
      font-size: 75px !important;
      -webkit-font-smoothing: antialiased;
      font-style: normal;
      font-variant: normal;
      font-weight: normal;
      line-height: 1;
      text-transform: none;
    }
  }
  .slick-next {
    right: -5% !important;

    &::before {
      color: #999;
      content: "\\E902";
      float: right;
      font-family: "icomoon" !important;
      font-size: 75px !important;
      font-style: normal;
      font-variant: normal;
      font-weight: normal;
      line-height: 1;
      text-transform: none;
    }
  }
  .item {
    outline: none !important;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    max-width: 1175px;
    margin: auto;
    margin-bottom: ${rhythm(1)};
    @media screen and (min-width: 1024px) {
      padding-left: 3em;
      padding-right: 3em;
    }
    @media screen and (max-width: 768px) {
      align-items: center;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: column;
    }
    p {
      font-family: "Ranga";
      color: #555;
    }
    footer {
      text-align: right;
    }
  }
  .card-photo {
    display: flex;
    width: 100%;
    max-width: 150px;
    margin-right: ${rhythm(2)};
    margin-bottom: ${rhythm(1)};
    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
  }
  .card-author {
    ${scale(0.12)};
    font-family: "Bebas Neue Bold" !important;
    margin-bottom: 0;
  }
  .card-position {
    ${scale(0)};
    font-family: "Roboto" !important;
    font-weight: 300;
  }
  h1 {
    font-weight: 300;
    color: #333;
    text-align: center;
    margin-bottom: ${rhythm(2)};
  }
  p {
    ${scale(0.75)}
  }
`;

const settings = {
  dots: true,
  infinite: true,
  vertical: false,
  autoplay: false,
  autoplaySpeed: 2000,
  touchThreshold: 1000,
  verticalSwiping: false
};

const Carousel = props => {
  const { title, items, width, type, images, placeholder } = props;
  const [activeCard, setActiveCard] = useState(false);
  return (
    <StyledCarousel style={{ overflow: "hidden" }}>
      <h1>{title}</h1>
      {/** <PopupboxContainer /> */}
      {type === "responsive" ? (
        {
          /*
            <Slider {...altSettings}>
          {items.map((i, index) => {
            const key = index;
            return (
              <Card
                index={key}
                type={type}
                icon="icon-search"
                action={true}
                openPopupbox={openPopupbox}
                activeCard={activeCard}
                resetActiveCard={() => {
                  setActiveCard(false);
                }}
                width={width}
                setActiveCard={(title) => {
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
     */
        }
      ) : (
        <Slider {...settings}>
          {items.map((item, index) => {
            const key = index;
            return (
              <div key={`${key}-carousel-item`} className="item">
                {item.img.childImageSharp && (
                  <Img
                    fluid={item.img.childImageSharp.fluid}
                    alt={item.name}
                    className="card-photo"
                  />
                )}
                <div className="card">
                  <p className="font-ranga">{item.testimonial}</p>
                  <footer>
                    <p className="card-author">{item.name}</p>
                    <p className="card-position">{item.position}</p>
                  </footer>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </StyledCarousel>
  );
};

export default Carousel;
