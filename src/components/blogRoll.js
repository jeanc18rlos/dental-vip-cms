import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
import * as _ from "lodash";
import ReactHtmlParser from "react-html-parser";

import Fade from "react-reveal/Fade";
import Sidebar from "../components/sidebar";
const StyledBlogRoll = styled.div`
  .item {
    display: flex;
    .blog-list-item {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid #d8d8d8;
      height: fit-content;
      p {
        padding: 0 7% 3%;
        &.post-meta {
          border-top: 5px solid #202020;
          padding: 25px 7% 0;
          text-align: left;
          a {
            text-decoration: none;
            font-family: Bebas Neue Bold;
            ${scale(0.5)};
            line-height: 1;
            color: #333;
          }
          span {
            display: block;
            ${scale(-0.5)};
            margin-top: ${rhythm(0.5)};
            margin-bottom: 0;
          }
        }

        a.button {
          font-family: Bebas Neue Bold;
          ${scale(0.3)};
          text-decoration: none;
          color: #91c508;
        }
      }
      .gatsby-image-wrapper {
        min-height: 275px;
        background-size: cover;
        background-position: 50%;
        border-bottom: 3px solid rgba(145, 197, 8, 0.6);
      }
    }
  }
  .pagination {
    justify-content: center;
    margin-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    display: flex;
    flex-basis: 100%;
    list-style: none;
    justify-self: flex-end;
    align-self: flex-end;
    li {
      margin-bottom: 0;
      margin-top: ${rhythm(2)};
    }
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span {
    margin-left: 0;
  }
  .pagination > .disabled > a,
  .pagination > .disabled > a:focus,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > span,
  .pagination > .disabled > span:focus,
  .pagination > .disabled > span:hover {
    color: #ddd !important;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }

  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    float: left;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 9px 15px;
    margin: 2px;
    color: #000;
    cursor: pointer;
  }
  .pagination > .disabled > a,
  .pagination > .disabled > a:focus,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > span,
  .pagination > .disabled > span:focus,
  .pagination > .disabled > span:hover {
    color: #ddd !important;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }
  .pagination > li.active > a,
  .pagination > li.active > span,
  .pagination > li > a:hover,
  .pagination > li > span:hover {
    background-color: #222;
    color: #fff !important;
  }
`;

const searchByText = (collection, text) => {
  let textF = _.toLower(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return _.filter(collection, function (object) {
    return _(object.node).some(function (string) {
      return _(string)
        .toLower()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(textF);
    });
  });
};

const BlogRoll = (props) => {
  const { term, posts, home, categories } = props;
  const [state, setState] = useState({
    items: [],
    pageOfItems: posts.edges,
    page: 1,
  });
  useEffect(() => {
    let pageofitems;
    let edges;
    if (term) {
      pageofitems = searchByText(posts.edges, term.term);
      edges = searchByText(posts.edges, term.term);
    } else {
      pageofitems = posts.edges;
      edges = posts.edges;
    }

    return setState({
      ...state,
      pageOfItems: pageofitems,
      items: edges,
    });
  }, [term]);

  const changePagetEX = (text) => {
    setState({
      ...state,
      items: searchByText(posts.edges, text),
    });
  };

  const changePage = (pageOfItems) => {
    setState({
      ...state,
      pageOfItems,
    });
  };
  return (
    <div className="blog-container">
      <StyledBlogRoll className="blogroll">
        {props.alone && ReactHtmlParser(props.title)}
        {state.pageOfItems &&
          state.pageOfItems.map(({ node: post }, k) => {
            return (
              <Fade key={k} cascade>
                <div className="item" key={post.id}>
                  <article
                    className={`blog-list-item tile is-child box notification ${
                      post.frontmatter.featuredpost ? "is-featured" : ""
                    }`}
                  >
                    <div>
                      {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                      <p className="post-meta">
                        <Link
                          className="title has-text-primary is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <br />
                        <span className="subtitle is-size-5 is-block">
                          {home.frontmatter.structure.post.by}{" "}
                          {post.frontmatter.author.name} |{" "}
                          {post.frontmatter.date} | {post.frontmatter.tags}
                        </span>
                      </p>
                    </div>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button" to={post.fields.slug}>
                        {home.frontmatter.structure.post.readMore}
                      </Link>
                    </p>
                  </article>
                </div>
              </Fade>
            );
          })}

        <Pagination
          items={state.items}
          onChangePage={changePage}
          page={state.page}
          pageSize={4}
        />
      </StyledBlogRoll>
      {!props.alone && (
        <Sidebar
          {...{
            language: props.language,
            structure: home.frontmatter.structure,
            posts,
            categories,
            changePagetEX,
          }}
        ></Sidebar>
      )}
    </div>
  );
};
export default BlogRoll;

const Pagination = (props) => {
  const { page, pageSize, items } = props;
  const [state, setState] = useState({
    items: [],
    pager: {},
  });

  useEffect(() => {
    setPage(page);
  }, [items]);

  const setPage = (page) => {
    let pager = getPager(props.items.length, page, pageSize);

    setState({
      ...state,
      items: props.items,
      pager,
    });

    if (page < 1 || page > pager.totalPages) {
      return false;
    }

    let pageOfItems = props.items.slice(pager.startIndex, pager.endIndex + 1);

    // call change page function in parent component
    props.onChangePage(pageOfItems);
  };

  const getPager = (totalItems, currentPage, pageSize) => {
    currentPage = currentPage || 1;
    pageSize = pageSize || 2;

    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  return (
    <ul className="pagination">
      {!state.pager.pages || state.pager.pages.length <= 1 ? null : (
        <>
          <li className={state.pager.currentPage === 1 ? "disabled" : ""}>
            <a onClick={() => setPage(1)}>{"<<"}</a>
          </li>
          <li className={state.pager.currentPage === 1 ? "disabled" : ""}>
            <a onClick={() => setPage(state.pager.currentPage - 1)}>{"<"}</a>
          </li>
          {state.pager.pages.map((page, index) => (
            <li
              key={index}
              className={state.pager.currentPage === page ? "active" : ""}
            >
              <a onClick={() => setPage(page)}>{page}</a>
            </li>
          ))}
          <li
            className={
              state.pager.currentPage === state.pager.totalPages
                ? "disabled"
                : ""
            }
          >
            <a onClick={() => setPage(state.pager.currentPage + 1)}>{">"}</a>
          </li>
          <li
            className={
              state.pager.currentPage === state.pager.totalPages
                ? "disabled"
                : ""
            }
          >
            <a onClick={() => setPage(state.pager.totalPages)}>{">>"}</a>
          </li>
        </>
      )}
    </ul>
  );
};
