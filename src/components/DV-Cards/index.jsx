import React from "react";
import showdown from "showdown";
import Img from "gatsby-image";
const converter = new showdown.Converter();
const DVcards = ({ title, cards }) => {
  return (
    <section className="dv-cards-section">
      <header
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(title)
        }}
      />
      <main className="container-fluid dv-main-menu">
        <div className="row">
          {cards.map(i => {
            return (
              <div className="box-wraper col-xs-12 col-md-6 col-lg-4">
                <div className="box">
                  <Img
                    fluid={i.image.childImageSharp.fluid}
                    className="image"
                  />
                  <p className="title">{i.title}</p>
                  <p className="job">{i.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default DVcards;
