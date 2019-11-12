import React from "react";
import BackgroundImage from "gatsby-background-image";
import PropTypes from "prop-types";

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
HomeParallax.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  desktopHome: PropTypes.string.isRequired,
  landscapeHome: PropTypes.string.isRequired,
  portraitHome: PropTypes.string.isRequired,
  portraitxlHome: PropTypes.string.isRequired,
  stadisticsHome: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  dpr: PropTypes.number.isRequired
};
