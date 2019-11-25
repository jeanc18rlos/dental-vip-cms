import React, { useEffect, useState } from "react";
import ScrollUpButton from "react-scroll-up-button";
import PropTypes from "prop-types";
import Header from "./Header";
import ContactBar from "./ContactBar";
import Footer from "./Footer";
import { es, en } from "./.static";
import "react-popupbox/dist/react-popupbox.css";

const mockWindow = {
  innerWidth: 1200
};

const Layout = ({ children }) => {
  const { innerWidth } = mockWindow;
  const [langRedir, setLangRedir] = useState("/");
  const [width, setWidth] = useState(innerWidth);
  const [dropdownState, toggleDrop] = useState(false);
  const [lang, setlang] = useState('es')
  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };


  useEffect(() => {
    setWidth(window.innerWidth);
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */
  const childrenWprops = React.Children.map(children, child =>
    React.cloneElement(child, { key: child, setLangRedir, setlang, width })
  );
  return (
    <div className={width <= 850 ? "mobile-layout-wrap" : ""}>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeInCubic"
        AnimationDuration={1500}
        ContainerClassName="ScrollUpButton__Container icon-angle-double-up"
        TransitionClassName="ScrollUpButton__Toggled"
      >
        <span />
      </ScrollUpButton>

      <ContactBar
        {...{
          langRedir,
          lang
        }}
        {...(lang === "es" ? es.contactBar : en.contactBar)}
        theme="light"
      />

      <Header
        className={width <= 850 ? "mobile" : ""}
        {...{
          langRedir,
          dropdown: dropdownState,
          toggleDrop,
          lang,
          width
        }}
        {...(lang === "es" ? es.header : en.header)}
        {...(lang === "es" ? es.search : en.search)}
        theme="dark"
      />
      <main className="layout-wrapper" style={{ maxWidth: "100vw" }}>{childrenWprops}</main>
      <Footer {...(lang === "es" ? es.footer : en.footer)} />
    </div>
  );
};

export default Layout;
Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
