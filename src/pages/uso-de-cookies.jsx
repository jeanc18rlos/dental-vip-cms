import React from 'react'

import { navigate } from 'gatsby'
import Layout from '../Layout'
import SEO from '../components/seo'
import SetLang  from '../components/setLang'

const CookiesUsagePage = () => (
  <Layout>
    <SetLang language="es" link="/en/use-of-cookies" />
    <SEO title="Uso DE COOKIES" />
    <section className="dv-static-legal">
      <div className="dv-cookies-policy container-fluid dv-main-menu">
        <h1 className="dv-page-titles text-left">Uso DE COOKIES</h1>
        <h3 className="dv-page-titles text-left">Política de cookies</h3>
        <div className="paragraph-group">
          <p>
            La página web&nbsp;
            <a
              onClick={e => {
                e.preventDefault()
                navigate('/')
              }}
              className="dv-link-green"
              href="/"
            >
              https://www.dentalvip.com.ve/
            </a>{' '}
            titularidad de DENTAL VIP, Especialidades Odontológicas s.c. utiliza
            cookies.
          </p>
          <br />
          <p>
            Las cookies son ficheros que se descargan en su computador al
            acceder a determinadas páginas web. Las cookies permiten a una
            página web, entre otras cosas, almacenar y recuperar información
            sobre los hábitos de navegación de un usuario o de su equipo,
            dependiendo de la información que contengan y de la forma en que
            utilice su dispositivo. Además, mejoran su proceso de navegación, ya
            que permiten que la página web ofrezca al usuario información que
            pueda ser de su interés en función del uso que realice y del
            contenido de la misma.
          </p>
          <br />
          <p>
            En caso de no querer recibir cookies, por favor, configure su
            navegador de internet para que las borre del disco duro de su
            dispositivo, las bloquee o le avise en caso de instalación de las
            mismas. Para continuar sin cambios en la configuración de las
            cookies, simplemente, continúe navegando en la página web.
          </p>
        </div>
        <h3 className="dv-page-titles text-left">Consentimiento</h3>
        <div className="paragraph-group">
          <p>
            Las cookies que utilizamos no almacenan dato personal alguno, ni
            ningún tipo de información que pueda identificarle, salvo que quiera
            registrarse de forma voluntaria con el fin de utilizar los servicios
            que ponemos a su disposición o de recibir información sobre
            promociones y contenidos de su interés.
          </p>
          <br />
          <p>
            Al navegar y continuar en nuestra web nos indica que está
            consintiendo el uso de las cookies antes enunciadas, y en las
            condiciones contenidas en la presente Política de cookies. En caso
            de no estar de acuerdo, envíe un correo electrónico a{' '}
            <a
              className="dv-link-green"
              href="mailto:contacto@dentalvip.com.ve"
            >
              contacto@dentalvip.com.ve
            </a>
          </p>
        </div>
        <h3 className="dv-page-titles text-left">
          Cómo bloquear o eliminar las cookies instaladas
        </h3>
        <div className="paragraph-group">
          <p>
            Puede Usted permitir, bloquear o eliminar las cookies instaladas en
            su equipo mediante la configuración de las opciones de su navegador.
            Puede encontrar información sobre cómo hacerlo, en relación con los
            navegadores más comunes, en los links que se incluyen a
            continuación:
          </p>
          <br />
          <p>
            Explorer:{' '}
            <a
              target="_blank"
              style={{ wordBreak: 'break-all' }}
              rel="noopener noreferrer"
              className="dv-link-green"
              href="https://support.microsoft.com/es-es/kb/278835"
            >
              https://support.microsoft.com/es-es/kb/278835
            </a>{' '}
          </p>
          <br />
          <p>
            Chrome:{' '}
            <a
              target="_blank"
              style={{ wordBreak: 'break-all' }}
              rel="noopener noreferrer"
              className="dv-link-green"
              href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647"
            >
              http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647
            </a>
          </p>
          <br />
          <p>
            Firefox:{' '}
            <a
              target="_blank"
              style={{ wordBreak: 'break-all' }}
              rel="noopener noreferrer"
              className="dv-link-green"
              href="http://support.mozilla.org/es/kb/Borrar%20cookies"
            >
              http://support.mozilla.org/es/kb/Borrar%20cookies
            </a>
          </p>
          <br />
          <p>
            Safari:{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="dv-link-green"
              style={{ wordBreak: 'break-all' }}
              href="http://support.apple.com/kb/ph5042"
            >
              http://support.apple.com/kb/ph5042
            </a>
          </p>
        </div>
        <h3 className="dv-page-titles text-left">Modificaciones</h3>
        <div className="paragraph-group">
          <p>
            La página web{' '}
            <a
              onClick={e => {
                e.preventDefault()
                navigate('/')
              }}
              className="dv-link-green"
              href="/"
            >
              https://www.dentalvip.com.ve/
            </a>{' '}
            titularidad de DENTAL VIP, Especialidades Odontológicas s.c. puede
            modificar esta Política de cookies en función de las exigencias
            legales, o bien, con la finalidad de adaptarla a las exigencias
            dictadas por cualquiera de las diferentes instituciones públicas del
            estado.
          </p>
          <br />
          <p>
            Por esta razón, aconsejamos a los usuarios que la visiten
            periódicamente. Cuando se produzcan cambios significativos en esta
            Política de cookies, se comunicarán de inmediato, bien mediante la
            web o a través de los correos electrónicos registrados.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default CookiesUsagePage
