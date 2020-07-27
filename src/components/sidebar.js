import React from "react";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
import { kebabCase } from "lodash";
import queryString from "query-string";

import { Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
const StyledSideBar = styled.aside`
  display: flex;
  background: #ededed;
  box-shadow: 0 0 4px 0px #00000057;
  flex-direction: column;
  height: fit-content;
  .dv-newsletter-sidebar {
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    display: flex;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        color: white;
        background: #91c508;
        font-weight: bold;
        width: 100%;
        border: none;
        text-transform: uppercase;
        padding: 5px 10px;
      }
      input {
        width: 100%;
        margin-bottom: ${rhythm(1)};
        border: 1px solid #ddd;
        background: #f4f4f4;
        border-radius: 3px;
        color: #333;
        font-weight: 400;
        padding: 5px;
      }
    }
  }
  .blog-icon {
    margin: auto;
    display: flex;
    justify-content: center;
    margin-bottom: ${rhythm(1)};
    font-size: 100px;
  }
  .dv-sidebar {
    width: 100%;
    padding: 20px;
  }
  a {
    text-decoration: none;
    color: #333;
    ${scale(-0.2)}
  }
  li {
    list-style: none;
  }
  form {
    display: flex;
    flex-flow: wrap;
    input {
      flex-basis: 85%;
      border-radius: 0;
      border: solid 1px #333;
      padding: 5px 10px;
      &:focus {
        outline: 2px solid #91c508;
      }
    }
    button {
      border-radius: 0;
      border: solid 1px #333;
      flex-basis: 15%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 0;
    }
  }
  .dv-recent-content {
    margin-bottom: ${rhythm(1)};
    display: flex;
    flex-direction: row;
    p {
      margin: 0;
      padding: 10px 0px 10px 15px;
    }
    .gatsby-image-wrapper {
      position: relative;
      overflow: hidden;
      border-radius: 0px;
      display: flex;
      flex-basis: 50%;
      max-width: 80px;
      &:before,
      :after {
        background-size: contain;
      }
    }
  }
  hr {
    height: 2px;
    background: #333;
  }
  h4 {
    font-family: Bebas Neue Bold;
    ${scale(0.3)}
  }
`;

const SideBar = (props) => {
  const { language } = props;
  const setSearchTerm = (e) => {
    e.preventDefault();
    const term = e.target.search.value || "";

    if (typeof window !== "undefined") {
      window.location.href = `${
        language === "es" ? "/blog/busqueda" : "/en/blog/search"
      }?${queryString.stringify({
        term,
      })}`;
    }
  };
  return (
    <StyledSideBar className="sidebar">
      <div className=" sidebar dv-sidebar">
        <h4>{props.structure.aside.search.placeholder}</h4>
        <hr />
        <div className="dv-search-area-blog">
          <form
            onSubmit={(e) => {
              setSearchTerm(e);
            }}
          >
            <input
              type="text"
              name="search"
              placeholder={props.structure.aside.search.search}
            />
            <button type="submit">
              <i className="icon-search" />
            </button>
          </form>
        </div>
        <h4 className="dv-latest-post">{props.structure.aside.latestPosts}</h4>
        <hr />
        {props.posts.edges.slice(0, 4).map((i, k) => {
          return (
            <div key={k} className="dv-recent-content">
              <PreviewCompatibleImage
                imageInfo={{
                  image: i.node.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${i.node.frontmatter.title}`,
                }}
              />
              <p className="dv-title">
                <Link to={i.node.fields.slug}>{i.node.frontmatter.title}</Link>
              </p>
            </div>
          );
        })}
        <h4 className="dv-categories">{props.structure.aside.categories}</h4>
        <hr />
        {props.categories.group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link
              to={`/${
                props.language === "es" ? "categorias" : "en/categories"
              }/${kebabCase(tag.fieldValue)}/`}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
        <h4 className="dv-subscribe">{props.structure.aside.subscribe}</h4>
        <hr />
        <span className="blog-icon">
          <i className="icon-blog-subscribe"></i>
        </span>

        <div className="dv-newsletter-sidebar">
          <form method="post">
            <p>
              <b>{props.structure.aside.form.message}</b>
            </p>

            <input
              className="tnp-firstname"
              type="text"
              name="nn"
              required
              placeholder={props.structure.aside.form.name}
            />

            <input
              type="email"
              name="email"
              required
              placeholder={props.structure.aside.form.email}
            />

            <button className="tnp-submit" type="submit">
              {props.structure.aside.form.send}
            </button>
          </form>
        </div>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
