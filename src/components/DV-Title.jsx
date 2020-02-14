import React from "react";
import showdown from "showdown";
const converter = new showdown.Converter();

const DVTitle = props => {
  const { classname, title, content } = props;

  return (
    <section className={`dv-title-section ${classname}`}>
      <div className="container-fluid dv-main-menu">
        <h1
          className="dv-page-title"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(title)
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(content)
          }}
        ></div>
      </div>
    </section>
  );
};

export default DVTitle;
