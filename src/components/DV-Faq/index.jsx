import React, { useState } from "react";
import { Collapse } from "reactstrap";
import classnames from "classnames";
import showdown from "showdown";
const converter = new showdown.Converter();

const DVfaq = ({ title, blocks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = id => {
    id === isOpen ? setIsOpen(false) : setIsOpen(id);
  };

  return (
    <section className="dv-specialties-faq">
      <div className=" row container-fluid  dv-main-menu">
        <h1 className=" col-xs-12 dv-page-titles text-center">{title}</h1>
        {blocks.map((block, key) => {
          return (
            <div
              key={`block-faq-${key}`}
              className="col-xs-12 col-md-6 accordion md-accordion panel-group dv-npl dv-npr-mob"
              id="accordionEx"
              role="tablist"
              aria-multiselectable="true"
            >
              {block.questions.map((i, k) => {
                return (
                  <div className="panel panel-default">
                    <div
                      key={`block-faq-${key}-question-${k}`}
                      className="panel-heading accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx,#accordionEx1"
                      data-target="#collapseOne0"
                    >
                      <h5
                        onClick={() => {
                          toggle(`block-${key}-panel-${k}`);
                        }}
                        className="panel-title panel-title-10"
                      >
                        <i
                          className={classnames(
                            isOpen === `block-${key}-panel-${k}` && "rotate",
                            "icon-plus dv-plus"
                          )}
                        />

                        {i.question}
                      </h5>
                    </div>
                    <Collapse isOpen={isOpen === `block-${key}-panel-${k}`}>
                      <div
                        className="panel-body"
                        dangerouslySetInnerHTML={{
                          __html: converter.makeHtml(i.answer)
                        }}
                      ></div>
                    </Collapse>
                  </div>
                );
              })}
              <hr
                className={classnames(
                  "dv-bb-colapse",
                  key + 1 === blocks.length && "last"
                )}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default DVfaq;
