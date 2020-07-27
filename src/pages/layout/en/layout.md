---
templateKey: default
language: en
title: Layout
published: false

contactBar:
  details:
    - item: > 
        <span>
          <i class="icon-clock"></i>
          <h6>Mon-Fri 8:00 am-5:00 pm</h6>
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
      /en
  navigation:
    - title: HOME
      to: >
        /en
      menu:
        display: false
        items:
          - title: inicio2
            to: >
              /index
    - title: THE CLINIC
      to: >
        /en/the-clinic/
      menu:
        display: true
        items:
        - title: WHY CHOOSE US
          to: >
            /en/the-clinic/why-choose-us/
        - title: PHILOSOPHY
          to: >
            /en/the-clinic/philosophy/
        - title: FACILITIES
          to: >
            /en/the-clinic/facilities/
        - title: TECHNOLOGY
          to: >
            /en/the-clinic/technology/
        - title: PAYMENT OPTIONS AND FINANCING
          to: >
            /en/the-clinic/payment-options/
        - title: GUARANTEES
          to: >
            /en/the-clinic/guarantees/
    - title: SPECIALTIES
      to: >
        /en/specialties/
      menu:
        display: true
        items:
        - title: ORAL SURGERY
          to: >
            /en/specialties/oral-surgery/
        - title: ENDODONTICs
          to: >
            /en/specialties/endodontics/
        - title: aesthetic dentistry
          to: >
            /en/specialties/aesthetic-dentistry/
        - title: DENTAL IMPLANTS
          to: >
            /en/specialties/dental-implants/
        - title: ZYGOMATIC IMPLANTS
          to: >
            /en/specialties/zygomatic-implants/
        - title: GENERAL DENTISTRY
          to: >
            /en/specialties/general-dentistry/
        - title: ORTHODONTICS
          to: >
            /en/specialties/orthodontics/
        - title: periodontics
          to: >
            /en/specialties/periodontics/
        - title: prosthodontics
          to: >
            /en/specialties/prosthodontics/
        - title: sedation and general anesthesia
          to: >
            /en/specialties/sedation-and-general-anesthesia/
    - title: PROFESSIONAL STAFF
      to: >
        /en/professional-staff
      menu:
        display: false
        items:
          - title: inicio2
            to: >
              /index
    - title: blog
      to: >
        /en/blog/
      menu:
        display: false
        items:
          - title: inicio2
            to: >
              /index
    - title: contact
      to: >
        /en/contact/
      menu:
        display: false
        items:
          - title: inicio2
            to: >
              /index
  search:
    placeHolder: Search

footer:
  logo: /uploads/logo.svg
  partners:
    - img: /uploads/partners-dark.jpg
      alt: Partners 
  teethLogo: /uploads/teeth-logo.png
  slogan: >
    <h2 class="bebas">INNOVATION AND PRESTIGE IN DENTISTRY</h2>
  address: >
    <p>
      Multicentro Empresarial del Este, Miranda Tower, Nucleus A, 14th Floor, Office 143-A, Chacao, Caracas, Venezuela. P.C. 1060
      <br />
      +58<em> (212) </em>261.5251 / 3732 / 3331
    </p>
  phones:
    - number: +582122615251
    - number: +582122613732
    - number: +582122613331
  contact:
    link: /en/contact
    text: contact
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
    - link: /en/legal-notice/
      title: LEGAL NOTICE
    - link: /en/privacy-policy/
      title: PRIVACY POLICY
    - link: /en/use-of-cookies/
      title: USE OF COOKIES
  copyright: >
    <p>
      <span><i class="flag-icon flag-icon-ve"></i></span> &nbsp; RIF: J-40271686-9 |
      Copyright © 2020 DENTAL VIP,  Especialidades Odontológicas s.c. All Rights Reserved.| Managed with GIT &nbsp;
      <span><i class="icon-git"></i></span>
    </p>
forms:
  specialties:
    warning: >
      In order to send a message, you have to fill all data fields.
    fields:
      - name: name
        placeholder: First Name
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: lastName
        placeholder: Last Name
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
        placeholder: City
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: country
        placeholder: Country
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: phone
        placeholder: Phone Number
        type: tel
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: referredBy
        placeholder: How Did You Know Us?
        type: select
        value: "How Did You Know Us?"
        options:
          display: true
          items:
            - value: By a Dentist
            - value: By a Friend
            - value: On Instagram
            - value: On Facebook
            - value: On Google
      - name: gender
        placeholder: Gender
        type: select
        value: Gender
        options:
          display: true
          items:
            - value: Female
            - value: Male
      - name: specialty
        placeholder: Specialty of Interest
        type: select
        value: Specialty of Interest
        options:
          display: false
          items:
          - value: Oral Surgery
          - value: Endodontics
          - value: Aesthetic Dentistry
          - value: Dental Implants
          - value: Zygomatic Implants
          - value: General Dentistry
          - value: Orthodontics
          - value: Periodontics
          - value: Prosthodontics
          - value: Sedation and General Anesthesia
      - name: message
        placeholder: Write Your Message.
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
        value: ''
        options:
          display: false
          items:
            - value: Nombre
      - name: email
        placeholder: Email
        type: email
        value: ''
        options:
          display: false
          items:
            - value: Nombre
  contact:
    warning: >
      In order to send a message, you have to fill all data fields.
    fields:
      - name: name
        placeholder: First Name
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: lastName
        placeholder: Last Name
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
        placeholder: City
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: country
        placeholder: Country
        type: text
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: phone
        placeholder: Phone Number
        type: tel
        value: ""
        options:
          display: false
          items:
            - value: Nombre
      - name: subject
        placeholder: Subject
        type: text
        value: ''
        options:
          display: false
          items:
            - value: Nombre
      - name: message
        placeholder: Write your message.
        type: textarea
        value: ""
        options:
          display: false
          items:
            - value: Nombre



---
