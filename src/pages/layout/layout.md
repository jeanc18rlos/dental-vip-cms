---
templateKey: default
language: es
title: Layout
published: false

contactBar:
  details:
    - item: >
        <span>
          <i class="icon-clock"></i>
          <h6>Lun-Vie 8:00 am-5:00 pm</h6>
        </span>
    - item: >
        <span>
          <i class="icon-phone"></i>
          <h6>
            +58 <em>&nbsp;(212)&nbsp;</em>
            <wbr /> 261.5251 /<wbr /> 3732 /<wbr /> 3331
          </h6>
        </span>
    - item: >
        <span class="long">
          <i class="icon-map-marker-alt"></i>
          <h6>
            Multicentro Empresarial del Este,
            <wbr /> Chacao,
            <wbr /> Caracas,
            <wbr /> Venezuela.
          </h6>
        </span>
  social:
    - item: >
        <a
        target="_blank"
        alt="facebook"
        rel="noopener noreferrer"
        href="https://www.facebook.com/dentalvip/">
          <i class="icon-facebook" />
        </a>
    - item: >
        <a
          target="_blank"
          alt="instagram"
          rel="noopener noreferrer"
          href="https://www.instagram.com/dental_vip/">
          <i class="icon-instagram" />
        </a>

header:
  brand:
    logo: /uploads/logo.svg
    to: >
      /
  navigation:
    - title: INICIO
      to: >
        /
      menu:
        display: false
        items:
          - title: inicio2
            to: >
              /index
    - title: LA CLÍNICA
      to: >
        /la-clinica/
      menu:
        display: true
        items:
          - title: POR QUÉ ELEGIRNOS
            to: >
              /la-clinica/por-que-elegirnos
          - title: FILOSOFÍA
            to: >
              /la-clinica/filosofia/
          - title: instalaciones
            to: >
              /la-clinica/instalaciones/
          - title: TECNOLOGÍA
            to: >
              /la-clinica/tecnologia/
          - title: financiamiento
            to: >
              /la-clinica/financiamiento/
          - title: Garantías
            to: >
              /la-clinica/garantias/
    - title: Especialidades
      to: >
        /especialidades/
      menu:
        display: true
        items:
          - title: CIRUGÍA BUCAL
            to: >
              /especialidades/cirugia-bucal/
          - title: Endodoncia
            to: >
              /especialidades/endodoncia/
          - title: ESTÉTICA DENTAL
            to: >
              /especialidades/estetica-dental/
          - title: Implantes Dentales
            to: >
              /especialidades/implantes-dentales/
          - title: Implantes Cigomáticos
            to: >
              /especialidades/implantes-cigomaticos/
          - title: ODONTOLOGÍA general
            to: >
              /especialidades/odontologia-general/
          - title: Ortodoncia
            to: >
              /especialidades/ortodoncia/
          - title: Periodoncia
            to: >
              /especialidades/periodoncia/
          - title: PRÓTESIS
            to: >
              /especialidades/protesis/
          - title: Sedación y anestesia general
            to: >
              /especialidades/sedacion-y-anestesia-general/
    - title: profesionales
      to: >
        /profesionales
      menu:
        display: false
        items:
          - title: inicio2
            to: >
              /index
    - title: blog
      to: >
        /blog/
      menu:
        display: false
        items:
          - title: inicio2
            to: >
              /index
    - title: contacto
      to: >
        /contacto/
      menu:
        display: false
        items:
          - title: inicio2
            to: >
              /index
  search:
    placeHolder: Buscar

