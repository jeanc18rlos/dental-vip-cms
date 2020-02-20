import React from 'react'

import { navigate } from 'gatsby'
import Layout from '../Layout'
import SEO from '../components/seo'
import SetLang  from '../components/setLang'


const LegalWarningPage = () => {
  return (
    <Layout>
      <SetLang language="es" link="/en/legal-notice" />
      <SEO title="Aviso legal" />
      <section className="dv-static-legal">
        <div className="dv-legal-advise container-fluid dv-main-menu">
          <h1 className="dv-page-titles text-left">Aviso legal</h1>
          <h3 className="dv-page-titles text-left">Datos identificativos</h3>
          <div className="paragraph-group">
            <p>
              Usted está visitando la página web{' '}
              <a
                onClick={e => {
                  e.preventDefault()
                  navigate('/')
                }}
                href="/"
                className="dv-link-green"
              >
                https://www.dentalvip.com.ve/
              </a>{' '}
              titularidad de DENTAL VIP, Especialidades Odontológicas s.c., con
              domicilio social en Multicentro Empresarial del Este, Torre
              Miranda, Núcleo A, Piso 14, Oficina 143-A, Chacao, Caracas,
              Venezuela. Inscrita ante el Registro Público del Municipio Chacao
              en fecha 14/09/2012, bajo el número 45, folio 366 y tomo 42 del
              protocolo del año 2012.
            </p>
            <br />
            <p>
              Puede contactar con el TITULAR por cualquiera de los siguientes
              medios:
              <br />
              Teléfonos: +58 <i>(212)</i> 261.5251 / 3732 / 3331
              <br />
              Correo electrónico:{' '}
              <a
                href="mailto:contacto@dentalvip.com.ve"
                className="dv-link-green"
              >
                contacto@dentalvip.com.ve
              </a>
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Hospedaje web</h3>
          <div className="paragraph-group">
            <p>
              GoDaddy.com, LLC, a Delaware Limited Liability Company.
              <br />
              Dirección:&nbsp;Corporate Headquarters 14455 N. Hayden Rd., Ste.
              226 Scottsdale, AZ 85260 EE.&nbsp;UU.
              <br />
              Teléfonos: +58&nbsp;<i>(212)</i>&nbsp;771.9061 / 800 5000555
              <br />
              Dirección de correo electrónico:&nbsp;
              <a href="mailto:HQ@godaddy.com" className="dv-link-green">
                HQ@godaddy.com
              </a>
              <br />
              Página web:&nbsp;
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="dv-link-green"
                href="https://ve.godaddy.com"
              >
                https://ve.godaddy.com/
              </a>
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Usuarios</h3>
          <div className="paragraph-group">
            <p>
              Las presentes condiciones <i>(en adelante Aviso Legal)</i> tienen
              por finalidad regular el uso de la página web de EL TITULAR que
              pone a disposición del público general.
            </p>
            <br />
            <p>
              El acceso y/o uso de esta página web atribuye la condición de
              USUARIO, que acepta, desde dicho acceso y/o uso, las condiciones
              generales aquí reflejadas. Las citadas condiciones serán de
              aplicación universal y obligado cumplimiento.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Uso del portal</h3>
          <div className="paragraph-group">
            <p>
              {' '}
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
              proporciona el acceso a multitud de informaciones, servicios,
              programas o datos <i>(en adelante, “los contenidos”)</i> en
              Internet pertenecientes a EL TITULAR o a sus licenciantes a los
              que el USUARIO pueda tener acceso.
            </p>
            <br />
            <p>
              El USUARIO asume la responsabilidad del uso del portal. Dicha
              responsabilidad se extiende al registro que fuese necesario para
              acceder a determinados servicios o contenidos. En dicho registro
              el USUARIO será responsable de aportar información veraz y lícita.
              Como consecuencia de este registro, al USUARIO se le podría
              proporcionar una contraseña de la que será responsable,
              comprometiéndose a hacer un uso diligente y confidencial de la
              misma.
            </p>
            <br />
            <p>
              El USUARIO se compromete a hacer un uso adecuado de los contenidos
              y servicios que EL TITULAR ofrece a través de su portal y con
              carácter enunciativo pero no limitativo, a no emplearlos para:
            </p>
            <br />
            <ul>
              <li>
                Incurrir en actividades ilícitas, ilegales o contrarias a la
                buena fe y al orden público.
              </li>
              <br />
              <li>
                Difundir contenidos o propaganda racista, xenófoba,
                pornográfica, de apología del terrorismo o atentatoria contra
                los derechos humanos.
              </li>
              <br />
              <li>
                Provocar daños en los sistemas físicos y lógicos de DENTAL VIP,
                Especialidades Odontológicas s.c., de sus proveedores o de
                terceras personas, introducir o difundir en la red virus
                informáticos o cualesquiera otros sistemas físicos o lógicos que
                sean susceptibles de provocar los daños anteriormente
                mencionados.
              </li>
              <br />
              <li>
                Intentar acceder y, en su caso, utilizar las cuentas de correo
                electrónico de otros usuarios, modificar o manipular sus
                mensajes.
              </li>
              <br />
              <li>
                Utilizar el sitio web o las informaciones que en él se contienen
                con fines comerciales, políticos, publicitarios o para cualquier
                uso comercial, sobre todo el envío de correos electrónicos no
                solicitados.
              </li>
            </ul>
            <p>
              EL TITULAR se reserva el derecho a retirar todos aquellos
              comentarios y aportaciones que vulneren el respeto a la dignidad
              de la persona, que sean discriminatorios, xenófobos, racistas,
              pornográficos, que atenten contra la juventud o la infancia, el
              orden o la seguridad pública o que, a su juicio; no resultaran
              adecuados para su publicación. En cualquier caso, EL TITULAR no
              será responsable de las opiniones vertidas por los usuarios a
              través de los foros, chats, redes sociales u otras herramientas de
              participación digital.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Protección de datos</h3>
          <div className="paragraph-group">
            <p>
              Todo lo relativo a la política de protección de datos se encuentra
              recogido en el documento de{' '}
              <a
                onClick={e => {
                  e.preventDefault()
                  navigate('/politica-de-privacidad')
                }}
                href="/"
                className="dv-link-green"
              >
                Política de Privacidad.
              </a>
            </p>
          </div>
          <h3 className="dv-page-titles text-left">
            Contenidos. Propiedad intelectual e industrial
          </h3>
          <div className="paragraph-group">
            <p>
              El TITULAR es propietario de todos los derechos de propiedad
              intelectual e industrial de su página web, así como de los
              elementos contenidos en la misma{' '}
              <i>
                (imágenes, fotografías, sonido, audio, vídeo, software o textos,
                marcas o logotipos, combinaciones de colores, estructura y
                diseño, selección de materiales usados, códigos, programas de
                informática necesarios para su funcionamiento, acceso y uso;
                entre otros)
              </i>
              .
            </p>
            <br />
            <p>
              Todos los derechos reservados. Este sitio web está protegido por
              derechos de autor, marcas registradas, marcas de servicio,
              patentes y otros derechos de propiedad; además de los derivados de
              las leyes vigentes. El uso no autorizado de cualquier material con
              derechos de autor, marcas o cualquier otra propiedad intelectual
              sin el consentimiento expreso y por escrito del propietario, está
              terminantemente prohibido.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">
            Exclusión de garantías y responsabilidad
          </h3>
          <div className="paragraph-group">
            <p>
              EL USUARIO reconoce que la utilización de la página web, de sus
              contenidos y servicios se desarrolla bajo su exclusiva
              responsabilidad. En concreto, a título meramente enunciativo, EL
              TITULAR no asume ninguna responsabilidad en los siguientes
              ámbitos:
            </p>
            <br />
            <ol>
              <li>
                La disponibilidad del funcionamiento de la página web, sus
                servicios, contenidos y su calidad o interoperabilidad.
              </li>
              <br />
              <li>
                La finalidad para la que la página web sirva a los objetivos del
                USUARIO.
              </li>
              <br />
              <li>
                La infracción de la legislación vigente por parte del USUARIO o
                terceros y, en concreto, de los derechos de propiedad
                intelectual e industrial que sean titularidad de otras personas
                o entidades.
              </li>
              <br />
              <li>
                La existencia de códigos maliciosos o cualquier otro elemento
                informático dañino que pudiera causar el sistema informático del
                USUARIO o de terceros. Corresponde al USUARIO, en todo caso,
                disponer de herramientas adecuadas para la detección y
                desinfección de estos elementos.
              </li>
              <br />
              <li>
                El acceso fraudulento a los contenidos o servicios por terceros
                no autorizados, o, en su caso; la captura, eliminación,
                alteración, modificación o manipulación de los mensajes y
                comunicaciones de cualquier clase que dichos terceros pudieran
                realizar.
              </li>
              <br />
              <li>
                La exactitud, veracidad, actualidad y utilidad de los contenidos
                y servicios ofrecidos, y la utilización posterior que de ellos
                haga el USUARIO. EL TITULAR empleará todos los esfuerzos y
                medios razonables para facilitar la información actualizada y
                fehaciente.
              </li>
              <br />
              <li>
                Los daños producidos a equipos informáticos durante el acceso a
                la página web y los daños producidos a los USUARIOS cuando
                tengan su origen en fallos o desconexiones en las redes de
                telecomunicaciones que interrumpan el servicio.
              </li>
              <br />
              <li>
                Los daños o perjuicios que se deriven de circunstancias
                acaecidas por caso fortuito o de fuerza mayor.
              </li>
            </ol>
            <p>
              En caso de que existan foros, en el uso de los mismos u otros
              espacios análogos, ha de tenerse en cuenta que los mensajes
              reflejen únicamente la opinión del USUARIO que los remite, que es
              el único responsable. EL TITULAR no se hace responsable del
              contenido de los mensajes enviados por el USUARIO.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">
            Modificación de este aviso legal y duración
          </h3>
          <div className="paragraph-group">
            <p>
              EL TITULAR se reserva el derecho de efectuar, sin previo aviso,
              las modificaciones que considere oportunas en su portal, pudiendo
              cambiar, suprimir o añadir tantos contenidos y servicios que se
              presten a través de la misma, como la forma en la que éstos
              aparezcan representados o localizados en su portal.
            </p>
            <br />
            <p>
              La vigencia de las citadas condiciones irá en función de su
              exposición y estarán vigentes hasta que sean modificadas por otras
              debidamente publicadas.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Enlaces</h3>
          <div className="paragraph-group">
            <p>
              En el caso de que en{' '}
              <a
                onClick={e => {
                  e.preventDefault()
                  navigate('/')
                }}
                href="/"
                className="dv-link-green"
              >
                https://www.dentalvip.com.ve/
              </a>{' '}
              se incluyesen enlaces o hipervínculos hacia otros sitios de
              Internet, EL TITULAR no ejercerá ningún tipo de control sobre
              dichos sitios y contenidos. En ningún caso, EL TITULAR asumirá
              responsabilidad alguna por los contenidos de algún enlace
              perteneciente a un sitio web ajeno, ni garantizará la
              disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud,
              veracidad, validez y constitucionalidad de cualquier materia o
              información contenida en ninguno de dichos hipervínculos y otros
              sitios de Internet. Igualmente, la inclusión de estas conexiones
              externas no implicará ningún tipo de asociación, fusión o
              participación con las entidades conectadas.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Derechos de exclusión</h3>
          <div className="paragraph-group">
            <p>
              EL TITULAR se reserva el derecho a denegar o retirar el acceso al
              portal y/o los servicios ofrecidos sin necesidad de advertencia
              previa, a instancia propia o de un tercero, a aquellos usuarios
              que incumplan el contenido de este aviso legal.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Generalidades</h3>
          <div className="paragraph-group">
            <p>
              EL TITULAR perseguirá el incumplimiento de las presentes
              condiciones así como cualquier utilización indebida de su portal
              ejerciendo todas las acciones civiles y penales que le puedan
              corresponder en derecho.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">
            Legislación aplicable y jurisdicción
          </h3>
          <div className="paragraph-group">
            <p>
              La relación entre EL TITULAR y EL USUARIO se regirá por la
              normativa venezolana vigente. Todas las disputas y reclamaciones
              derivadas de este aviso legal se resolverán por los juzgados y
              tribunales venezolanos.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Menores de edad</h3>
          <div className="paragraph-group">
            <p>
              <a
                onClick={e => {
                  e.preventDefault()
                  navigate('/')
                }}
                href="/"
                className="dv-link-green"
              >
                https://www.dentalvip.com.ve
              </a>{' '}
              dirige sus servicios a usuarios mayores de 18 años. Los menores de
              esta edad no están autorizados a utilizar nuestros servicios y no
              deberán, por tanto, enviarnos sus datos personales. Informamos que
              si se da tal circunstancia, DENTAL VIP, Especialidades
              Odontológicas s.c. no se hace responsable de las posibles
              consecuencias que pudieran derivarse del incumplimiento del aviso
              que en esta misma cláusula se establece.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LegalWarningPage
