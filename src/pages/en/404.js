import React from "react";
import Layout from "../../layout";
import SEO from "../../components/seo";
import SetLang from "../../components/setLang";

import styled  from "styled-components";
import { rhythm } from "../../utils/typography";
import queryString from "query-string";
const StlyledNotF = styled.section`
  padding: ${rhythm(4)} 5vw ${rhythm(3)};
  text-align: center;
  h1.title {
    color: #999;
    font-size: 100%;
    line-height: 1;
    font-family: Bebas Neue Bold;
    font-size: calc(8em + 5vw);
  }
  .error-box {
    max-width: 560px;
    border: solid 1px;
    padding: ${rhythm(0.5)} ${rhythm(2)};
    margin: auto;
    color: #333;
    font-weight: 300;
    margin-bottom: ${rhythm(3)};
  }
  .form {
    margin-top: ${rhythm(3)} !important;
    margin-bottom: ${rhythm(1)} !important;
    width: fit-content;
    margin: auto;
    background: #ededed !important;
    border: 1px solid;
    input {
      min-width: 50vw;
      padding: 10px;
      border: none;
      border-right: 1px solid;
      background: #ededed !important;
    }
    button {
      padding: 10px;
      background: none;
      border: none;
      background: #ededed !important;
      color: #555;
    }
  }
`;

const NotFoundPage = () => {
  const setSearchTerm = (e) => {
    e.preventDefault();
    const term = e.target.search.value || "";

    if (typeof window !== "undefined") {
      window.location.href = `/en/blog/search?${queryString.stringify({
        term,
      })}`;
    }
  };

  return (
    <Layout>
      <SetLang language="en" link="/404" />
      <SEO title="404: Not Found" />
      <StlyledNotF>
        <h1 className="title">404</h1>
        <h2 className="error-box">NOT FOUND</h2>
        <p>
          It&apos;s possible that the entry that you&apos;re looking for has
          been deleted or maybe the url doesn&apos;t exists in our records.
        </p>
        <p>
          You can go back to the previous page or try a new search trough the
          following form.
        </p>

        <form onSubmit={(e) => setSearchTerm(e)} className="form" id="form4">
          <input name="search" type="text" placeholder="Search" />
          <button>
            <i className="icon-search" />
          </button>
        </form>
      </StlyledNotF>
    </Layout>
  );
};

export default NotFoundPage;
