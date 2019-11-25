import React from "react";
import Section from "./Section";

const DVsideContent = props => {
  const { sections, width, borderBottom } = props;
  return (
    <section className="dv-side-content">
      <div>
        <main>
          {sections &&
            sections.map((section, key) => {
              const id = key;
              return (
                <Section
                  borderBottom={borderBottom}
                  position={ id === sections.length -1 ? 'last' : id}
                  key={`dv-side-content-${id}`}
                  align={section.align}
                  title={section.title}
                  image={section.image}
                  content={section.content}
                  width={width}
                  footer={section.footer}
                />
              );
            })}
        </main>
      </div>
    </section>
  );
};

export default DVsideContent;
