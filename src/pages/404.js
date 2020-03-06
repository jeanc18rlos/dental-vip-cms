import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";
import SetLang from "../components/setLang";
const NotFoundPage = () => {
  const [searchText, setSearchText] = useState("default");
  return (
    <Layout>
      <SetLang language="es" link="/en/404" />
      <SEO title="404: Página no encontrada" />
      <section className="error-404">
        <h1>404</h1>
        <div className="error-box">PÁGINA NO ENCONTRADA</div>
        <p className="error-paragraph-1">
          Es posible que la entrada que busca haya sido eliminada o que la
          dirección no exista en nuestros registros.
        </p>
        <p className="error-paragraph-2">
          Puede regresar a la pagina anterior o intentar realizar una nueva
          búsqueda mediante el siguiente formulario.
        </p>
        <div className="dv-search-area-blog">
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
                  navigate(`/blog/busqueda?text=${searchText}`);
                }}
              >
                <i className="icon-search" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
