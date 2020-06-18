import React, { useState } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import rotateDevice from "../assets/icons-rotateDevice.png";
import ImageGallery from "react-image-gallery";
import { useWindowSize } from "../utils/hooks";
import classnames from "classnames";
import ReactHtmlParser from "react-html-parser";
const ModalCarousel = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  button.close {
    font-size: x-large;
    padding: 6px 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    line-height: 0;
    border: none;
    color: white;

    z-index: 1000;
    background: rgba(0, 0, 0, 0.4);
  }
  .image-gallery {
    max-height: 100%;
    width: 100%;
    height: 100%;
    .image-gallery-content {
      max-height: 100%;
      width: 100%;
      height: 100%;
      .image-gallery-slide-wrapper {
        max-height: 100%;
        width: 100%;
        height: 100%;
        .image-gallery-swipe {
          max-height: 100%;
          width: 100%;
          height: 100%;
          .image-gallery-slides {
            max-height: 100%;
            width: 100%;
            height: 100%;
            .image-gallery-slide {
              height: 100%;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              top: 0;
              width: 100%;
              max-height: 100%;
              .lightbox-lazy {
                width: 100%;
                max-height: calc(100vh - 40px);
                img {
                  width: 100% !important;
                  height: 100% !important;
                  object-fit: contain !important;
                  object-position: center center !important;
                }
              }
            }
          }
        }
      }
    }
  }
  .gallery-indicators {
    position: absolute;
    text-align: center;
    width: 100%;
    padding: 3%;
    color: white;
    text-transform: uppercase;
    &.header {
      display: none;
      top: 10%;
      margin-left: 0;
      @media screen and (orientation: portrait) and (max-width: 769px) {
        display: inherit;
      }
    }
    &.footer {
      text-align: center;
      justify-content: center;
      display: none;
      bottom: 10%;
      left: 14%;
      width: 72%;
      @media screen and (orientation: portrait) and (max-width: 769px) {
        display: inherit;
      }
    }
    img {
      max-width: 90px;
      width: 100%;
      margin: auto;
    }
  }
