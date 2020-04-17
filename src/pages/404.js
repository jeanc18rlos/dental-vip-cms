import React, { useState, useEffect } from "react";
import Layout from "../layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";
import SetLang from "../components/setLang";
import styled, { css } from "styled-components";
import { rhythm, scale } from "../utils/typography";

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
    margin-bottom: ${rhythm(3)} ;
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
  const [searchText, setSearchText] = useState("");
  return (
    <Layout>
      <SetLang language="es" link="/en/404" />
      <SEO title="404: Página no encontrada" />
      <StlyledNotF>
        <h1 className="title">404</h1>
        <h2 className="error-box">PÁGINA NO ENCONTRADA</h2>
        <p>
          Es posible que la entrada que busca haya sido eliminada o que la
          dirección no exista en nuestros registros.
        </p>
        <p>
          Puede regresar a la pagina anterior o intentar realizar una nueva
          búsqueda mediante el siguiente formulario.
        </p>

        <div className="form" id="form4">
          <input
            value={searchText}
            onChange={(e) => {
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
      </StlyledNotF>
    </Layout>
  );
};

export default NotFoundPage;
