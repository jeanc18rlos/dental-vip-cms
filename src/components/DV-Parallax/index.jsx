import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import classnames from "classnames";
import PropTypes from "prop-types";
import showdown from "showdown";
const converter = new showdown.Converter();

const DVparallax = props => {
  const { type, content, layers } = props;

  return (
    <section className={classnames("dv-parallax")}>
      {layers.map(i => {

        const imageChecker = image => {
          if(image.childImageSharp){
            return image.childImageSharp
          } else if(image.publicSrc){

          }
        }

        return (
          <>
            {i.image.childImageSharp ? (
              <Img
                className={i.classes}
                fluid={i.image.childImageSharp.fluid}
              />
            ) : (
              ""
            )}
          </>
        );
      })}
    </section>
  );
};

export default DVparallax;