`;

const StyledClinicCases = styled.section`
  background: #ededed;
  padding: ${rhythm(4)} 5vw ${rhythm(5)};
  h1 {
    text-align: center;
    font-weight: 300;
    margin-bottom: ${rhythm(2)};
  }
  .slick-slide {
    padding: 10px;
  }
  .slick-dots {
    display: block;
    position: relative;
    margin-top: ${rhythm(1)};
  }
  .gallery-card {
    position: relative;
    h3 {
      text-align: center;
      margin-top: 1.6rem;
      font-family: Bebas Neue Bold;
      letter-spacing: 0.5px;
    }
    .icon-search {
      font-size: 3.2em;
    }
    .gallery-ob {
      position: absolute;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 100%;
      width: 100%;

      &.hover {
        a {
          opacity: 1;
          visibility: visible;
        }
      }
      .animated {
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        &.staticGallery {
          p {
            line-height: 1.6;
            padding: 0 10px;
          }
        }
        &.gridGallery {
          display: flex;
          flex-direction: column-reverse;
          i {
            font-size: 2em;
            margin-bottom: 10px;
          }
        }
      }
      .zoomIn {
        -webkit-animation-name: zoomIn;
        animation-name: zoomIn;
      }
      @-webkit-keyframes zoomIn {
        from {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }

        50% {
          opacity: 1;
        }
      }

      @keyframes zoomIn {
        from {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }

        50% {
          opacity: 1;
        }
      }
      .close-feature {
        position: absolute;
        margin: 0px;
        right: 0;
        top: 0;
        width: 90px;
        font-size: 20px;
        height: 90px;
        z-index: 1;
        padding: 18px 18px 0 0;
        text-align: right;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        color: white;
        background: -webkit-gradient(
          linear,
          left bottom,
          right top,
          from(hsla(0, 0%, 100%, 0)),
          color-stop(53%, hsla(0, 0%, 100%, 0)),
          color-stop(53%, rgba(51, 51, 51, 0.701961)),
          to(rgba(51, 51, 51, 0.701961))
        );
        background: linear-gradient(
          to top right,
          hsla(0, 0%, 100%, 0) 0,
          hsla(0, 0%, 100%, 0) 53%,
          rgba(51, 51, 51, 0.701961) 0,
          rgba(51, 51, 51, 0.701961)
        );
        .wrap {
          float: right;
          transition: all 0.5s;
        }
        @media screen and (max-width: 769px) {
          background: -webkit-gradient(
            linear,
            left bottom,
            right top,
            from(hsla(0, 0%, 100%, 0)),
            color-stop(53%, hsla(0, 0%, 100%, 0)),
            color-stop(53%, rgba(255, 255, 255, 0.701961)),
            to(rgba(255, 255, 255, 0.701961))
          );
          background: linear-gradient(
            to top right,
            hsla(0, 0%, 100%, 0) 0,
            hsla(0, 0%, 100%, 0) 53%,
            rgba(255, 255, 255, 0.701961) 0,
            rgba(255, 255, 255, 0.701961)
          );
          color: #333;
          &.hidden {
            visibility: visible !important;
            opacity: 1 !important;
            color: white;
            background: -webkit-gradient(
              linear,
              left bottom,
              right top,
              from(hsla(0, 0%, 100%, 0)),
              color-stop(53%, hsla(0, 0%, 100%, 0)),
              color-stop(53%, rgba(51, 51, 51, 0.701961)),
              to(rgba(51, 51, 51, 0.701961))
            );
            background: linear-gradient(
              to top right,
              hsla(0, 0%, 100%, 0) 0,
              hsla(0, 0%, 100%, 0) 53%,
              rgba(51, 51, 51, 0.701961) 0,
              rgba(51, 51, 51, 0.701961)
            );
            .wrap {
              transform: rotate(45deg);
            }
          }
        }
        &.hidden {
          visibility: hidden;
          opacity: 0;
        }
      }

      a {
        visibility: hidden;
        opacity: 0;
        background: rgba(28, 28, 28, 0.8);
        transition: opacity 0.5s, visibility 0.5s;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-decoration: none;
        padding: 0.5em;
        @media screen and (max-width: 769px) {
          background: rgba(255, 255, 255, 0.8);
          color: #333;
          .details.gridGallery {
            color: #333;
          }
        }
        .details {
          border: none;
          background: #222;
          color: white;
          font-weight: 700;
          padding: 3px 15px;
          &.gridGallery {
            background: none;
          }
        }
        h3 {
          @media screen and (min-width: 1024px) {
            ${scale(0.2)}
          }
          text-transform: uppercase;
          margin-bottom: 0.6em;
        }
        p {
          margin-bottom: 0.5em;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.2;
          &.dv-text-feat-100 {
            font-weight: 400;
          }
        }
      }
    }
  }
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
      content: "\\\E90c";
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
      content: "\\\E90d";
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
`;

const settings = {
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
        dots: true,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const ClinicCases = (props) => {
  const { title, items, type, images, placeholder } = props;
  const [activeCard, setActiveCard] = useState(false);
  const size = useWindowSize();
  let isMobile = size.isMobile;
  const openPopupbox = (indexImg) => {
    const content = (
      <ModalCarousel>
        <button type="button" onClick={PopupboxManager.close} className="close">
          <div className="wrap">
            <i className="icon-times" />
          </div>
        </button>
        <div className="header gallery-indicators">
          <img alt="rotate" src={rotateDevice} />
        </div>
        <LightBoxCarousel index={indexImg} images={images} />
        <div className="gallery-indicators footer">{placeholder}</div>
      </ModalCarousel>
    );

    PopupboxManager.open({ content });
  };
  return [
    <PopupboxContainer key={1} />,
    <StyledClinicCases key={2} style={{ overflow: "hidden" }}>
      {ReactHtmlParser(title)}
      {/** <PopupboxContainer /> */}
      <Slider {...settings}>
        {items.map((item, index) => {
          const key = index;
          const { image, action, body } = item;
          const resetActiveCard = () => setActiveCard(false);
          return (
            <div
              key={key}
              onMouseOver={() => {
                return !isMobile && setActiveCard(index);
              }}
              onMouseLeave={() => {
                return !isMobile && resetActiveCard();
              }}
              onClick={() => {
                return isMobile && activeCard !== index
                  ? setActiveCard(index)
                  : resetActiveCard();
              }}
              role="button"
              tabIndex={0}
              className={classnames("not-masonry", "gallery-card grid-item")}
            >
              <div
                className={classnames(
                  "gallery-ob",
                  activeCard === index && "hover"
                )}
              >
                <div
                  role="button"
                  tabIndex={0}
                  className={classnames(
                    "close-feature",
                    activeCard === index && "hidden"
                  )}
                >
                  <div className="wrap">
                    <i className="icon-plus" />
                  </div>
                </div>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    return !isMobile && openPopupbox(index);
                  }}
                >
                  <div
                    className={classnames(
                      "animated",
                      type,
                      activeCard === index && "zoomIn"
                    )}
                  >
                    {action && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          return isMobile && openPopupbox(index);
                        }}
                      >
                        <i className="icon-search" />
                      </span>
                    )}
                  </div>
                </a>
              </div>

              <Img alt="dentalvip" fluid={image.childImageSharp.fluid} />
              {ReactHtmlParser(body)}
            </div>
          );
        })}
      </Slider>
    </StyledClinicCases>,
  ];
};
const LightBoxCarousel = (props) => {
  const { index, images } = props;
  return (
    <ImageGallery
      startIndex={index}
      showFullscreenButton={false}
      showIndex
      showThumbnails={false}
      showPlayButton={false}
      items={images}
    />
  );
};
export default ClinicCases;
