import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../../Layout'
import SEO from '../../components/seo'
import SetLang  from '../../components/setLang'


const CookiesUsagePage = () => (
  <Layout>
    <SetLang language="en" link="/uso-de-cookies" />
    <SEO title="Use of COOKIES" />
    <section className="dv-static-legal">
      <div className="dv-cookies-policy container-fluid dv-main-menu">
        <h1 className="dv-page-titles text-left">USE OF COOKIES</h1>
        <h3 className="dv-page-titles text-left">Cookies policy</h3>
        <div className="paragraph-group">
          <p>
            The website{' '}
            <a
              onClick={e => {
                e.preventDefault()
                navigate('/en/')
              }}
              className="dv-link-green"
              href="/en/"
            >
              https://www.dentalvip.com.ve/
            </a>{' '}
            owned by DENTAL VIP, Especialidades Odontológicas s.c. uses cookies.
          </p>
          <br />
          <p>
            Cookies are files that are downloaded to your computer when
            accessing certain web pages. Cookies allow a web page, among other
            things, to store and retrieve information about the browsing habits
            of a user or their equipment, depending on the information they
            contain and the way they use their device. In addition, they improve
            your browsing process, since they allow the web page to offer the
            user information that may be of interest depending on the use made
            and its content.
          </p>
          <br />
          <p>
            If you do not want to receive cookies, please configure your
            internet browser to erase them from your device&apos;s hard drive,
            block them or notify you if they are installed. To continue without
            changes in the configuration of cookies, simply continue browsing
            the website.
          </p>
        </div>
        <h3 className="dv-page-titles text-left">Consent</h3>
        <div className="paragraph-group">
          <p>
            The cookies we use do not store personal data or any type of
            information that can identify you, unless you want to register
            voluntarily in order to use the services that we put at your
            disposal or to receive information about promotions and contents of
            your interest.
          </p>
          <br />
          <p>
            By browsing and continuing on our website, you indicate that you are
            consenting to the use of the aforementioned cookies, and in the
            conditions contained in this Cookies Policy. If you do not agree,
            send an email to{' '}
            <a
              className="dv-link-green"
              href="mailto:contacto@dentalvip.com.ve"
            >
              contacto@dentalvip.com.ve
            </a>
          </p>
        </div>
        <h3 className="dv-page-titles text-left">
          How to block or delete installed cookies
        </h3>
        <div className="paragraph-group">
          <p>
            You can allow, block or delete the cookies installed on your
            computer by configuring your browser options. You can find
            information on how to do it, in relation to the most common
            browsers, in the links included below:
          </p>
          <br />
          <p>
            Explorer:{' '}
            <a
              style={{ wordBreak: 'break-all' }}
              target="_blank"
              rel="noopener noreferrer"
              className="dv-link-green"
              href="https://support.microsoft.com/en-us/kb/278835"
            >
              https://support.microsoft.com/en-us/kb/278835
            </a>{' '}
          </p>
          <br />
          <p>
            Chrome:{' '}
            <a
              style={{ wordBreak: 'break-all' }}
              target="_blank"
              rel="noopener noreferrer"
              className="dv-link-green"
              href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en"
            >
              https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&amp;hl=en
            </a>
          </p>
          <br />
          <p>
            Firefox:{' '}
            <a
              style={{ wordBreak: 'break-all' }}
              target="_blank"
              rel="noopener noreferrer"
              className="dv-link-green"
              href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
            >
              https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
            </a>
          </p>
          <br />
          <p>
            Safari:{' '}
            <a
              style={{ wordBreak: 'break-all' }}
              target="_blank"
              rel="noopener noreferrer"
              className="dv-link-green"
              href="https://support.apple.com/en-us/HT201265"
            >
              https://support.apple.com/en-us/HT201265
            </a>
          </p>
        </div>
        <h3 className="dv-page-titles text-left">Modifications</h3>
        <div className="paragraph-group">
          <p>
            The website{' '}
            <a
              onClick={e => {
                e.preventDefault()
                navigate('/en')
              }}
              className="dv-link-green"
              href="/en"
            >
              https://www.dentalvip.com.ve/en
            </a>{' '}
            owned by DENTAL VIP, Especialidades Odontológicas s.c. can modify
            this Cookies Policy according to the legal requirements, as well as,
            in order to adapt it to the demands dictated by any of the different
            public institutions of the state.
          </p>
          <br />
          <p>
            For this reason, we advise users to visit it periodically. When
            significant changes occur in this Cookies Policy, they will be
            communicated immediately, either through the web or through
            registered emails.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default CookiesUsagePage
