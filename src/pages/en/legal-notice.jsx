import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../../Layout'
import SEO from '../../components/seo'
import SetLang  from '../../components/setLang'

const LegalWarningPage = () => {
  return (
    <Layout>
      <SetLang language="en" link="/aviso-legal" />
      <SEO title="Legal notice" />
      <section className="dv-static-legal">
        <div className="dv-legal-advise container-fluid dv-main-menu">
          <h1 className="dv-page-titles text-left">LEGAL NOTICE</h1>
          <h3 className="dv-page-titles text-left">Identifying data</h3>
          <div className="paragraph-group">
            <p>
              You are visiting the website{' '}
              <a
                onClick={e => {
                  e.preventDefault()
                  navigate('/en')
                }}
                href="/en"
                className="dv-link-green"
              >
                https://www.dentalvip.com.ve/en
              </a>{' '}
              owned by DENTAL VIP, Especialidades Odontológicas s.c.{' '}
              <i>(hereinafter, THE OWNER)</i> , with registered office at
              Multicentro Empresarial del Este, Miranda Tower, Nucleus A, 14th
              Floor, Office 143- A, Chacao, Caracas, Venezuela. Registered at
              the Public Registry of the Municipality of Chacao on 09/14/2012,
              under number 45, folio 366 and volume 42 of the protocol for 2012.
            </p>
            <br />
            <p>
              You can contact THE OWNER by any of the following means:
              <br />
              Telephone: +58 <i>(212)</i> 261.5251 / 3732 / 3331
              <br />
              Email:{' '}
              <a
                href="mailto:contacto@dentalvip.com.ve"
                className="dv-link-green"
              >
                contacto@dentalvip.com.ve
              </a>
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Web hosting </h3>
          <div className="paragraph-group">
            <p>
              GoDaddy.com, LLC, a Delaware Limited Liability Company.
              <br />
              Address: Corporate Headquarters 14455 N. Hayden Rd., Ste. 226
              Scottsdale, AZ 85260 EE. UU.
              <br />
              Telephones: +58 <i>(212)</i> 771.9061 / 800 5000555
              <br />
              Email address:{' '}
              <a href="mailto:HQ@godaddy.com" className="dv-link-green">
                HQ@godaddy.com
              </a>
              <br />
              Website:{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="dv-link-green"
                href="https://www.godaddy.com/"
              >
                https://www.godaddy.com/
              </a>
            </p>
          </div>
          <h3 className="dv-page-titles text-left">General users</h3>
          <div className="paragraph-group">
            <p>
              These conditions <i>(hereinafter Legal Notice)</i> are intended to
              regulate the use of the website that THE OWNER makes available to
              the general public.
            </p>
            <br />
            <p>
              The access and/or use of this website attributes the condition of
              USER, who accepts, from said access and/or use, the general
              conditions reflected here. The aforementioned conditions will be
              universally applicable and mandatory.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Portal use</h3>
          <div className="paragraph-group">
            <p>
              {' '}
              <a
                onClick={e => {
                  e.preventDefault()
                  navigate('/en/')
                }}
                className="dv-link-green"
                href="/en/"
              >
                https://www.dentalvip.com.ve/en
              </a>{' '}
              provides access to a multitude of information, services, programs
              or data <i>(hereinafter, “the contents”)</i> on the Internet
              belonging to THE OWNER or its licensors to which the USER may have
              access.
            </p>
            <br />
            <p>
              THE USER assumes responsibility for the use of the portal. This
              responsibility extends to the registration that is necessary to
              access certain services or contents. In said registry, THE USER
              will be responsible for providing truthful and lawful information.
              As a result of this registration, THE USER could be provided with
              a password for which he will be responsible, committing himself to
              make diligent and confidential use of it.
            </p>
            <br />
            <p>
              THE USER undertakes to make appropriate use of the contents and
              services that THE OWNER offers through its portal and with an
              enunciative but not limiting nature, not to use them to:
            </p>
            <br />
            <ul>
              <li>
                To fall into illegal activities or contrary to good faith and
                public order.
              </li>
              <br />
              <li>
                Disseminate content or propaganda racist, xenophobic,
                pornographic, of apology of terrorism or that attempts against
                human rights.
              </li>
              <br />
              <li>
                Causing damage to the physical and logical systems of DENTAL
                VIP, Especialidades Odontológicas s.c., its suppliers or third
                parties, introducing or spreading computer viruses or any other
                physical or logical systems that are likely to cause the
                aforementioned damages.
              </li>
              <br />
              <li>
                Try to access and use the email accounts of other users, modify
                or manipulate their messages.
              </li>
              <br />
              <li>
                Use the website or the information contained therein for
                commercial, political, advertising or for any other one, above
                all the sending of unsolicited emails.
              </li>
            </ul>
            <p>
              THE OWNER reserves the right to withdraw all comments and
              contributions that violate respect for the dignity of the person,
              that are discriminatory, xenophobic, racist, pornographic, that
              threaten youth or childhood, order or public safety or that, in
              his opinion; they are not suitable for publication. In any case,
              THE OWNER will not be responsible for the opinions expressed by
              users through forums, chats, social networks or other digital
              participation tools.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Data protection</h3>
          <div className="paragraph-group">
            <p>
              Everything related to the data protection policy is contained in
              the{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                onClick={e => {
                  e.preventDefault()
                  navigate('/en/privacy-policy/')
                }}
                href="/en/privacy-policy/"
                className="dv-link-green"
              >
                Privacy Policy document.
              </a>
            </p>
          </div>
          <h3 className="dv-page-titles text-left">
            Contents. Intellectual and industrial property
          </h3>
          <div className="paragraph-group">
            <p>
              THE OWNER owns all the intellectual and industrial property rights
              of his website, as well as the elements contained therein{' '}
              <i>
                (images, photographs, sound, audio, video, software or texts,
                brands or logos, color combinations, structure and design,
                selection of materials used, codes, computer programs necessary
                for its operation, access and use; among others)
              </i>
              .
            </p>
            <br />
            <p>
              All rights reserved. This website is protected by copyright,
              trademarks, service marks, patents and other property rights; in
              addition to those derived from current laws. Unauthorized use of
              any copyrighted material, trademarks or any other intellectual
              property without the express written consent of the owner, is
              strictly prohibited.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">
            Exclusion of guarantees and responsibility
          </h3>
          <div className="paragraph-group">
            <p>
              THE USER acknowledges that the use of the website, its contents
              and services is carried out under its sole responsibility.
              Specifically, merely by way of example, THE OWNER assumes no
              responsibility in the following areas:
            </p>
            <br />
            <ol>
              <li>
                The availability of the operation of the website, its services,
                contents and its quality or interoperability.
              </li>
              <br />
              <li>
                The purpose for which the website serves the objectives of THE
                USER.
              </li>
              <br />
              <li>
                The infringement of the current legislation by THE USER or third
                parties and, in particular, of the intellectual and industrial
                property rights that are owned by other persons or entities.
              </li>
              <br />
              <li>
                The existence of malicious codes or any other harmful computer
                element that could be caused by THE USER or third-party computer
                system. It is up to THE USER, in any case, to have adequate
                tools for the detection and disinfection of these elements.
              </li>
              <br />
              <li>
                Fraudulent access to the contents or services by unauthorized
                third parties, or, when appropriate; the capture, elimination,
                alteration, modification or manipulation of messages and
                communications of any kind that said third parties could make.
              </li>
              <br />
              <li>
                The correctness, veracity, topicality and usefulness of the
                content and services offered, and the subsequent use made of
                them by THE USER. THE OWNER will use all reasonable efforts and
                means to provide updated and reliable information.
              </li>
              <br />
              <li>
                Damage to computer equipments during access to the website and
                damage to USERS when they originate from failures or
                disconnections in telecommunications networks that interrupt the
                service.
              </li>
              <br />
              <li>
                Damages or losses arising from circumstances that occur due to a
                fortuitous event or force majeure.
              </li>
            </ol>
            <p>
              In case there are forums, in the use of the same or other similar
              spaces, it should be taken into account that the messages reflect
              only the opinion of THE USER who sends them, which is solely
              responsible. THE OWNER is not responsible for the content of the
              messages sent by THE USER.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">
            Modification of this legal notice and duration
          </h3>
          <div className="paragraph-group">
            <p>
              THE OWNER reserves the right to make, without prior notice, the
              modifications it deems appropriate in its portal, being able to
              change, delete or add as many contents and services that are
              provided through it, such as the way in which they are represented
              or located in your portal.
            </p>
            <br />
            <p>
              The validity of the aforementioned conditions will be based on
              their exposure and will be valid until they are modified by others
              duly published.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Links</h3>
          <div className="paragraph-group">
            <p>
              In the event that links or hyperlinks to other Internet sites are
              included in{' '}
              <a
                onClick={e => {
                  e.preventDefault()
                  navigate('/en')
                }}
                href="/en"
                className="dv-link-green"
              >
                https://www.dentalvip.com.ve/en
              </a>{' '}
              , THE OWNER will not exercise any control over said sites and
              contents. In no case, THE OWNER will assume any responsibility for
              the contents of any link belonging to a third-party website, nor
              will it guarantee the technical availability, quality,
              reliability, accuracy, breadth, veracity, validity and
              constitutionality of any matter or information contained in any of
              such hyperlinks and other Internet sites. Similarly, the inclusion
              of these external connections will not imply any type of
              association, merger or participation with the connected entities.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Exclusion rights</h3>
          <div className="paragraph-group">
            <p>
              THE OWNER reserves the right to deny or withdraw access to the
              portal and/or the services offered without prior warning, at its
              own request or from a third party, to those users who breach the
              content of this legal notice.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Generalities</h3>
          <div className="paragraph-group">
            <p>
              THE OWNER will pursue the breach of these conditions as well as
              any improper use of its portal exercising all civil and criminal
              actions that may correspond by law.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">
            Applicable law and jurisdiction
          </h3>
          <div className="paragraph-group">
            <p>
              The relationship between THE OWNER and THE USER will be governed
              by current Venezuelan regulations. All disputes and claims arising
              from this legal notice will be resolved by Venezuelan courts and
              tribunals.
            </p>
          </div>
          <h3 className="dv-page-titles text-left">Minor users</h3>
          <div className="paragraph-group">
            <p>
              <a
                onClick={e => {
                  e.preventDefault()
                  navigate('/en')
                }}
                href="/en"
                className="dv-link-green"
              >
                https://www.dentalvip.com.ve/en
              </a>{' '}
              directs its services to users over 18 years old. People under this
              age are not authorized to use our services and should not,
              therefore, send us their personal data. We inform you that if such
              circumstance occurs, DENTAL VIP, Especialidades Odontológicas s.c.
              is not responsible for the possible consequences that could be
              derived from the breach of the notice that this clause
              establishes.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LegalWarningPage