import React from "react";

import Layout from "../../Layout";
import SEO from "../../components/seo";
import SetLang from "../../components/setLang";
const NotFoundPage = () => (
  <Layout>
    <SetLang link="/error" />
    <SEO title="404: Not Found" />
    <section className="error-404">
      <h1>404</h1>
      <div className="error-box">NOT FOUND</div>
      <p className="error-paragraph-1">
        It&apos;s possible that the entry that you&apos;re looking for has been
        deleted or maybe the url doesn&apos;t exists in our records.
      </p>
      <p className="error-paragraph-2">
        You can go back to the previous page or try a new search trough the
        following form.
      </p>
      <div className="dv-search-area-blog">
        <form method="get" action="<?=  get_site_url() ;?>/en" id="form4">
          <input type="text" name="s" placeholder="Search" />
          <button
            type="submit"
            form="form4"
            value="Submit"
            className="dv-btn-submit-search-sd"
          >
            <i id="dv-search-icon-spr" className="icon-search" />
          </button>
        </form>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
