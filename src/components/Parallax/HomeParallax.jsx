import React from "react";
import BackgroundImage from "gatsby-background-image";


const HomeParallax = props => {
  const { stadistics, landscape, portrait, desktop, portraitxl } = props;
  return stadistics.childImageSharp ? (
    <BackgroundImage
      Tag="div"
      id="Home-Parallax-statistics"
      fluid={stadistics.childImageSharp.fluid}
      backgroundColor="#fff"
    >
      <img
        src={desktop.publicURL}
        alt="default"
        id="Home-Parallax-layer-desktop"
      />

      <img
        src={landscape.publicURL}
        alt="default"
        id="Home-Parallax-layer-landscape"
      />

      <img
        src={portrait.publicURL}
        alt="default"
        id="Home-Parallax-layer-portrait"
      />

      <img
        src={portraitxl.publicURL}
        alt="default"
        id="Home-Parallax-layer-portrait-xl"
      />
    </BackgroundImage>
  ) : (
    <div
      id="Home-Parallax-statistics"
      style={{ backgroundImage: `url(${stadistics})` }}
      backgroundColor="#fff"
    >
      <img src={desktop} alt="default" id="Home-Parallax-layer-desktop" />

      <img
        src={landscape}
        alt="default"
        id="Home-Parallax-layer-landscape"
      />

      <img src={portrait} alt="default" id="Home-Parallax-layer-portrait" />

      <img
        src={portraitxl}
        alt="default"
        id="Home-Parallax-layer-portrait-xl"
      />
    </div>
  );
};

export default HomeParallax;
