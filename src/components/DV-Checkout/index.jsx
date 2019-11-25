import React from "react";
import showdown from "showdown";
import Img from "gatsby-image";
const converter = new showdown.Converter();

const Checkout = ({ title, options, checkout, banner }) => {
  return (
    <section className="dv-payment-options">
      <main>
        <h1>{title}</h1>
        <section>
          {options.map(i => {
            return (
              <div>
                <Img
                  fluid={i.img.childImageSharp.fluid}
                  className="center-block"
                />
                <h3>{i.title}</h3>
                <span>{i.subTitle}</span>
              </div>
            );
          })}
        </section>
        <div className="checkout">
          <Img
            fluid={checkout[0].img.childImageSharp.fluid}
            alt="Cirugía Bucal Icon"
            className="center-block"
          />
          <button>{checkout[0].text}</button>
        </div>
      </main>
      <footer>
        <p dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(banner.aside)
                }}>       
        </p>
        
        <aside>
          <Img
            fluid={banner.img.childImageSharp.fluid}
            className="center-block"
          />
        </aside>
      </footer>
    </section>
  );
};

export default Checkout;
