import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Footer = props => {
  const images = useStaticQuery(graphql`
    query {
      mobileTeeth: file(relativePath: { eq: "layout/footer/teeth-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const {
    logo,
    mainNumber,
    phones,
    partnerDark1,
    partnerDark2,
    partnerDark3,
    contact,
    social,
    veIcon,
    slogan,
    address,
    copyright,
    prismicIcon,
    legal
  } = props;
  return (
    <footer id="dv-footer">
      <div className="dp-location">
        <div className="container-fluid dv-main-menu">
          <div style={{ maxWidth: "400px", margin: "auto" }}>
            <Img
              fluid={images.mobileTeeth.childImageSharp.fluid}
              alt="DentalVip Logo"
              className="mobile-teeth-logo"
            />
            <br className="conditionall-br" />
          </div>

          <img src={logo} alt="DentalVip Logo" className="div-img-foot" />
          <p className="dv-slogan">{slogan}</p>
          <div className="dv-footer-address">
            <p className="dv-address-p">
              {address}
              <br />
              {mainNumber.code}
              <em>{mainNumber.extension}</em>
              {mainNumber.numbers}
            </p>

            <div className="dv-phone-div">
              {phones.map((i, k) => {
                const index = k;
                return (
                  <div key={index} className="dv-inline dv-mr-7perct">
                    <a href={`tel:${i.number}`}>
                      <i className="icon-phone" />
                    </a>
                    {k + 1}
                  </div>
                );
              })}
            </div>

            <div className="dv-logos-div">
              <img src={partnerDark1} alt="Partners" />
              <img src={partnerDark2} alt="Partners" />
              <img src={partnerDark3} alt="Partners" />
              <hr className="dv-center-line" />
            </div>
            <Link to={contact.link} className="dv-contact-link">
              {contact.text}
            </Link>
          </div>
        </div>
      </div>
      <div className="dv-copyright">
        <div className="container-fluid dv-social-media">
          <a className="facebook" href={social.facebook} target="blank">
            <i className="icon-facebook" />
          </a>
          <a className="instagram" href={social.instagram} target="blank">
            <i className="icon-instagram" />
          </a>
        </div>

        <div className="copyright-text container-fluid dv-main-menu">
          <p className="dv-copy">
            <img
              src={veIcon}
              alt="DentalVIP - Venezuela"
              className="copyright-icon"
            />
            {copyright.text}
            {copyright.tools.prismic}{" "}
            <img
              src={prismicIcon}
              alt="DentalVIP - WordPress"
              className="copyright-icon"
            />
          </p>
          <br />
          <div className="dv-legal-links">
            {legal.map((i, k) => {
              const index = k;
              return [
                <Link key={`${i.title}-${index}`} to={i.link}>
                  {i.title}
                </Link>,

                k + 2 <= legal.length && (
                  <span key={`span-${i.title}-${index}`}> - </span>
                )
              ];
            })}
          </div>
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;