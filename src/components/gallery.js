import React, { useState } from "react";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import Img from "gatsby-image";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import rotateDevice from "../assets/icons-rotateDevice.png";
import ReactHtmlParser from "react-html-parser";
import { useWindowSize } from "../utils/hooks";
import classnames from "classnames";
import { navigate } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import BackgroundImage from "gatsby-background-image";
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

const StyledGallery = styled.section`
  display: flex;
  padding: 0 5vw;
  .static-wrapper-img {
    p {
      line-height: 1.5;
    }
    /**
    &:before {
      background-color: #ececec;
      background-size: contain !important;
    }
    &:after {
      background-color: #ececec;
      background-size: contain !important;
    } */
  }
  &.mb {
    padding-bottom: ${rhythm(4)} !important;
    @media screen and (max-width: 680px) {
      padding-bottom: ${rhythm(3)} !important;
    }
  }
  &.not-masonry {
    padding: 0 calc(5vw - 10px);
    @media screen and (max-width: 680px) {
      padding: 0 5vw;
    }
  }
  .grid-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    margin: auto;
    .grid-item.not-masonry {
      flex-basis: calc(33.33% - 10px);
      margin: 5px;
    }
    @media (max-width: 1025px) {
      .grid-item {
        flex-basis: 50% !important;
        &.not-masonry {
          flex-basis: calc(50% - 10px) !important;
          margin: 5px;
        }
      }
    }
    @media (max-width: 1200px) {
      .d-none {
        display: none !important;
      }
    }
    @media (max-width: 680px) {
      .grid-item {
        flex-basis: 100% !important;
        max-width: 480px;
        margin-bottom: 5vw;
        &.not-masonry {
          flex-basis: calc(100%) !important;
          margin: 0 !important;
          margin-bottom: 5vw !important;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    .grid-item {
      flex-basis: 33.33%;
      -ms-flex: auto;
      position: relative;
      padding: 0;
      box-sizing: border-box;
      z-index: 1;
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
            min-width: 170px;
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
  }
`;


const Gallery = (props) => {
  const size = useWindowSize();
  const { images, items, isMasonry, type, placeholder } = props;
  const [activeCard, setActiveCard] = useState(false);
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
    <StyledGallery key={2}
      className={`${isMasonry === false && "not-masonry"} ${props.mb && "mb"}`}
      isMasonry={isMasonry}
    >
      <div className="grid-row">
        {items.map((i, k) => {
          const index = k;
          return (
            <Card
              index={index}
              type={type}
              size={size}
              isMobile={size.isMobile}
              openPopupbox={openPopupbox !== null && openPopupbox}
              activeCard={activeCard}
              resetActiveCard={() => {
                setActiveCard(false);
              }}
              isMasonry={isMasonry}
              setActiveCard={(title) => {
                return title === activeCard && size.isMobile
                  ? setActiveCard(false)
                  : setActiveCard(title);
              }}
              key={`item-${index}`}
              {...i}
            />
          );
        })}
      </div>
    </StyledGallery>,
  ];
};

const Card = (props) => {
  const {
    isMobile,
    link,
    image,
    body,
    activeCard,
    action,
    setActiveCard,
    resetActiveCard,
    isMasonry,
    placeholder,
    type,
    openPopupbox,
    index,
  } = props;
  return (
    <div
      onMouseOver={() => {
        return !isMobile && setActiveCard(index);
      }}
      onFocus={() => {
        return null;
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
      className={classnames(
        isMasonry === false && "not-masonry",
        "gallery-card grid-item"
      )}
    >
      <div
        className={classnames(
          "gallery-ob",
          activeCard === index && "hover",
          isMasonry && "masonry-gallery"
        )}
      >
        <div
          role="button"
          tabIndex={0}
          className={classnames(
            "close-feature",
            isMasonry && "masonry-gallery",
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
            if (!link.display && action) {
              if (type === "singleGallery") {
                return !isMobile && openPopupbox(0);
              } else if (type === "gridGallery") {
                return !isMobile && openPopupbox(index);
              }
            } else {
              return !isMobile && link.display && navigate(link.to);
            }
          }}
        >
          <div
            className={classnames(
              "animated",
              type,
              activeCard === index && "zoomIn"
            )}
          >
            {ReactHtmlParser(body)}
            {isMobile && type !== "staticGallery" && (
              <button
                className={`details ${type === "gridGallery" && "gridGallery"}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (!link.display && action) {
                    if (type === "singleGallery") {
                      return openPopupbox(0);
                    } else if (type === "gridGallery") {
                      return openPopupbox(index);
                    }
                  } else {
                    return link.display && navigate(link.to);
                  }
                }}
              >
                {type === "singleGallery" && ReactHtmlParser(placeholder)}
                {action && type === "gridGallery" && (
                  <span>
                    <i className="icon-search" />
                  </span>
                )}
              </button>
            )}
            {action && type === "gridGallery" && !isMobile && (
              <span>
                <i className="icon-search" />
              </span>
            )}
          </div>
        </a>
      </div>
      {type === "staticGallery" ? (
        <BackgroundImage
          alt="dentalvip"
          style={{
            paddingBottom: "20%",
            paddingTop: "20%",
            height: " 100%",
          }}
          className={classnames(
            isMasonry && "masonry-gallery",
            "static-wrapper-img"
          )}
          fluid={image.childImageSharp.fluid}
        >
          <div
            style={{
              opacity: 0,
            }}
          >
            {ReactHtmlParser(body)}
          </div>
        </BackgroundImage>
      ) : (
        <Img
          alt="dentalvip"
          className={classnames(isMasonry && "masonry-gallery")}
          fluid={image.childImageSharp.fluid}
        />
      )}
    </div>
  );
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

export default Gallery;
