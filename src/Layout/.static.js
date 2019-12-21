/**
 * @name static-data
 * STATIC DATA
 */

// SPANISH DATA ONLY
import React from 'react'

  import logo from '../img/layout/logo.svg'
  import headerLogo from '../img/layout/header/logo.png'
  import veIcon from '../img/layout/icons/venezuela.png'
  import prismicIcon from '../img/layout/icons/prismic.png'
  import partnerDark1 from '../img/layout/footer/partners/partner-1-dark.jpg'
  import partnerDark2 from '../img/layout/footer/partners/partner-2-dark.jpg'
  import partnerDark3 from '../img/layout/footer/partners/partner-3-dark.jpg'
  import teethLogo from '../img/layout/footer/teeth-logo.png'
  import preloaderSvg from '../img/layout/preloader/preloader.svg'


// Preloader
export const preloader = {
  title: 'cargando',
  img: preloaderSvg,
}

//  ENGLISH DATA ONLY

export const es = {
  search: {
    placeholder: 'Buscar',
  },
  footer: {
    logo,
    veIcon,
    prismicIcon,
    partnerDark1,
    partnerDark2,
    partnerDark3,
    teethLogo,
    slogan: 'Innovación y prestigio en Odontología',
    address:
      'Multicentro Empresarial del Este, Torre Miranda, Núcleo A, Piso 14, Oficina 143-A, Chacao, Caracas, Venezuela. C.P. 1060',
    mainNumber: {
      numbers: '261.5251 / 3732 / 3331',
      extension: ' (212) ',
      code: '+58',
    },
    phones: [
      {
        number: '+582122615251',
      },
      {
        number: '+582122613732',
      },
      {
        number: '+582122613331',
      },
    ],
    contact: {
      link: '/contact',
      text: 'contacto',
    },
    social: {
      facebook: 'https://www.facebook.com/dentalvip/',
      instagram: 'https://www.instagram.com/dental_vip/',
    },
    legal: [
      {
        link: '/aviso-legal/',
        title: 'AVISO LEGAL',
      },
      {
        link: '/politica-de-privacidad/',
        title: 'POLÍTICA DE PRIVACIDAD',
      },
      {
        link: '/uso-de-cookies/',
        title: 'USO DE COOKIES',
      },
    ],
    copyright: {
      tools: {
        prismic: '| Gestionado con Prismic',
      },
      text: ` RIF: J-40271686-9 | Copyright © ${new Date().getFullYear()} DENTAL
      VIP, Especialidades Odontológicas s.c. Todos los Derechos
      Reservados.`,
    },
  },
  header: {
    logo: headerLogo,
    social: {
      facebook: 'https://www.facebook.com/dentalvip/',
      instagram: 'https://www.instagram.com/dental_vip/',
    },
    links: [
      {
        title: 'INICIO',
        to: '/',
        subMenu: false,
      },
      {
        title: 'LA CLÍNICA',
        to: '/la-clinica/',
        props: {
          stateRef: 'clinic',
        },
        subMenu: [
          {
            title: 'POR QUÉ ELEGIRNOS',
            to: '/la-clinica/por-que-elegirnos',
          },
          {
            title: 'FILOSOFÍA',
            to: '/la-clinica/filosofia/',
          },
          {
            title: 'instalaciones',
            to: '/la-clinica/instalaciones/',
          },
          {
            title: 'TECNOLOGÍA',
            to: '/la-clinica/tecnologia/',
          },
          {
            title: 'financiamiento',
            to: '/la-clinica/financiamiento/',
          },
        ],
      },
      {
        title: 'Especialidades',
        to: '/especialidades/',
        props: {
          stateRef: 'specialties',
        },
        subMenu: [
          {
            title: 'CIRUGÍA BUCAL',
            to: '/especialidades/cirugia-bucal/',
          },
          {
            title: 'Endodoncia',
            to: '/especialidades/endodoncia/',
          },
          {
            title: 'ESTÉTICA DENTAL',
            to: '/especialidades/estetica-dental/',
          },
          {
            title: 'Implantes Dentales',
            to: '/especialidades/implantes-dentales/',
          },
          {
            title: 'Implantes Cigomáticos',
            to: '/especialidades/implantes-cigomaticos/',
          },
          {
            title: 'ODONTOLOGÍA general',
            to: '/especialidades/odontologia-general/',
          },
          {
            title: 'Ortodoncia',
            to: '/especialidades/ortodoncia/',
          },
          {
            title: 'Periodoncia',
            to: '/especialidades/periodoncia/',
          },
          {
            title: 'PRÓTESIS',
            to: '/especialidades/protesis/',
          },
          {
            title: 'Sedación y anestesia general',
            to: '/especialidades/sedacion-y-anestesia-general/',
          },
        ],
      },
      {
        title: 'profesionales',
        to: '/profesionales',
        subMenu: false,
      },
      {
        title: 'blog',
        to: '/blog/',
        subMenu: false,
      },

      {
        title: 'contacto',
        to: '/contacto/',
        subMenu: false,
      },
    ],
  },
  preloader: {
    title: 'cargando',
    img: preloaderSvg,
  },
  contactBar: {
    schedule: 'Lun-Vie 8:00 am-5:00 pm',
    phone: (
      <>
        +58 <em>&nbsp;(212)&nbsp;</em> 261.5251 / 3732 / 3331
      </>
    ),
    location: 'Multicentro Empresarial del Este, Chacao, Caracas, Venezuela.',
  },
}

