import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Img from "gatsby-image";
import classnames from "classnames";
import showdown from "showdown";
const converter = new showdown.Converter();

const DVhero = props => {
  const { type, image, title, indicator, captions, parallax, halfSize } = props;

  return (
    <section
      className={classnames(
        "dv-hero",
        halfSize && "dv-half-size-hero",
        type === "animated" && "dv-animated-hero",
        parallax && "dv-parallax-hero"
      )}
    >
      {(() => {
        switch (type) {
          case "animated":
            return <AnimatedHero {...{ image, captions, parallax }} />;
          default:
            return <PlainHero {...{ image, title, indicator, parallax, halfSize }} />;
        }
      })()}
    </section>
  );
};

const AnimatedHero = props => {
  const { image, captions } = props;
  const [scale, setScale] = useState(false);
  useEffect(() => {
    setScale(true);
  }, []);
  return (
    <>
      {image.childImageSharp ? (
        <Img
          loading="eager"
          className={classnames(scale && "scale", "dv-hero-bg")}
          fluid={image.childImageSharp.fluid}
        />
      ) : (
        <img
          alt="hero"
          src={image}
          className={classnames(scale && "scale", "dv-hero-bg")}
        />
      )}

      <main className="dv-hero-caption" style={{ overflow: "hidden" }}>
        {captions.map((i, k) => {
          return (
            <Fade key={k} delay={i.delay} right>
              <div
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(i.content)
                }}
              />
            </Fade>
          );
        })}
      </main>
    </>
  );
};

const PlainHero = props => {
  const { image, title, indicator, halfSize } = props;
  return (
    <>
      {image.childImageSharp ? (
        <Img
          loading="eager"
          alt="hero"
          className={classnames("dv-hero-bg")}
          fluid={image.childImageSharp.fluid}
        />
      ) : (
        <img alt="hero" src={image} className={classnames("dv-hero-bg")} />
      )}

      {title && (
        <>
          {!halfSize ? (
            <Fade bottom delay={1000}>
              <h1
                className="dv-hero-title"
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(title)
                }}
              />
            </Fade>
          ) : (
            <h1
              className="dv-hero-title"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(title)
              }}
            />
          )}
        </>
      )}
      {indicator && (
        <span className="dv-hero-indicator">
          <i className="icon-angle-down" />
        </span>
      )}
    </>
  );
};
export default DVhero;
