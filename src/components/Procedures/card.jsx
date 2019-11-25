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

        {true && (
          <div
            className={classnames("procedures-additional-text", hovered && hovered !== 'slideInDownProcedures' && 'visible')}
            style={{
              position: "absolute",
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              height: "10vw",
              minHeight: "180px",
              maxHeight: "200px"
            }}
          >
            <div>
              <img
                src="https://dentalvip.com.ve/wp-content/uploads/2018/08/contacto-footer-icon2.png"
                style={{ maxWidth: "33px" }}
              />
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "1.428571429",
                  color: "#fff",
                  fontWeight: "lighter"
                }}
              >
                Estacionamiento Multicentro Empresarial del Este.
                <br className="visible-xs visible-sm visible-md visible-lg" />
                Accesos por:{" "}
                <br className="hidden-xs hidden-sm visible-md visible-lg" />
                Av. Francisco de Miranda (<em>sentido Este</em>)
                <br className="hidden-xs hidden-sm visible-md visible-lg" />
                Av. Libertador (<em>sentido Oeste</em>)
              </p>
            </div>
          </div>
        )}
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
