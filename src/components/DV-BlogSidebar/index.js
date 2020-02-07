import React from "react";
import { kebabCase } from "lodash";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Link } from "gatsby";

const SideBar = ({ structure, latestPosts, categories, language }) => {
  return (
    <div className="col-xs-12 col-md-3 sidebar dv-sidebar">
      <h4>{structure.aside.search.search}</h4>
      <hr />
      <div className="dv-search-area-blog">
        <form method="get" action="https://dentalvip.com.ve/">
          <input
            type="text"
            name="search-input"
            placeholder={`${structure.aside.search.placeholder}`}
          />
          <button type="submit">
            <i className="icon-search" />
          </button>
        </form>
      </div>
      <h4 className="dv-latest-post">{structure.aside.latestPosts}</h4>
      <hr />

      {latestPosts.edges.map(i => {
        return (
          <div className="dv-recent-content">
            <PreviewCompatibleImage
              imageInfo={{
                image: i.node.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${i.node.frontmatter.title}`
              }}
            />
            <p className="dv-title">
              <Link to={i.node.fields.slug}>{i.node.frontmatter.title}</Link>
            </p>
          </div>
        );
      })}

      <h4 className="dv-latest-post">{structure.aside.categories}</h4>
      <hr />
      {categories.group.map(tag => (
        <li key={tag.fieldValue}>
          <Link
            to={`/${
              language === "es" ? "categorias" : "en/categories"
            }/${kebabCase(tag.fieldValue)}/`}
          >
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}

      <h4 className="dv-latest-post">{structure.aside.subscribe}</h4>
      <hr />
      <div className="tnp tnp-subscription dv-newsletter-sidebar">
        <img
          src="https://dentalvip.com.ve/wp-content/themes/DentalVip/assets/vip.jpg"
          alt="VIP Newsletter"
          className="icon-news"
        />
        <h5></h5>
        <form
          method="post"
        >
         
          <div className="tnp-field tnp-field-firstname">
            <input
              className="tnp-firstname"
              type="text"
              name="nn"
              required
              placeholder={`${structure.aside.form.name}`}
            />
          </div>
          <div className="tnp-field tnp-field-email">
            <input
              className="tnp-email"
              type="email"
              name="ne"
              required
              placeholder={"E-mail"}
            />
          </div>
          <div className="tnp-field tnp-field-button">
            <button className="tnp-submit" type="submit">
              {structure.aside.form.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SideBar;
