import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Card = props => {
  const { to, title, img, length } = props;
  const [hovered, setHovered] = useState(false);
  const toggleHover = value => {
    setHovered(value);
  };
  return (
    <a
      onMouseOver={() => {
        toggleHover("slideOutUpProcedures");
      }}
      onFocus={() => {
        return null;
      }}
      onBlur={() => {
        return null;
      }}
      onMouseOut={() => {
        toggleHover("slideInDownProcedures");
      }}
      className={classnames(
        "row-eq-height  col-xs-12  col-sm-6 col-md-6 col-lg-4"
      )}
      href={to}
    >
      <div
        className={classnames(
          "animated col-xs-12 dv-procedures-content text-center",
          hovered
        )}
      >
        <h3 className="dv-procedure-title text-center">{title}</h3>
        <div className="procedures-box">
          <i className="icon-plus dv-plus center-block" />
        </div>

        {img.childImageSharp ? (
          <Img
            className={classnames("dv-image-div", length <= 3 && "big")}
            fluid={img.childImageSharp.fluid}
          />
        ) : (
          <img
            className={classnames("dv-image-div", length <= 3 && "big")}
            src={img}
          />
        )}

        <div className="dv-hover-proc-left dv-hover-proc-left1" />
      </div>
    </a>
  );
};

export default Card;
Card.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  length: PropTypes.number.isRequired
};
