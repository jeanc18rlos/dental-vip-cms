import React from "react";
import Layout from "../Layout";
import SEO from "../components/seo";
import SetLang from "../components/setLang";
const NotFoundPage = () => (
  <Layout>
    <SetLang link="/en/error" />
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
        <form method="get" action="<?=  get_site_url() ;?>/" id="form4">
          <input type="text" name="s" placeholder="Buscar" />
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
