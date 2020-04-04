import React from "react";

const Features = (props) => {
  return (
    <section className="dv-home-specialties dv-home-specialties-home">
      <div className="container-fluid dv-main-menu">
        <h1 className="dv-page-titles text-center">
          ¿Qué Ventajas le Ofrece Nuestra Exclusiva Metodología de Trabajo?
        </h1>
        <p className="dv-text-testimonial text-center dv-mob-15 dv-mlr-155">
          Un novedoso enfoque multidisciplinario que posibilita la gestión
          integradora del conocimiento y potencia la capacidad resolutiva de
          nuestro equipo asistencial.
          <br />
          <strong>
            <strong>¡Todas las Especialidades en el Mismo Lugar!</strong>
          </strong>
        </p>
        <div className="row dv-padding-sp">
          <div className="row-eq-height col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center main-container">
            <a
              href="/especialidades/cirugia-bucal/"
              className="col-xs-12 text-center dv-spc-div dv-npl dv-npr "
            >
              <div
                className="specialties-image gatsby-image-wrapper"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div aria-hidden="true" />
                <img
                  aria-hidden="true"
                  src="https://dental-vip-stagging.netlify.com/static/e28f02d93042cada966aa6530f7e21d3/ffe2f/specialties-dental-aesthetics.png"
                  alt
                />
              </div>
              <h4 className="dv-spc-title">Cirugía Bucal</h4>
              <hr />
              <p className="dv-spc-desc">
                Prevención, diagnóstico y tratamiento de toda la patología
                quirúrgica propia o asociada a dientes, mucosas, labios, encías
                y huesos maxilares.
              </p>
              <i className="icon-plus dv-plus dv-plus-features center-block" />
              <hr className="dv-plus-hr" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
