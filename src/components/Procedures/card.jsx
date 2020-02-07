import React, { useState } from "react";
import classnames from "classnames";
import Img from "gatsby-image";
import showdown from "showdown";
import { navigate } from "gatsby";
const converter = new showdown.Converter();

const Card = props => {
  const { to, title, img, length, info } = props;
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
        "row-eq-height  col-xs-12  col-sm-6 col-md-6 col-lg-4",
        info && "with-text"
      )}
      onClick={()=>{navigate(to)}}
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
            alt="card-img"
            className={classnames("dv-image-div", length <= 3 && "big")}
            src={img}
          />
        )}

        {info && (
          <div
            className={classnames(
              "procedures-additional-text",
              hovered && hovered !== "slideInDownProcedures" && "visible"
            )}
          >
            <div>
              <Img
                className="icon"
                fluid={info.image.childImageSharp.fluid}
                style={{ width: "50px", margin: "auto" }}
              />
              <br></br>
              <div
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(info.text)
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </a>
  );
};

export default Card;
