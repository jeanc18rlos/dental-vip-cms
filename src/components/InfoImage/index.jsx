// Dependencies
import React from "react";
import Img from 'gatsby-image'
const InfoImage = props => {
  const { paragraphs, img, classname } = props;

  return (
    <section id="Infoimage" className={classname}>
      <div className="dv-bannerimg-infoimage">
        <Img fluid={img.childImageSharp.fluid} alt="paragrah" />
      </div>
      <div className="dv-content-infoimge">
        <div className="dv-content-p">
          <span>{paragraphs[0].paragraph1}</span>
          <span style={{ color: "red" }}>*</span>
          <span>.{paragraphs[0].paragraph2}</span>
        </div>
        <div className="dv-content-p">
          <span>{paragraphs[1].paragraph1}</span>
        </div>
        <div className="dv-content-p">
          <span>{paragraphs[1].paragraph1}</span>
        </div>
      </div>
    </section>
  );
};

export default InfoImage;

