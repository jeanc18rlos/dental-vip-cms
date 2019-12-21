import React from "react";
import Img from "gatsby-image";
import showdown from "showdown";
import classnames from "classnames";
import {Link} from "gatsby"

const converter = new showdown.Converter();

const Section = props => {
  const { align, title, content, image, position, width, footer, borderBottom, borderTop } = props;
  return (
    <article className={classnames(align, width <= 850 && "mobile", position === "last" && borderBottom && "dv-margin-bottom")}>
      <Img className="image" fluid={image.childImageSharp.fluid} />
      <aside className="dv-content">
        <main
          className={classnames(position === 0 && borderTop && "dv-border-top", position === "last" && borderBottom && "dv-border-bottom")}
        >
          <div>
            <header
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(title)
              }}
            />
            <main
              className={ !footer.display && 'no-bottom'}
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(content)
              }}
            />
            {
              (footer.display)  && <footer>
                {
                  footer.image.display && <Img className="image" fluid={footer.image.src.childImageSharp.fluid} />
                }
                 {
                  footer.button.display && <Link to={footer.button.to} >{footer.button.text} </Link>
                }
              </footer>
            }
          </div>
        </main>
      </aside>
    </article>
  );
};

export default Section;
