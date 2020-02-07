import React, { useState } from "react";
import classnames from "classnames";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { isMobile } from "react-device-detect";
import Card from "./card";
import Img from "gatsby-image"
import LightBoxCarousel from "../LightBoxCarousel";
import { useStaticQuery, graphql } from "gatsby";

const OverlayGallery = props => {
  const { width, elements, isMasonry, type, images, placeholder } = props;
  const [activeCard, setActiveCard] = useState(false);
  const data = useStaticQuery(graphql`
    query RotateImage {
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
            //<img src={rotateDevice}  />
          }
        </div>

        <LightBoxCarousel index={indexImg} images={images} />
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
          {placeholder}
        </div>
      </div>
    );

    PopupboxManager.open({ content });
  };
  return (
    <section
      id="overlayGallery"
      className={classnames(
        "row container-fluid dv-main-menu",
        isMasonry && "masonry-gallery"
      )}
    >
      <PopupboxContainer />
      {elements.map((i, k) => {
        const index = k;
        return (
          <Card
            index={index}
            type={type}
            openPopupbox={openPopupbox}
            activeCard={activeCard}
            resetActiveCard={() => {
              setActiveCard(false);
            }}
            isMasonry={isMasonry}
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
    </section>
  );
};

export default OverlayGallery;