export const en = {
  search: {
    placeholder: 'Search',
  },
  footer: {
    logo,
    veIcon,
    prismicIcon,
    partnerDark1,
    partnerDark2,
    partnerDark3,
    teethLogo,
    slogan: 'INNOVATION AND PRESTIGE IN DENTISTRY',
    address:
      'Multicentro Empresarial del Este, Miranda Tower, Nucleus A, 14th Floor, Office 143-A, Chacao, Caracas, Venezuela. P.C. 1060',
    mainNumber: {
      numbers: '261.5251 / 3732 / 3331',
      extension: ' (212) ',
      code: '+58',
    },
    phones: [
      {
        number: '+582122615251',
      },
      {
        number: '+582122613732',
      },
      {
        number: '+582122613331',
      },
    ],
    contact: {
      link: '/contact',
      text: 'contact',
    },
    social: {
      facebook: 'https://www.facebook.com/dentalvip/',
      instagram: 'https://www.instagram.com/dental_vip/',
    },
    legal: [
      {
        link: '/en/legal-notice/',
        title: 'LEGAL NOTICE',
      },
      {
        link: '/en/privacy-policy/',
        title: 'PRIVACY POLICY',
      },
      {
        link: '/en/use-of-cookies/',
        title: 'USE OF COOKIES',
      },
    ],
    copyright: {
      tools: {
        prismic: '| Managed with Prismic',
      },
      text: ` RIF: J-40271686-9 | Copyright © ${new Date().getFullYear()} DENTAL
      VIP, Especialidades Odontológicas s.c. All Rights Reserved.`,
    },
  },
  header: {
    logo: headerLogo,
    social: {
      facebook: 'https://www.facebook.com/dentalvip/',
      instagram: 'https://www.instagram.com/dental_vip/',
    },
    links: [
      {
        title: 'HOME',
        to: '/en/',
        subMenu: false,
      },
      {
        title: 'THE CLINIC',
        to: '/en/the-clinic/',
        props: {
          stateRef: 'clinic',
        },
        subMenu: [
          {
            title: 'WHY CHOOSE US',
            to: '/en/the-clinic/why-choose-us/',
          },
          {
            title: 'PHILOSOPHY',
            to: '/en/the-clinic/philosophy/',
          },
          {
            title: 'FACILITIES',
            to: '/en/the-clinic/facilities/',
          },
          {
            title: 'TECHNOLOGY',
            to: '/en/the-clinic/technology/',
          },
          {
            title: 'PAYMENT OPTIONS',
            to: '/en/the-clinic/payment-options/',
          },
        ],
      },
      {
        title: 'SPECIALTIES',
        to: '/en/specialties/',
        props: {
          stateRef: 'specialties',
        },
        subMenu: [
          {
            title: 'ORAL SURGERY',
            to: '/en/specialties/oral-surgery/',
          },
          {
            title: 'ENDODONTICs',
            to: '/en/specialties/endodontics/',
          },
          {
            title: 'aesthetic dentistry',
            to: '/en/specialties/aesthetic-dentistry/',
          },
          {
            title: 'DENTAL IMPLANTS',
            to: '/en/specialties/dental-implants/',
          },
          {
            title: 'ZYGOMATIC IMPLANTS',
            to: '/en/specialties/zygomatic-implants/',
          },
          {
            title: 'GENERAL DENTISTRY',
            to: '/en/specialties/general-dentistry/',
          },
          {
            title: 'ORTHODONTICS',
            to: '/en/specialties/orthodontics/',
          },
          {
            title: 'periodontics',
            to: '/en/specialties/periodontics/',
          },
          {
            title: 'prosthodontics',
            to: '/en/specialties/prosthodontics/',
          },

          {
            title: 'sedation and general anesthesia',
            to: '/en/specialties/sedation-and-general-anesthesia/',
          },
        ],
      },
      {
        title: 'PROFESSIONAL STAFF',
        to: '/en/professional-staff',
        subMenu: false,
      },
      {
        title: 'blog',
        to: '/en/blog/',
        subMenu: false,
      },

      {
        title: 'contact',
        to: '/en/contact/',
        subMenu: false,
      },
    ],
  },
  preloader: {
    title: 'cargando',
    img: preloaderSvg,
  },
  contactBar: {
    schedule: 'Mon-Fri 8:00 am-5:00 pm',
    phone: (
      <>
        +58 <em>&nbsp;(212)&nbsp;</em> 261.5251 / 3732 / 3331
      </>
    ),
    location: 'Multicentro Empresarial del Este, Chacao, Caracas, Venezuela.',
  },
}
