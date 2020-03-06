import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import SEO from "../../components/seo";
import SetLang from "../../components/setLang";
import { navigate } from "gatsby";
const NotFoundPage = () => {
  const [searchText, setSearchText] = useState("default");

  return (
    <Layout>
      <SetLang language="en" link="/404" />
      <SEO title="404: Not Found" />
      <section className="error-404">
        <h1>404</h1>
        <div className="error-box">NOT FOUND</div>
        <p className="error-paragraph-1">
          It&apos;s possible that the entry that you&apos;re looking for has
          been deleted or maybe the url doesn&apos;t exists in our records.
        </p>
        <p className="error-paragraph-2">
          You can go back to the previous page or try a new search trough the
          following form.
        </p>
        <div className="dv-search-area-blog">
          <div className="form" id="form4">
            <input
              value={searchText}
              onChange={e => {
                setSearchText(e.target.value);
              }}
              type="text"
              placeholder="Search"
            />
            <button
              onClick={() => {
                navigate(`/en/blog/search?text=${searchText}`);
              }}
            >
              <i className="icon-search" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
