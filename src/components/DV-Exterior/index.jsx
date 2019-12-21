import React from "react";
import { navigate } from "gatsby";
const DVexterior = ({ language }) => {
  return (
    <section className="dv-exterior" style={{}}>
      <div className="row container-fluid dv-main-menu">
        <div className="row col-xs-12">
          <main className="col-xs-12 col-sm-12 col-md-6 col-lg-5 image">
            <img style={{maxWidth: '100%'}} src="https://dentalvip.com.ve/wp-content/uploads/2018/10/map.png" />
          </main>
          <aside className="col-xs-12 col-sm-12 col-md-6 col-lg-7">
            <h1 className="dv-page-titles">
              {language === "es"
                ? "¿Vive Fuera de Venezuela?"
                : "Do You Live Outside of Venezuela?"}
            </h1>
            <p className="dv-page-text">
              {language === "es"
                ? "Planifique su viaje y ahorre grandes sumas de dinero en tratamientos bucodentales de complejidad."
                : "Plan your trip and save a lot of money on complex oral treatments."}
            </p>
            <a
              onClick={() => {
                navigate("/");
              }}
              className="dv-white-btn"
            >
              Foreign Patients
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default DVexterior;