footer:
  logo: /uploads/logo.svg
  partners:
    - img: /uploads/partners-idd-dark.jpg
      alt: Institute of Digital Dentistry
    - img: /uploads/partners-qdc-dark.jpg
      alt: Quality Dental Center
    - img: /uploads/partners-iti-dark.jpg
      alt: International Team for Implantology
  teethLogo: /uploads/teeth-logo.png
  slogan: >
    <h2 class="bebas">INNOVACIÓN Y PRESTIGIO EN ODONTOLOGÍA</h2>
  address: >
    <p>
      Multicentro Empresarial del Este, Torre Miranda, Núcleo A, Piso
      14, Oficina 143-A, Chacao, Caracas, Venezuela. C.P. 1060
      <br />
      +58<em> (212) </em>261.5251 / 3732 / 3331
    </p>
  phones:
    - number: +582122615251
    - number: +582122613732
    - number: +582122613331
  contact:
    link: /contacto
    text: contacto
  social:
    - item: >
        <a
        target="_blank"
        alt="facebook"
        rel="noopener noreferrer"
        href="https://www.facebook.com/dentalvip/">
          <i class="icon-facebook" />
        </a>
    - item: >
        <a
          target="_blank"
          alt="instagram"
          rel="noopener noreferrer"
          href="https://www.instagram.com/dental_vip/">
          <i class="icon-instagram" />
        </a>
  legal:
    - link: /aviso-legal/
      title: AVISO LEGAL
    - link: /politica-de-privacidad/
      title: POLÍTICA DE PRIVACIDAD
    - link: /uso-de-cookies/
      title: USO DE COOKIES
  copyright: >
    <p>
      <i class="flag-icon flag-icon-ve"></i> &nbsp; RIF: J-40271686-9 |
      Copyright © 2020 DENTAL VIP, Especialidades Odontológicas s.c. Todos
      los Derechos Reservados.| Gestionado con GIT &nbsp;
      <i class="icon-git"></i>
    </p>

forms:
  specialties:
    warning: >
      Para enviar un mensaje, es obligatorio rellenar todos los campos del formulario.
    fields:
      - name: subject
        placeholder: Asunto
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: name
        placeholder: Nombre
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: lastName
        placeholder: Apellido
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: email
        placeholder: Correo electrónico
        type: email
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: city
        placeholder: Ciudad
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: country
        placeholder: País
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: phone
        placeholder: Número de teléfono
        type: tel
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: referredBy
        placeholder: ¿Cómo nos ha conocido?
        type: select
        value: ""
        options:
          display: true
          items:
            - value: Por un odontólogo
            - value: Por un amigo
            - value: Por Instagram
            - value: Por Facebook
            - value: Por Google
      - name: gender
        placeholder: Género
        type: select
        value: Género
        options:
          display: true
          items:
            - value: Femenino
            - value: Masculino

      - name: specialty
        placeholder: Especialidad de interés
        type: select
        value: Especialidad de interés
        options:
          display: false
          items:
            - value: Cirugía Bucal
            - value: Endodoncia
            - value: Estética Dental
            - value: Implantes Dentales
            - value: Implantes Cigomáticos
            - value: Odontología General
            - value: Ortodoncia
            - value: Periodoncia
            - value: Prótesis
            - value: Sedación Y Anestesia General
      - name: message
        placeholder: Escriba su mensaje
        type: textarea
        value: ""
        options:
          display: false
          items:
            - value: Nombre
  subscription:
    warning: >
      Para enviar un mensaje, es obligatorio rellenar todos los campos del formulario.
    fields:
      - name: name
        placeholder: Nombre
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: email
        placeholder: Email
        type: email
        value: ""
        options:
          display: false
          items:
            - value: Nombre
  contact:
    warning: >
      Para enviar un mensaje, es obligatorio rellenar todos los campos del formulario.
    fields:
      - name: name
        placeholder: Nombre
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: lastName
        placeholder: Apellido
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: email
        placeholder: Email
        type: email
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: city
        placeholder: Ciudad
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: country
        placeholder: Pais
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: phone
        placeholder: Telefono
        type: tel
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: subject
        placeholder: Asunto
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: message
        placeholder: Escriba su mensaje.
        type: textarea
        value: ""
        options:
          display: false
          items:
            - value: Nombre
---
